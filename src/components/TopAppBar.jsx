import { IconBtn } from './Button';
import { Link, useNavigation } from 'react-router-dom';
import { logoLight, logoDark } from '../assets/assets';
import Avatar from './Avatar';
import Menu from './Menu';
import MenuItem from './MenuItem';
import { LinearProgress } from './Progress';
import { AnimatePresence } from 'motion/react';

const TopAppBar = () => {
  const navigation = useNavigation();

  const isNormalLoad = navigation.state === 'loading' && !navigation.formData;

  return (
    <header className='relative flex justify-between items-center h-16 px-4'>
      <div className='flex items-center gap-4'>
        <IconBtn
          icon='menu'
          title='Menu'
          size='small'
        />
        <Link to='/'>
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
      </div>

      <div className='menu-wrapper'>
        <IconBtn>
          <Avatar name='Priyanshu Patil' />
        </IconBtn>

        <Menu>
          <MenuItem labelText='Log out' />
        </Menu>
      </div>

      <AnimatePresence>{isNormalLoad && <LinearProgress />}</AnimatePresence>
    </header>
  );
};

export default TopAppBar;
