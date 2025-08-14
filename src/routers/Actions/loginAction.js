import { account } from '../../lib/appwrite';
import { redirect } from 'react-router-dom';

const loginAction = async ({ request }) => {
  const formData = await request.formData();

  try {
    await account.createEmailPasswordSession(
      formData.get('email'),
      formData.get('password'),
    );

    return redirect('/');
  } catch (error) {
    return {
      message: error.message || 'An error occurred during login.',
    };
  }
};

export default loginAction;
