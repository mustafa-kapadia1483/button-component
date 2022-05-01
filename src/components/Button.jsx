import styles from "./Button.module.css";

const Icon = ({ name }) => <span class="material-icons">{name}</span>;

const Button = ({
  children,
  size,
  variant,
  state,
  color,
  disableShadow,
  startIcon,
  endIcon,
  ...attributes
}) => {
  const btnClass = `${styles.btn} ${color ? styles[`color-${color}`] : ""} ${
    variant ? styles[`variant-${variant}`] : ""
  } ${state ? styles[state] : ""} ${
    disableShadow ? styles["no-box-shadow"] : ""
  } ${size ? styles[`size-${size}`] : ""}`.trim();

  return (
    <button className={btnClass} {...attributes}>
      {startIcon && <Icon name={startIcon} />}
      {children ? <span>{children}</span> : <span>Default</span>}
      {endIcon && <Icon name={endIcon} />}
    </button>
  );
};

export default Button;
