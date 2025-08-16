import PropTypes from 'prop-types';
import Logo from './Logo';
import { ExtendedFab, IconBtn } from './Button';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className='sidebar active'>
        <div className='sidebar-inner'>
          <div className=''>
            <Logo />
          </div>

          <ExtendedFab
            href='/'
            text='New Chat'
            classes=''
          />

          <div className=''>
            <p className=''>Recent</p>

            <nav>
              <div className=''>
                <NavLink
                  to='/'
                  className='nav-link'
                  title=''
                >
                  <span className='material-symbols-outlined icon-small'>
                    chat_bubble
                  </span>
                  <span className='truncate'>New Conversation</span>
                  <div className='state-layer'></div>
                </NavLink>

                <IconBtn
                  icon='delete'
                  size='small'
                  title='Delete'
                />
              </div>
            </nav>
          </div>

          <div className=''>&copy; 2025 Priyanshu Patil</div>
        </div>
      </div>

      <div className={`overlay`}></div>
    </>
  );
};

export default Sidebar;
