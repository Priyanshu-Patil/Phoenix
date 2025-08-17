import PageTitle from './components/Pagetitle';
import TopAppBar from './components/TopAppBar';
import Sidebar from './components/Sidebar';
import { useToggle } from './hooks/useToggle';

const App = () => {
  const [isSidebarOpen, toggleSidebar] = useToggle();
  
  return (
    <>
      <PageTitle title='Phoenix - chat to supercharge your ideas.' />

      <div className='lg:grid lg:grid-cols-[320px_1fr]'>
        {/* sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className='h-dvh grid grid-rows-[max-content_minmax(0,_1fr)_max-content ]'>
          {/* TopAppBar */}
          <TopAppBar toggleSidebar={toggleSidebar} />
          {/* MainContent */}
          <div className=''>
            <div className=''></div>
          </div>

          {/* Propmt Field */}
          <div className=''>
            <p className=''>
              Phoenix may display inaccurate info, including people, so,
              double-check it&apos;s responses.
              <a
                href='https://support.google.com/gemini?p=privacy_notice'
                target='blank'
                className=''
              >
                Your Privacy & Gemini Apps
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
