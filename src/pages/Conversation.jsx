import { easeOut, motion } from 'motion/react';
import PageTitle from '../components/Pagetitle';
import { useLoaderData, useLocation } from 'react-router-dom';
import UserPrompt from '../components/UserPrompt';
import AiResponse from '../components/AiResponse';
import PromptPreloader from '../components/PromptPreloader';
import { userPromptPreloader } from '../hooks/userPromptPreloader';

const Conversation = () => {
  const { promptPreloaderValue } = userPromptPreloader();
  const {
    conversation: { title, chats },
  } = useLoaderData() || {};
  const location = useLocation();

  return (
    <>
      <PageTitle title={`${title} | Phoenix`} />
      <motion.div
        className='max-w-[700px] mx-auto !will-change-auto'
        initial={!location.state?._isRedirect && { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.05, ease: easeOut }}
      >
        {chats.map((chat) => (
          <div key={chat.$id}>
            {/* User Propmt */}
            <UserPrompt text={chat.user_prompt} />
            {/* AI Response */}
            <AiResponse aiResponse={chat.ai_response} />
          </div>
        ))}
      </motion.div>
      {promptPreloaderValue && (
        <PromptPreloader promptValue={promptPreloaderValue} />
      )}
    </>
  );
};

export default Conversation;
