// Deps
import classNames from "classnames";
import { useEffect, useRef } from "react";

// Components
import Project from "../../components/Project";

const ProjectLayout = ({ projects }) => {
  // Hooks
  const rowRefs = useRef([]);

  // Functions
  const splitProjects = (projects) => {
    const total = projects.length;

    if (total <= 4) return [projects]; // Single row

    const half = Math.ceil(total / 2); // Split evenly, first row gets extra if odd

    return [projects.slice(0, half), projects.slice(half)];
  };

  // Effects
  useEffect(() => {
    rowRefs.current.forEach((row, idx) => {
      if (!row) return;

      const maxScroll = row.scrollWidth - row.clientWidth;
      const midScroll = maxScroll / 2;

      if (idx === 0) row.scrollLeft = maxScroll;
      else if (idx === rowRefs.current.length - 1) row.scrollLeft = 0;
      else row.scrollLeft = midScroll;
    });
  }, [projects]);

  return (
    <div className={classNames("flex", "flex-col", "gap-y-10")}>
      {splitProjects(projects).map((el, idx) => (
        <div
          key={idx}
          ref={(elRef) => {
            rowRefs.current[idx] = elRef;
          }}
          className={classNames(
            "flex",
            "w-full",
            "snap-x",
            "no-scrollbar",
            "scroll-smooth",
            "snap-mandatory",
            "overflow-x-auto"
          )}
        >
          <div className={classNames("flex", "gap-x-5", "w-max", "px-10")}>
            {el.map((project, index) => (
              <div key={index} className={classNames("snap-center")}>
                <Project project={project} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectLayout;
