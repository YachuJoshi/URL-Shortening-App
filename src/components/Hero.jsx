import styles from "./Hero.module.scss";

import { Button } from "../ui-kits";

export const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.Details}>
        <h1 className={styles.Heading}>More than just shorter links</h1>
        <p className={styles.Text}>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button type="primary" className={styles.Button}>
          Get Started
        </Button>
      </div>
      <figure className={styles.BrandingFigure}>
        <img
          src="/images/illustration-working.svg"
          alt="Working"
          className={styles.BrandingImage}
        />
      </figure>
    </div>
  );
};
