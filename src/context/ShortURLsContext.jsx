import { useState, useContext, createContext } from "react";

const ShortURLsContext = createContext();

export const useShortURLs = () => useContext(ShortURLsContext);

export const ShortURLsProvider = ({ children }) => {
  const [shortURLs, setShortURLs] = useState([
    {
      URL: "https://melodify-music-app.netlify.app/",
      shortURL: "https://shrtco.de/b62Vi",
    },
  ]);

  return (
    <ShortURLsContext.Provider value={{ shortURLs, setShortURLs }}>
      {children}
    </ShortURLsContext.Provider>
  );
};
