import { motion } from "framer-motion";

export function SingleTreeLoader({ ...props }) {
  const parent = {
    initial: {},
    animate: {
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  };

  const tree = (i) => {
    return {
      initial: { opacity: 0, scale: 0.9, y: 0.01 },
      animate: {
        opacity: [0, 1, 1, 0],
        scale: [0.9, 1, 1, 0.9],
        y: [0.01, 0, 0, 0.01],

        transition: {
          bounce: 1,
          duration: 2,
          delay: i * 0.2 + 2,
          repeat: Infinity,
          repeatDelay: 2,
          times: [0, 0.3, 0.8, 1],
        },
      },
    };
  };

  const ground = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 1, 1, 0],
      transition: {
        type: "tween",
        duration: 2,
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  };
  const trunk = {
    initial: { opacity: 0, y: 0.1 },
    animate: {
      opacity: [0, 1, 1, 0],
      y: [0.1, 0, 0, 0],

      transition: {
        type: "tween",
        duration: 2,
        repeat: Infinity,
        repeatDelay: 2,
        times: [0, 0.2, 0.8, 1],
        delay: 0 + 2,
      },
    },
  };
  return (
    <>
      <motion.svg
        viewBox="0 0 54 54"
        version="1.1"
        id="svg5"
        xmlns="http://www.w3.org/2000/svg"
        variants={parent}
        initial="initial"
        animate="animate"
        stroke="auto"
        {...props}
      >
        <circle
          cx="26.958334"
          cy="26.958334"
          r="26.458334"
          fill="none"
          stroke="auto"
        />
        <g id="layer1" transform="translate(-47.739496,-28.751554)">
          <g
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            id="g3141"
            transform="matrix(0.96064047,0,0,0.96064047,59.327583,36.367747)"
          >
            <g
              transform="matrix(39.087946,0,0,39.147046,-6.7100967,33.875244)"
              id="g8890"
              clipRule="evenodd"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
            >
              <motion.path
                variants={trunk}
                initial="initial"
                animate="animate"
                id="trunk"
                fill="none"
                stroke="auto"
                strokeWidth="0.0266114"
                strokeDasharray="none"
                strokeOpacity="1"
                d="m 0.65199998,-0.02537073 v 0.16537072 m -0.141,0 v -0.16641241"
              />
              <motion.path
                variants={tree(2)}
                initial="initial"
                animate="animate"
                fill="none"
                stroke="auto"
                strokeWidth="0.0266114"
                strokeDasharray="none"
                strokeOpacity="1"
                fillRule="nonzero"
                d="m 0.814,-0.351 0.111,0.155 c 0.005,0.006 0.007,0.013 0.007,0.021 0,0.009 -0.003,0.018 -0.01,0.024 -0.007,0.007 -0.015,0.01 -0.025,0.01 -0.008,0 -0.015,-0.002 -0.022,-0.007 L 0.671,-0.307 0.614,-0.163 c -0.003,0.007 -0.007,0.012 -0.013,0.016 -0.006,0.004 -0.013,0.006 -0.02,0.006 -0.007,0 -0.014,-0.002 -0.02,-0.006 C 0.555,-0.151 0.551,-0.156 0.548,-0.163 L 0.491,-0.307 0.287,-0.148 c -0.007,0.005 -0.014,0.007 -0.022,0.007 -0.01,0 -0.018,-0.003 -0.025,-0.01 -0.007,-0.006 -0.01,-0.015 -0.01,-0.024 0,-0.008 0.002,-0.015 0.007,-0.021 l 0.11,-0.155 C 0.341,-0.351 0.336,-0.352 0.33,-0.353 0.324,-0.354 0.319,-0.355 0.315,-0.358 0.31,-0.361 0.307,-0.364 0.304,-0.369 0.302,-0.373 0.3,-0.379 0.3,-0.386 0.3,-0.393 0.303,-0.4 0.308,-0.407 L 0.395,-0.529 C 0.388,-0.531 0.382,-0.535 0.377,-0.541 0.373,-0.547 0.371,-0.554 0.371,-0.562 c 0,-0.003 0,-0.007 0.002,-0.011 0.001,-0.003 0.003,-0.006 0.005,-0.01 l 0.175,-0.244 c 0.003,-0.005 0.007,-0.008 0.012,-0.011 0.005,-0.003 0.011,-0.004 0.016,-0.004 0.006,0 0.011,0.001 0.016,0.004 0.005,0.003 0.009,0.006 0.012,0.011 l 0.175,0.244 c 0.002,0.004 0.004,0.007 0.006,0.01 0.001,0.004 0.002,0.008 0.002,0.011 0,0.008 -0.003,0.015 -0.007,0.021 -0.004,0.006 -0.01,0.01 -0.018,0.012 l 0.087,0.122 c 0.005,0.007 0.008,0.014 0.008,0.021 0,0.007 -0.001,0.013 -0.004,0.017 -0.003,0.005 -0.006,0.008 -0.011,0.011 -0.004,0.003 -0.009,0.004 -0.015,0.005 -0.005,0.001 -0.011,0.002 -0.018,0.002 z"
                id="upperTree"
              />
              <motion.path
                variants={tree(1)}
                initial="initial"
                animate="animate"
                id="lowerTree"
                fill="none"
                stroke="auto"
                strokeWidth="0.0266114"
                strokeDasharray="none"
                strokeOpacity="1"
                fillRule="nonzero"
                d="M 0.8620848,-0.15808128 0.96,-0.021 C 0.965,-0.014 0.967,-0.00699999 0.967,0 0.967,0.00999999 0.964,0.01800001 0.957,0.025 0.95,0.032 0.942,0.035 0.932,0.035 0.924,0.035 0.917,0.033 0.911,0.028 L 0.756,-0.092 V 0 c 0,0.00899999 -0.003,0.01800001 -0.01,0.025 -0.007,0.007 -0.015,0.01 -0.025,0.01 -0.01,0 -0.019,-0.004 -0.026,-0.012 L 0.581,-0.105 0.467,0.023 C 0.464,0.027 0.46,0.03 0.455,0.032 0.45,0.034 0.445,0.035 0.44,0.035 0.431,0.035 0.423,0.032 0.416,0.025 0.409,0.018 0.406,0.00899999 0.406,0 V -0.092 L 0.251,0.028 C 0.245,0.033 0.238,0.035 0.23,0.035 0.22,0.035 0.212,0.032 0.205,0.025 0.198,0.018 0.195,0.00999999 0.195,0 c 0,-0.00699999 0.002,-0.01400001 0.007,-0.021 l 0.0979152,-0.13708128"
              />
            </g>
          </g>
          <motion.path
            fill="none"
            stroke="auto"
            strokeWidth="1"
            strokeDasharray="none"
            strokeOpacity="1"
            fillRule="nonzero"
            d="m 55.657878,74.17455 h 6.140153 l -0.779684,-1.322917 1.559368,0.311079 0.779684,-1.172982 0.779684,1.172982 1.559368,-0.715051 -0.779684,1.726889 h 28.858564"
            id="ground1"
            variants={ground}
            initial="initial"
            animate="animate"
          />
          <motion.path
            fill="none"
            stroke="auto"
            strokeWidth="1"
            strokeDasharray="none"
            strokeOpacity="1"
            d="m 88.757584,78.122827 h -4.269266 l 0.779684,-1.322917 -1.559368,0.311079 -0.779684,-1.172982 -0.779684,1.172982 -1.559368,-0.715051 0.779684,1.726889 H 60.597397"
            id="ground2"
            variants={ground}
            initial="initial"
            animate="animate"
          />
        </g>
      </motion.svg>
    </>
  );
}
