import styles from "./FooterLink.module.scss";

export const FooterLink = ({ link }) => {
  const { heading, list } = link;

  return (
    <div className={styles.Links}>
      <h3 className={styles.LinkHeading}>{heading}</h3>
      <ul className={styles.LinksList}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
