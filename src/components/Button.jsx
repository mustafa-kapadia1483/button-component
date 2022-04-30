import styles from "./Button.module.css";

const Button = ({
  children,
  size,
  variant,
  state,
  color,
  disabled,
  disableShadow,
}) => {
  console.log(styles);
  console.log(variant);
  return (
    <button
      className={`${styles.btn} ${color ? styles[`color-${color}`] : ""} ${
        variant ? styles[`variant-${variant}`] : ""
      } ${state ? styles[state] : ""} ${
        disableShadow ? styles["no-box-shadow"] : ""
      } ${size ? styles[`size-${size}`] : ""}`}
      disabled={disabled}
    >
      {children ? children : "Default"}
    </button>
  );
};

export default Button;
