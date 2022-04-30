import styles from "./Button.module.css";

const Button = ({ children, variant = "default", state = "" }) => {
  console.log(styles);
  console.log(variant);
  return (
    <button className={`${styles.btn} ${styles[variant]} ${styles[state]}`}>
      {children ? children : "Default"}
    </button>
  );
};

export default Button;
