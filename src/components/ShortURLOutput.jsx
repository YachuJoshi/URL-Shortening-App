import { useEffect } from "react";

import styles from "./ShortURLOutput.module.scss";
import { ShortURLBox } from "./ShortURLBox";

import { useShortURLs } from "../context";

export const ShortURLOutput = () => {
  const { shortURLs, setShortURLs } = useShortURLs();

  useEffect(() => {
    setShortURLs((prevShortURLs) => {
      return !prevShortURLs.length
        ? [
            ...prevShortURLs,
            {
              URL: "https://melodify-music-app.netlify.app/",
              shortURL: "https://shrtco.de/b62Vi",
            },
          ]
        : null;
    });
  }, []);

  return (
    <section className={styles.Wrapper}>
      <div className={styles.ShortURLOutput}>
        <ul className={styles.ShortURLList}>
          {[...new Set(shortURLs)].map((shortURL, index) => (
            <li key={index} className={styles.ShortURLItem}>
              <ShortURLBox url={shortURL.URL} shortURL={shortURL.shortURL} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
