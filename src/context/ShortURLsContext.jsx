import { useState, useContext, createContext } from "react";

const ShortURLsContext = createContext();

export const useShortURLs = () => useContext(ShortURLsContext);

export const ShortURLsProvider = ({ children }) => {
  const [shortURLs, setShortURLs] = useState([]);

  return (
    <ShortURLsContext.Provider value={{ shortURLs, setShortURLs }}>
      {children}
    </ShortURLsContext.Provider>
  );
};
