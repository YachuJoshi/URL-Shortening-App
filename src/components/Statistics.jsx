import styles from "./Statistics.module.scss";

export const Statistics = () => {
  return (
    <div className={styles.Statistics}>
      <h2 className={styles.Heading}>Advanced Statistics</h2>
      <p className={styles.Summary}>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </div>
  );
};
