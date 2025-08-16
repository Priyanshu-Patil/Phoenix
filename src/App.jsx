import PageTitle from './components/Pagetitle';
import TopAppBar from './components/TopAppBar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <>
      <PageTitle title='Phoenix - chat to supercharge your ideas.' />

      <div className=''>
        {/* sidebar */}
        <Sidebar />
        <div className=''>
          {/* TopAppBar */}
          <TopAppBar />
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
