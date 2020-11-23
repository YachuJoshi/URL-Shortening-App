import styles from "./BoostLink.module.scss";

import { Button } from "../ui-kits";

export const BoostLink = () => {
  return (
    <div className={styles.BoostLinkSection}>
      <div className={styles.Details}>
        <h2 className={styles.Heading}>Boost your links today</h2>
        <Button kind="primary" className={styles.Button}>
          Get Started
        </Button>
      </div>
    </div>
  );
};
