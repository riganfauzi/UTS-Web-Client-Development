// Deps
import classNames from "classnames";
import { FiArrowUpRight } from "react-icons/fi";

// Components
import Button from "../../components/Button";

/**
 * @param {{ name: string, fields: string[] }} props
 */
const Experience = ({ name, fields }) => {
  return (
    <div
      className={classNames(
        "flex",
        "gap-x-5",
        "flex-row",
        "items-center",
        "justify-between"
      )}
    >
      <div className={classNames("flex", "flex-1", "gap-y-4", "flex-col")}>
        <h1
          className={classNames(
            "text-xl",
            "sm:text-2xl",
            "md:text-3xl",
            "lg:text-4xl",
            "xl:text-6xl",
            "text-slate-950"
          )}
        >
          {name}
        </h1>
        <p
          className={classNames(
            "text-xs",
            "md:text-sm",
            "lg:text-base",
            "text-gray-700"
          )}
        >
          {fields.join(" - ")}
        </p>
      </div>
      <Button className={classNames("text-xl", "xl:text-2xl")}>
        <FiArrowUpRight />
      </Button>
    </div>
  );
};

export default Experience;
