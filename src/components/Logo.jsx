import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { logoLight, logoDark } from '../assets/assets';

const Logo = ({ classes = ''}) => {
  return (
    <Link
      to='/'
      className={`min-w-max max-w-max h-[24px] ${classes}`}
    >
      <img
        src={logoLight}
        alt='phoenix logo'
        className='dark:hidden'
        width={133}
        height={24}
      />
      <img
        src={logoDark}
        alt='phoenix logo'
        className=''
        width={133}
        height={24}
      />
    </Link>
  );
};

Logo.propTypes = {
  classes: propTypes.string,
};

export default Logo;
