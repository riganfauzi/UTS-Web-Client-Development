// Deps
import classNames from "classnames";
import { useNavigate } from "react-router";

// Components
import Button from "../Button";
import Avatar from "../Avatar";

// Constants
import socials from "../../constants/socials";

/**
 * @param {{ simple?: boolean }} props
 */
const Footer = ({ simple }) => {
  const navigate = useNavigate();
  return (
    <footer
      className={classNames(
        "py-8",
        "flex",
        "px-20",
        "gap-y-32",
        "flex-col",
        "bg-gray-900",
        !simple && "mb-4",
        "text-slate-100"
      )}
    >
      {!simple && (
        <div
          className={classNames(
            "flex",
            "pt-12",
            "flex-col",
            "gap-y-10",
            "md:flex-row",
            "md:items-center"
          )}
        >
          <div
            className={classNames(
              "flex",
              "flex-1",
              "gap-y-2",
              "flex-col",
              "text-center",
              "md:text-left",
              "items-center",
              "md:items-start"
            )}
          >
            <Avatar />
            <h1
              className={classNames(
                "text-2xl",
                "font-medium",
                "md:text-3xl",
                "lg:text-4xl",
                "xl:text-5xl",
                "2xl:text-6xl"
              )}
            >
              Have something in mind?
            </h1>
            <div
              className={classNames(
                "flex",
                "gap-x-3",
                "items-center",
                "justify-center",
                "md:justify-start"
              )}
            >
              <Avatar isGreaterThanMd />
              <h1
                className={classNames(
                  "text-2xl",
                  "md:text-3xl",
                  "lg:text-4xl",
                  "xl:text-5xl",
                  "2xl:text-6xl",
                  "font-medium"
                )}
              >
                Let’s build it together.
              </h1>
            </div>
          </div>

          <Button
            shape="oval"
            variant="light"
            onClick={() => navigate("/contact")}
          >
            <h1 className={classNames("text", "font-medium", "lg:text-lg")}>
              Get in touch
            </h1>
          </Button>
        </div>
      )}

      <div
        className={classNames(
          "flex",
          "gap-y-5",
          "md:flex-row",
          "justify-between",
          "flex-col-reverse"
        )}
      >
        <h3 className={classNames("text-center")}>
          Build with 💖 by {import.meta.env.VITE_APP_OWNER_NAME}
        </h3>

        <div
          className={classNames(
            "flex",
            "gap-x-8",
            "gap-y-4",
            "flex-wrap",
            "justify-center"
          )}
        >
          {socials.map(({ name, url }) =>
            url ? (
              <h3
                key={name}
                onClick={() => window.open(url, "_blank")}
                className={classNames(
                  "select-none",
                  "text-center",
                  "cursor-pointer"
                )}
              >
                {name}
              </h3>
            ) : (
              <h3 key={name} className={classNames("select-none")}>
                {name}
              </h3>
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
