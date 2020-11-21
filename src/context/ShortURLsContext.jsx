import { useState, useContext, createContext } from "react";

const ShortURLsContext = createContext();

export const useShortURLs = () => useContext(ShortURLsContext);

export const ShortURLsProvider = ({ children }) => {
  const [shortedURLs, setShortedURLs] = useState([]);

  return (
    <ShortURLsContext.Provider value={{ shortedURLs, setShortedURLs }}>
      {children}
    </ShortURLsContext.Provider>
  );
};
