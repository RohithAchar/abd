import { createContext, useContext, useState, useCallback } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const hideLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const showLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, hideLoading, showLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within LoadingProvider");
  }
  return context;
};
