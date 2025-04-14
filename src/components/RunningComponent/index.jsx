// Deps
import classNames from "classnames";

const RunningComponent = ({ children }) => {
  return (
    <div className={classNames("overflow-hidden", "whitespace-nowrap")}>
      <div className={classNames("marquee", "min-w-full")}>{children}</div>
    </div>
  );
};

export default RunningComponent;
