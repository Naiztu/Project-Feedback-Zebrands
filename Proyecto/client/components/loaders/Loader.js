import { motion } from "framer-motion";

const Loader = ({ count = 5, hmax, hmin, w }) => {
  const colors = ["#A2C7E2", "#FFB1B9", "#C7A0CE", "#F6DFA4", "#D5B49E"];

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const dotVariants = {
    initial: {},
    animate: {
      height: [hmin, hmax, hmin],
      transition: {
        repeat: Infinity,
        duration: 1.3,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="flex gap-4 h-24 items-center "
    >
      {Array(count)
        .fill(null)
        .map((_, index) => {
          return (
            <motion.div
              key={index}
              variants={dotVariants}
              style={{
                height: hmin,
                width: w,
                backgroundColor: colors[index % colors.length],
                borderRadius: 20,
              }}
            />
          );
        })}
    </motion.div>
  );
};

export default Loader;
