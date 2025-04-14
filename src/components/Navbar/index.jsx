/* eslint-disable react-hooks/exhaustive-deps */

// Deps
import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { RxDotFilled } from "react-icons/rx";
import { TbMenu, TbX } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router";

// Constants
import socials from "../../constants/socials";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [showNavItems, setShowNavItems] = useState(isDesktop);
  const [hideButton, setHideButton] = useState(isDesktop);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (isDesktop) {
        if (window.scrollY > 50) {
          setShowNavItems(false);
          setTimeout(() => setHideButton(false), 300);
        } else {
          setTimeout(() => {
            setHideButton(true);
            setTimeout(() => setShowNavItems(true), 100);
          }, 300);
        }
      }
    };

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isDesktop]);

  useEffect(() => {
    if (!scrolled && menuOpen) setMenuOpen(false);
  }, [scrolled]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setShowNavItems(isDesktop);
    setHideButton(isDesktop);
  }, [isDesktop]);

  return (
    <motion.div
      initial={{
        backdropFilter: "blur(0px)",
        backgroundColor: "rgba(255, 255, 255, 0)",
      }}
      animate={{
        backgroundColor: scrolled
          ? "rgba(255, 255, 255, 0.8)"
          : "rgba(255, 255, 255, 0)",
        backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={classNames(
        "py-5",
        "z-20",
        "top-0",
        "fixed",
        "w-full",
        "lg:px-20",
        scrolled && "shadow-md"
      )}
    >
      <div
        className={classNames(
          "flex",
          "px-4",
          "mx-auto",
          "lg:px-0",
          "container",
          "items-center",
          "justify-between"
        )}
      >
        <h1 className="text-lg text-slate-900">
          @{import.meta.env.VITE_APP_OWNER_NAME}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: !scrolled && showNavItems ? 1 : 0,
            y: !scrolled && showNavItems ? 0 : -20,
            pointerEvents: !scrolled && showNavItems ? "auto" : "none",
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: !scrolled && showNavItems ? 0.3 : 0,
          }}
          className="hidden md:flex text-lg gap-x-10 flex-row min-h-10"
        >
          {[
            { label: "About", path: "/#about" },
            { label: "Work", path: "/#work" },
            { label: "Contact", path: "/contact" },
          ].map(({ label, path }) => (
            <h3
              key={label}
              className="select-none cursor-pointer transition-all hover:underline"
              onClick={() => navigate(path)}
            >
              {label}
            </h3>
          ))}
        </motion.div>

        <motion.button
          className={classNames(
            "p-2",
            "z-50 block",
            "rounded-full",
            "cursor-pointer",
            {
              "md:hidden": !scrolled || hideButton,
            }
          )}
          onClick={() => setMenuOpen(!menuOpen)}
          animate={{
            rotate: menuOpen ? 180 : 0,
            color: menuOpen ? "#000000" : "#ffffff",
            backgroundColor: menuOpen ? "#ffffff" : "#000000",
            opacity: (isDesktop ? scrolled : true) && !hideButton ? 1 : 0,
            y: (isDesktop ? scrolled : true) && !hideButton ? 0 : -20,
          }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {menuOpen ? <TbX size={24} /> : <TbMenu size={24} />}
        </motion.button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="z-40 fixed inset-0 w-screen h-screen bg-black/30 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={
          menuOpen
            ? {
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, ease: "easeOut" },
              }
            : {
                x: "100%",
                opacity: 0,
                transition: { duration: 0.4, ease: "easeInOut" },
              }
        }
        exit={{
          x: "100%",
          opacity: 0,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        className="z-40 flex fixed top-0 px-16 py-14 w-full right-0 flex-col md:w-1/2 h-screen bg-black items-start text-white overflow-auto justify-between"
      >
        <nav className="flex flex-1 gap-y-7 flex-col text-2xl md:text-3xl lg:text-4xl font-medium justify-center">
          {[
            { name: "Home", link: "/#home" },
            { name: "About", link: "/#about" },
            { name: "Work", link: "/#work" },
            { name: "Contact", link: "/contact" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-row items-center"
              initial={{ opacity: 0, x: 30 }}
              animate={menuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: menuOpen ? i * 0.1 : 0,
              }}
            >
              <div
                className={classNames(
                  "w-10",
                  location.hash === item.link.replace("/", "")
                    ? "text-white"
                    : "text-black"
                )}
              >
                <RxDotFilled />
              </div>
              <a
                onClick={() => {
                  setMenuOpen(false);
                  navigate(item.link);
                }}
                className="hover:opacity-80 cursor-pointer"
              >
                {item.name}
              </a>
            </motion.div>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: menuOpen ? 0.3 : 0,
          }}
        >
          <div className="flex flex-row gap-x-8 flex-wrap">
            {socials.map(({ name, url }) =>
              url ? (
                <h3
                  key={name}
                  onClick={() => window.open(url, "_blank")}
                  className="select-none cursor-pointer"
                >
                  {name}
                </h3>
              ) : (
                <h3 key={name} className="select-none">
                  {name}
                </h3>
              )
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
