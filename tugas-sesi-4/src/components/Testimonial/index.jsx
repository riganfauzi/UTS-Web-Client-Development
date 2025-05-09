// Deps
import classNames from "classnames";

const Testimonial = ({ message, profile }) => {
  return (
    <div className={classNames("flex", "flex-col", "gap-y-7")}>
      <h3 className={classNames("text-2xl")}>“{message}”</h3>
      <div
        className={classNames("flex", "flex-row", "gap-x-3", "items-center")}
      >
        <img
          className={classNames(
            "w-14",
            "object-cover",
            "rounded-full",
            "aspect-square"
          )}
          alt="Testimonial Profile"
          src={profile.image}
        />
        <div className={classNames("flex", "flex-col")}>
          <h4 className={classNames("text-lg", "font-medium")}>
            {profile.name}
          </h4>
          <h5>{profile.rank}</h5>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
