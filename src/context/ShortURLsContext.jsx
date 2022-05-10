import { useState, useContext, createContext } from "react";

const ShortURLsContext = createContext();

export const useShortURLs = () => useContext(ShortURLsContext);

export const ShortURLsProvider = ({ children }) => {
  const [shortURLs, setShortURLs] = useState([
    {
      URL: "https://super-mario-yachujoshi.vercel.app/",
      shortURL: "https://shrtco.de/DBme1R",
    },
    {
      URL: "https://melodify-react.vercel.app/",
      shortURL: "https://shrtco.de/EVdF7e",
    },
  ]);

  return (
    <ShortURLsContext.Provider value={{ shortURLs, setShortURLs }}>
      {children}
    </ShortURLsContext.Provider>
  );
};
