const fadeInAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  
  export default fadeInAnimation;