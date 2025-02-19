import React from "react";

interface UserContextType {
  selectedPlan: string;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;
  price: number;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  monthlyPrice: number;
  setMonthlyPrice: React.Dispatch<React.SetStateAction<number>>;
}

const UserContext = React.createContext<UserContextType | null>(null);

export const useValidation = () => {
  return React.useContext(UserContext);
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const EXPIRATION_TIME = 60 * 60 * 1000; // 1 Stunde (in Millisekunden)

  const getStoredValue = (key: string) => {
    const item = sessionStorage.getItem(key);
    if (!item) return null;

    const { value, timestamp } = JSON.parse(item);
    if (Date.now() - timestamp > EXPIRATION_TIME) {
      sessionStorage.removeItem(key);
      return null;
    }
    return value;
  };

  const setStoredValue = (key: string, value: number | string) => {
    const item = {
      value,
      timestamp: Date.now(),
    };
    sessionStorage.setItem(key, JSON.stringify(item));
  };

  const [selectedPlan, setSelectedPlan] = React.useState<string>(
    getStoredValue("plan") || ""
  );
  const [price, setPrice] = React.useState<number>(
    getStoredValue("price") || 0
  );
  const [monthlyPrice, setMonthlyPrice] = React.useState<number>(
    getStoredValue("monthlyPrice") || 0
  );

  React.useEffect(() => {
    setStoredValue("plan", selectedPlan);
  }, [selectedPlan]);

  React.useEffect(() => {
    setStoredValue("price", price);
  }, [price]);

  React.useEffect(() => {
    setStoredValue("monthlyPrice", monthlyPrice);
  }, [monthlyPrice]);

  return (
    <UserContext.Provider
      value={{
        selectedPlan,
        setSelectedPlan,
        price,
        setPrice,
        monthlyPrice,
        setMonthlyPrice,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!UserContext) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
