import cx from "classnames";
import styles from "./Button.module.scss";

const BUTTON_KINDS = {
  primary: "primary",
  secondary: "secondary",
};

export const Button = (props) => {
  const className = props.className || "";

  return (
    <button
      {...props}
      className={cx(className, styles.Button, {
        [styles.ButtonPrimary]: props.kind === BUTTON_KINDS.primary,
        [styles.ButtonSecondary]: props.kind === BUTTON_KINDS.secondary,
      })}
    >
      {props.children}
    </button>
  );
};
