import PageTitle from './components/Pagetitle';

const App = () => {
  return (
    <>
      <PageTitle title='Phoenix - chat to supercharge your ideas.' />

      <div className=''>
        <div className=''>
          <div className=''>
            <div className=''></div>
          </div>

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
