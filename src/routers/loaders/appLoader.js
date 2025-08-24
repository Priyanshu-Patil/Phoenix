import { account, databases } from "../../lib/appwrite";
import { redirect } from "react-router-dom";
import { Query } from "appwrite";

const appLoader = async () => {
    const data = {};
    try {
        data.user = await account.get();
    } catch (error) {
        console.error("Error fetching user data:", error);
        return redirect("/login");
    }

    try {
        data.conversation = await databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASE_ID,
            '68a8570b001e58506631',
            [
                Query.select(['$id', 'title']),
                Query.orderDesc('$createdAt'),
                Query.equal('user_id', data.user.$id),
            ],
        )
    } catch (error) {
        console.log(`Error Getting Conversation ${error.message}`);
    }

    return data;
}

export default appLoader;