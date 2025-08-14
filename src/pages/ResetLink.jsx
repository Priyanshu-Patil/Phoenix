import PageTitle from '../components/Pagetitle';
import { Link, Form, useNavigation, useActionData } from 'react-router-dom';
import { logoLight, logoDark, banner } from '../assets/assets';
import TextField from '../components/TextField';
import Button from '../components/Button';
import { CircularProgress, LinearProgress } from '../components/progress';
import { useEffect } from 'react';
import { useSnackbar } from '../hooks/useSnackbar';
import { AnimatePresence } from 'motion/react';

const ResetLink = () => {

  const actionData = useActionData();
  const navigation = useNavigation();
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (actionData) {
      showSnackbar({
        message: actionData.message,
        type: actionData.ok? 'info' : 'error',
        timeOut: 8000,
      });
    }
  }, [actionData, showSnackbar]);

  return (
    <>
      <PageTitle title='Reset Passward' />

      <div className='relative w-screen h-dvh p-2 grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] lg:gap-2'>
        <div className='flex flex-col p-4'>
          <Link
            to='/'
            className='max-w-max mb-auto mx-auto lg:mx-0'
          >
            <img
              src={logoLight}
              alt='phoenix logo'
              width={133}
              height={24}
              className='dark:hidden'
            />
            <img
              src={logoDark}
              alt='phoenix logo'
              width={133}
              height={24}
              className='hidden dark:block'
            />
          </Link>

          <div className='flex flex-col gap-2 max-w-[480px] w-full mx-auto'>
            <h2 className='text-displaySmall font-semibold text-light-onBackground  dark:text-dark-onBackground text-center'>
              Forgot Password
            </h2>

            <p className='text-bodyLarge text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant mt-1 mb-5 text-center px-2'>
              Enter your email and we&apos;ll send you a link to reset your password.
            </p>

            <Form
              method='POST'
              className='grid grid-cols-1 gap-4'
              action='/register'
            >
              <TextField
                type='email'
                name='email'
                label='Email'
                placeholder='Email'
                helperText='The verification sent on your email will be valid for 1 hour.'
                required={true}
                autofocus={true}
              />

              <Button
                type='submit'
                disabled={navigation.state === 'submitting'}
              >
                {navigation.state === <CircularProgress size='small' />
                  ? 'Submitting...'
                  : 'Send Reset Link'}
              </Button>
            </Form>
          </div>

          <p className='mt-auto mx-auto text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-bodyMedium lg:mx-0'>
            &copy; 2025 Priyanshu Patil. All rights reserved.
          </p>
        </div>

        <div className='hidden img-box lg:block lg:relative lg:rounded-large lg:overflow-hidden'>
          <img
            src={banner}
            alt='banner'
            className='img-cover'
          />

          <p className='absolute bottom-10 left-12 right-12 z-10 text-displayLarge font-semibold leading-tight text-right text-light-onSurface drop-shadow-sm 2xl:text-[72px]'>
            Chat with Phoenix to supercharge your ideas.
          </p>
        </div>
      </div>

      <AnimatePresence>
        {navigation.state === 'loading' && (
          <LinearProgress classes='absolute top-0 left-0 right-0' />
        )}
      </AnimatePresence>
    </>
  );
};

export default ResetLink;