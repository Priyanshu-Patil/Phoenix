import { account } from "../../lib/appwrite";
import { redirect } from "react-router-dom";

const appLoader = async () => {
    const data = {};
    try {
        data.user = await account.get();
    } catch (error) {
        console.error("Error fetching user data:", error);
        return redirect("/login");
    }

    return data;
}

export default appLoader;