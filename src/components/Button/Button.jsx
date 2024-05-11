import "./Button.modules.css";

export const Button = ({
  children,
  variant,
  backgroundColor,
  color,
  overlay,
}) => {
  return (
    <button
      style={{
        backgroundColor:
          variant === "outline" ? "transparent" : backgroundColor,
        border: variant === "outline" ? `1px solid ${backgroundColor}` : "none",
        color: color,
        position: overlay === "true" ? "fixed" : null,
        bottom: overlay === "true" ? "1.5rem" : null,
        right: overlay === "true" ? "1.5rem" : null,
      }}
    >
      {children}
    </button>
  );
};
