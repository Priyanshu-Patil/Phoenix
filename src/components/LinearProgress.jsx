import PropTypes from 'prop-types';
import { motion } from 'motion/react';

const LinearProgress = ({ classes = '' }) => {
  const progressVariants = {
    start: { scaleY: 0 },
    end: {
      scaleY: 1,
      transition: {
        when: 'beforeChildren',
        duration: 0.3,
        ease: [0.05, 0.7, 0.1, 1],
        delay: 0.5,
      },
    },
    exit: {
      scaleY: 0,
      transition: { duration: 0.3, ease: [0.05, 0.7, 0.1, 1] },
    },
  };

  const activeIndicatorVariants = {
    start: { translateX: '-100%' },
    end: {
      translateX: '0%',
      transition: {
        duration: 0.3,
        ease: [0.05, 0.7, 0.1, 1],
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={progressVariants}
      initial='start'
      animate='end'
      exit='exit'
      role='progressbar'
      className={`linear-progress ${classes}`}
    >
      <motion.div
        variants={activeIndicatorVariants}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: [0.05, 0.7, 0.1, 1],
        }}
        className='active-indicator'
      ></motion.div>
    </motion.div>
  );
};

LinearProgress.propTypes = {
  classes: PropTypes.string,
};

export default LinearProgress;
