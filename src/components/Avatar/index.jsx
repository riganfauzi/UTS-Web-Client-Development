// Deps
import classNames from "classnames";

// Assets
import AvatarImage from "../../assets/avatar.png";

const Avatar = ({ isGreaterThanMd }) => (
  <div
    className={classNames(
      "w-24",
      "md:w-14",
      "lg:w-16",
      "xl:w-20",
      "relative",
      "rounded-full",
      "aspect-square",
      "bg-slate-300",
      "overflow-hidden",
      isGreaterThanMd
        ? classNames("md:block", "hidden")
        : classNames("block", "md:hidden")
    )}
  >
    <img
      src={AvatarImage}
      className={classNames("w-full", "h-full", "object-top", "object-cover")}
    />
  </div>
);

export default Avatar;
