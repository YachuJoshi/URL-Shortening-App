import styles from "./Features.module.scss";

import { FeaturesBox } from "./FeaturesBox";
import { FEATURES_LIST } from "../Content";

export const Features = () => {
  return (
    <div className={styles.Features}>
      <ul className={styles.FeaturesList}>
        {FEATURES_LIST.map((feature, index) => (
          <li key={index} className={styles.FeaturesItem}>
            <FeaturesBox feature={feature} />
          </li>
        ))}
      </ul>
    </div>
  );
};
