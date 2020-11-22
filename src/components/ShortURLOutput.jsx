import { useEffect } from "react";

import styles from "./ShortURLOutput.module.scss";
import { ShortURLBox } from "./ShortURLBox";

import { useShortURLs } from "../context";

export const ShortURLOutput = () => {
  const { shortURLs } = useShortURLs();

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
