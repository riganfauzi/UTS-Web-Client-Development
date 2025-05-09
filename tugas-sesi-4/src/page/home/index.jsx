// Deps
import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

// Layouts
import AboutLayout from "../../layout/about";
import HomeBanner from "../../layout/banner";
import ProjectLayout from "../../layout/projects";

// Components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Experience from "../../components/Experience";
import Testimonial from "../../components/Testimonial";

// Constants
import works from "../../constants/works";
import projects from "../../constants/projects";
import testimonials from "../../constants/testimonials";

// Libs
import fadeInAnimation from "../../libs/fadeInAnimation";

function LandingPage() {
  const location = useLocation();
  const sections = useRef({});

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const target = sections.current[sectionId];

      if (target) {
        const yOffset = -150;
        const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      for (const [id, section] of Object.entries(sections.current)) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            window.history.replaceState(null, "", `#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={classNames("flex", "flex-col", "gap-20", "bg-slate-100")}>
      <Navbar />

      {/* Home */}
      <motion.div
        id="home"
        ref={(el) => {
          sections.current["home"] = el;
        }}
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
      >
        <HomeBanner />
      </motion.div>

      {/* About */}
      <motion.div
        id="about"
        ref={(el) => {
          sections.current["about"] = el;
        }}
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
      >
        <AboutLayout title="About">
          <p className={classNames("text-2xl")}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </AboutLayout>
      </motion.div>

      {/* Work */}
      <motion.div
        id="work"
        ref={(el) => {
          sections.current["work"] = el;
        }}
        initial="hidden"
        animate="visible"
        variants={fadeInAnimation}
        className={classNames("flex", "flex-col", "gap-y-20")}
      >
        <AboutLayout title="Recent Work">
          <div className={classNames("flex", "flex-col", "gap-y-8")}>
            {works.map((el, i, arr) => (
              <motion.div
                key={`work-${i}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInAnimation}
                className={classNames("flex", "flex-col", "gap-y-8")}
              >
                <Experience fields={el.fields} name={el.name} />
                {i < arr.length - 1 && <hr />}
              </motion.div>
            ))}
          </div>
        </AboutLayout>

        {/* Projects */}
        <ProjectLayout projects={projects} />

        {/* Testimonials */}
        <AboutLayout title="Testimonials">
          <div className={classNames("gap-y-16", "flex", "flex-col")}>
            {testimonials.map((el, i) => (
              <motion.div
                key={`testimonial-${i}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInAnimation}
              >
                <Testimonial message={el.message} profile={el.profile} />
              </motion.div>
            ))}
          </div>
        </AboutLayout>
      </motion.div>

      <Footer />
    </div>
  );
}

export default LandingPage;
