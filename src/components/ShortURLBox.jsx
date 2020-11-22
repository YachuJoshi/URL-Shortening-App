import styles from "./ShortURLBox.module.scss";
import { Button } from "../ui-kits";

export const ShortURLBox = () => {
  return (
    <div className={styles.ShortURLBox}>
      <div className={styles.OriginalLinkSection}>
        <p className={styles.OriginalLink}>https://www.facebook.com</p>
      </div>
      <div className={styles.AfterLinkSection}>
        <p className={styles.ShortLink}>https://rel.ink/k4lKyk</p>
        <Button kind="primary" className={styles.Button}>
          Copy
        </Button>
      </div>
    </div>
  );
};
