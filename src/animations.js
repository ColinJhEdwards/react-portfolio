export const pageAnimation = {
  //hidden is the initial start of the animation
  hidden: {
    opacity: 0,
  },
  //Show is what the end of the animation will be
  show: {
    opacity: 1,

    transition: {
      duration: 0.5,
      //Adding then when will cause this to animate before any children elements, then those children elements will animate
      when: "beforeChildren",
      // the duration between each delayed children
      staggerChildren: 0.25,
    },
  },
  //Exit settings activate when leaving a component, such as going to a new page
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const slider = {
  hidden: { y: "130%" },
  show: {
    y: "0%",

    transition: { duration: 1 },
  },
};

export const svgSlide = {
  hidden: { x: "130%" },
  show: {
    x: "0%",

    transition: { duration: 1, delay: 0.5 },
  },
};

export const grow = {
  hidden: { y: "150%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,

    transition: { duration: 0.5 },
  },
  exit: { scale: 0, transition: { duration: 0.5 } },
};
