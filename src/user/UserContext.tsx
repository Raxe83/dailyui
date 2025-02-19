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
  const [selectedPlan, setSelectedPlan] = React.useState<string>("");
  // TODO: Session storage for price and monthlyPrice
  const [price, setPrice] = React.useState<number>(0);
  const [monthlyPrice, setMonthlyPrice] = React.useState<number>(0);

  return (
    <UserContext.Provider value={{ selectedPlan, setSelectedPlan, price, setPrice, monthlyPrice, setMonthlyPrice }}>
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
