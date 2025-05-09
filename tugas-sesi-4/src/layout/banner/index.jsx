// Deps
import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Components
import RunningComponent from "../../components/RunningComponent";

// Assets
import Avatar from "../../assets/avatar.png";

const HomeBanner = () => {
  // Refs
  const textRef = useRef(null);

  // State
  const [expanded, setExpanded] = useState(false);
  const [textWidth, setTextWidth] = useState(0);

  // Effects
  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.scrollWidth);
    }
  }, []);

  return (
    <div
      className={classNames(
        "flex",
        "relative",
        "flex-col",
        "h-[700px]",
        "justify-end",
        "bg-slate-300",
        "overflow-hidden"
      )}
    >
      <div className={classNames("flex", "flex-col", "gap-y-12")}>
        <div className={classNames("flex", "flex-row", "justify-end")}>
          <motion.div
            className={classNames(
              "flex",
              "z-10",
              "px-6",
              "py-4",
              "items-center",
              "bg-slate-950",
              "rounded-l-full",
              "cursor-pointer",
              "overflow-hidden"
            )}
            initial={{ width: 100 }}
            animate={{ width: expanded ? textWidth + 150 : 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onHoverStart={() => setExpanded(true)}
            onHoverEnd={() => setExpanded(false)}
            onClick={() => setExpanded(!expanded)}
          >
            <motion.h1
              className={classNames("text-5xl", "select-none")}
              animate={!expanded ? { rotate: [-10, 10, -10] } : { rotate: 0 }}
              transition={
                !expanded
                  ? {
                      duration: 2,
                      repeatDelay: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  : {}
              }
            >
              👋
            </motion.h1>

            <motion.p
              ref={textRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: expanded ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className={classNames(
                "pl-4",
                "text-2xl",
                "font-medium",
                "text-white",
                "whitespace-nowrap"
              )}
              style={{ visibility: expanded ? "visible" : "hidden" }}
            >
              Hi, I'm Rigan
            </motion.p>
          </motion.div>
        </div>

        <div className={classNames("z-10")}>
          <RunningComponent>
            <h1
              className={classNames(
                "pb-24",
                "font-medium",
                "text-[150px]",
                "text-white"
              )}
            >
              Front End Developer - Tech Enthusiast
            </h1>
          </RunningComponent>
        </div>
      </div>
      <img
        src={Avatar}
        alt="Avatar"
        className={classNames(
          "top-0",
          "w-full",
          "h-full",
          "absolute",
          "object-bottom",
          "object-contain"
        )}
      />
    </div>
  );
};

export default HomeBanner;
