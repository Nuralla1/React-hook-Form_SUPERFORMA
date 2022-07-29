import { createContext, useContext, useState } from "react";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});

  const setValues = (values) => {
    setData((prev) => ({ ...prev, ...values }));
  };

  const value = {
    data,
    setValues,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = () => useContext(DataContext);
