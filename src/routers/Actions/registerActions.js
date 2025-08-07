import { account } from '../../lib/appwrite';
import generateID from '../../utils/generateID';
import { redirect } from 'react-router-dom';

const registerAction = async ({ request }) => {
  const formData = await request.formData();

  try {
    const user = await account.create(
      generateID(),
      formData.get('email'),
      formData.get('password'),
      formData.get('name'),
    );
    console.log("User created:", user);

    await account.createEmailPasswordSession(
      formData.get('email'),
      formData.get('password')
    );

    return redirect('/');
  } catch (error) {
    console.log("Appwrite error:", error);
    if (error.code === 429) {
      return {
        message: "Too many requests. Please wait a moment and try again.",
      };
    }
    return {
      message: error.message,
    };
  }
};

export default registerAction;
