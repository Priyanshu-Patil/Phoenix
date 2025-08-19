import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const Button = ({
  classes = '',
  variant = 'filled',
  color = 'primary',
  children,
  ...rest
}) => {
  return (
    <motion.button
      className={`btn ${variant} ${color} ${classes}`}
      {...rest}
    >
      {children}
      <div className='state-layer'></div>
    </motion.button>
  );
};

Button.propTypes = {
  classes: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.any,
};

const IconBtn = ({ classes = '', icon, size = '', children, ...rest }) => {
  return (
    <button
      className={`icon-btn ${size} ${classes}`}
      {...rest}
    >
      {children}
      {!children && (
        <span className='material-symbols-outlined icon'>{icon}</span>
      )}
      <div className='slate-layer'></div>
    </button>
  );
};

IconBtn.propTypes = {
  classes: PropTypes.string,
  icon: PropTypes.node,
  size: PropTypes.string,
  children: PropTypes.any,
};


const ExtendedFab = ({ href, classes = '', text, ...rest }) => {
  return (
    <Link
      to={href}
      className={`extended-fab ${classes}`}
      {...rest}
    >
      <span className='material-symbols-outlined'>add</span>

      <span className="truncate">{text}</span>

      <div className="state-layer"></div>
    </Link>
  );
};

ExtendedFab.propTypes = {
  href: PropTypes.string,
  classes: PropTypes.string,
  text: PropTypes.any,
};

export { Button, IconBtn, ExtendedFab };
