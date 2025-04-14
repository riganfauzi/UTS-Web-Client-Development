// Deps
import classNames from "classnames";

const Button = ({
  children,
  variant = "outline-dark",
  shape = "circle",
  ...otherButtonProps
}) => {
  return (
    <button
      {...otherButtonProps}
      className={classNames(
        "border",
        "transition-all",
        "cursor-pointer",
        shape === "square"
          ? classNames("py-3", "px-4", "rounded-lg")
          : shape === "oval"
          ? classNames("py-6", "px-12", "rounded-full")
          : classNames("p-3", "xl:p-5", "rounded-full"),
        variant === "light"
          ? classNames("bg-white", "text-gray-900", "border-white")
          : variant === "dark"
          ? classNames(
              "bg-gray-900",
              "text-slate-100",
              "border-gray-700",
              "hover:text-slate-100"
            )
          : classNames(
              "text-gray-700",
              "border-gray-700",
              "hover:bg-gray-900",
              "hover:text-slate-100"
            ),
        otherButtonProps.className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
