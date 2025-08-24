import PageTitle from './components/Pagetitle';
import TopAppBar from './components/TopAppBar';
import Sidebar from './components/Sidebar';
import { useToggle } from './hooks/useToggle';
import Greeting from './pages/Greeting';
import { motion } from 'motion/react';
import PromptField from './components/PromptField';
import { Outlet, useParams, useNavigation } from 'react-router-dom';

const App = () => {
  const [isSidebarOpen, toggleSidebar] = useToggle();
  const navigation = useNavigation();
  const params = useParams();
  const isNormalLoad = navigation.state === 'loading' && !navigation.formData;
  return (
    <>
      <PageTitle title='Phoenix - chat to supercharge your ideas.' />

      <div className='lg:grid lg:grid-cols-[320px_1fr]'>
        {/* sidebar */}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <div className='h-dvh grid grid-rows-[max-content,minmax(0,_1fr),max-content]'>
          {/* TopAppBar */}
          <TopAppBar toggleSidebar={toggleSidebar} />

          {/* MainContent */}
          <div className='px-5 pb-5 flex flex-col overflow-y-auto'>
            <div className='max-w-[840px] w-full mx-auto grow'>
              {isNormalLoad ? null : params.conversationId ? (
                <Outlet />
              ) : (
                <Greeting />
              )}
            </div>
          </div>

          {/* Propmt Field */}
          <div className='bg-light-background dark:bg-dark-background'>
            <div className='max-w-[870px] w-full px-5 mx-auto'>
              <PromptField />
              <motion.p
                initial={{ opacity: 0, translateY: '-4px' }}
                animate={{ opacity: 1, translateY: '0px' }}
                transition={{ duration: 0.3, delay:0.8, ease: 'easeOut' }}
                className='text-bodySmall text-center text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant p-3'
              >
                Phoenix may display inaccurate info, including people, so,
                double-check it&apos;s responses.
                <a
                  href='https://support.google.com/gemini?p=privacy_notice'
                  target='_blank'
                  className='inline underline ms-1'
                >
                  Your Privacy & Gemini Apps
                </a>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
