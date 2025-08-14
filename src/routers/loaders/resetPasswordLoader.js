import { redirect } from "react-router-dom";
import { account } from "../../lib/appwrite";

const resetPasswordLoader = async ({ request }) => {
    const url = new URL(request.url);

    try {
        await account.get();
    } catch (error) {
        return {
            message: error.message || 'An error occurred while fetching user data.',
        };
    }

    if (!url.searchParams.get('userId') && !url.searchParams.get('secret')) {
        return redirect('/reset-link');
    }

    return null;
}

export default resetPasswordLoader;