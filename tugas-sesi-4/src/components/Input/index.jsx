// Deps
import classNames from "classnames";

/**
 * @param {{
 *   id: string;
 *   label: string;
 *   placeholder?: string;
 *   type?: string;
 *   isTextarea?: boolean;
 * }} props
 */
const Input = ({
  id,
  label,
  placeholder,
  type = "text",
  isTextarea = false,
}) => (
  <div className={classNames("flex", "flex-col", "gap-y-3")}>
    <label className={classNames("text-lg")} htmlFor={id}>
      {label}
    </label>
    {isTextarea ? (
      <textarea
        id={id}
        placeholder={placeholder}
        className={classNames(
          "py-3",
          "w-full",
          "text-lg",
          "border-b",
          "md:text-xl",
          "lg:text-2xl",
          "placeholder:text-gray-400"
        )}
      />
    ) : (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={classNames(
          "py-3",
          "w-full",
          "text-lg",
          "border-b",
          "md:text-xl",
          "lg:text-2xl",
          "placeholder:text-gray-400"
        )}
      />
    )}
  </div>
);

export default Input;
