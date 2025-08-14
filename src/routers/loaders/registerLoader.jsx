import { redirect } from "react-router-dom";
import { account } from '../../lib/appwrite';

const registerLoader = async ({ request }) => {
    try {
        await account.get();
    } catch (error) {
        return {
            message: error.message || 'An error occurred while fetching user data.',
        };
    }

    return redirect('/')
}

export default registerLoader;