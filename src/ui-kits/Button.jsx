import cx from "classnames";
import styles from "./Button.module.scss";

const BUTTON_TYPES = {
  primary: "primary",
  secondary: "secondary",
};

export const Button = (props) => {
  const className = props.className || "";

  return (
    <button
      {...props}
      className={cx(className, styles.Button, {
        [styles.ButtonPrimary]: props.type === BUTTON_TYPES.primary,
        [styles.ButtonSecondary]: props.type === BUTTON_TYPES.secondary,
      })}
    >
      {props.children}
    </button>
  );
};
