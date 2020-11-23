import styles from "./FeaturesBox.module.scss";

export const FeaturesBox = ({ feature, index }) => {
  const { icon, title, description } = feature;
  return (
    <div className={styles.FeaturesBox}>
      <figure className={styles.Figure}>
        <img src={icon} alt={title} className={styles.Logo} />
      </figure>
      <div className={styles.Details}>
        <h2 className={styles.Title}>{title}</h2>
        <p className={styles.Description}>{description}</p>
      </div>
    </div>
  );
};
