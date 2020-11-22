import styles from "./ShortURLOutput.module.scss";

import { ShortURLBox } from "./ShortURLBox";

export const ShortURLOutput = () => {
  return (
    <section className={styles.Wrapper}>
      <div className={styles.ShortURLOutput}>
        <ul className={styles.ShortURLList}>
          <li className={styles.ShortURLItem}>
            <ShortURLBox />
          </li>
          <li className={styles.ShortURLItem}>
            <ShortURLBox />
          </li>
          <li className={styles.ShortURLItem}>
            <ShortURLBox />
          </li>
        </ul>
      </div>
    </section>
  );
};
