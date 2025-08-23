import PropTypes from 'prop-types';
import Avatar from './Avatar';
import { useLoaderData } from 'react-router-dom';
import { useToggle } from '../hooks/useToggle';
import { IconBtn } from './Button';
import { useRef, useEffect, useState } from 'react';

const UserPrompt = ({ text }) => {
  const { user } = useLoaderData();
  const [isExpanded, toggleExpand] = useToggle();
  const textRefBox = useRef();
  const [hasMoreContent, setMoreContent] = useState(false);

  useEffect(() => {
    setMoreContent(
      textRefBox.current.scrollHeight > textRefBox.current.clientHeight,
    );
  }, [textRefBox]);

  return (
    <div className='grid grid-cols-1 items-center gap-1 py-4 md:grid-cols-[max-content,minmax(0,1fr),max-content] md:gap-5'>
      <Avatar name={user?.name} />

      <p
        className={`text-bodyLarge pt-1 whitespaces-pre-wrap ${!isExpanded ? 'line-clamp-4' : ''}`}
        ref={textRefBox}
      >
        {text}
      </p>

      {hasMoreContent && (
        <IconBtn
          icon={isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
          onClick={toggleExpand}
          title={isExpanded ? 'Collapse text' : 'Expand text'}
        />
      )}
    </div>
  );
};

UserPrompt.propTypes = {
  text: PropTypes.string,
};

export default UserPrompt;
