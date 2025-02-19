import React from "react";

interface UserContextType {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const UserContext = React.createContext<UserContextType | null>(null);

export const useValidation = () => {
  return React.useContext(UserContext);
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = React.useState<string>("Username");
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

  return (
    <UserContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
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