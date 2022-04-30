import styles from "./Button.module.css";

const Button = ({
  children,
  variant = "default",
  state = "",
  disabled = false,
}) => {
  console.log(styles);
  console.log(variant);
  return (
    <button
      className={`${styles.btn} ${variant ? styles[variant] : ""} ${
        state ? styles[state] : ""
      }`}
      disabled={disabled}
    >
      {children ? children : "Default"}
    </button>
  );
};

export default Button;
