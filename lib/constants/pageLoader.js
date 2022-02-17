export const PATH_VARIANTS = {
  visible: {
    pathLength: 1,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
  hidden: {
    pathLength: 0,
    transition: {
      duration: 0,
    },
  },
};

export const ROTATE_VARIANTS = {
  initial: {
    rotate: 0,
    transition: {
      duration: 0,
    },
  },
  rotate: {
    rotate: 180,
    transition: {
      delay: 1,
      duration: 1,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};