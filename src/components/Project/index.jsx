// Deps
import { useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

// Components
import Button from "../../components/Button";

const Project = ({ project }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={classNames(
        "py-12",
        "px-14",
        "relative",
        "w-[444px]",
        "h-[306px]",
        "snap-center",
        "bg-slate-300",
        "overflow-hidden"
      )}
      onPointerEnter={() => setIsHover(true)}
      onPointerLeave={() => setIsHover(false)}
    >
      <div className={classNames("relative", "w-full", "h-full", "object-cover")}>
        <img
          src={project}
          alt="project"
          className={classNames("w-full", "h-full", "object-top", "object-cover")}
        />

        <motion.div
          initial={{ scale: 0, borderRadius: "50%" }}
          animate={
            isHover
              ? { scale: 1, borderRadius: "0%" }
              : { scale: 0, borderRadius: "50%" }
          }
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={classNames(
            "inset-0",
            "absolute",
            "bg-gray-900/50",
            "backdrop-blur-sm"
          )}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isHover ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
          className={classNames(
            "flex",
            "inset-0",
            "absolute",
            "items-center",
            "justify-center"
          )}
        >
          <Button variant="light" shape="square">
            <div className={classNames("flex", "gap-x-3", "flex-row", "items-center")}>
              <h3>Visit the website</h3>
              <FiArrowUpRight />
            </div>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
