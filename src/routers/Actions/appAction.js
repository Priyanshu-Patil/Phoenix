import { account } from "../../lib/appwrite";
import { getConversationTitle } from "../../api/googleAi";

const userPromptAction = async ({formData}) => {
    const userPrompt = formData.get('user_prompt');

    if (!userPrompt || userPrompt.trim() === "") {
        console.log("No Prompt Provided");
        return null;
    }

    const user = await account.get();
    const conversationTitle = await getConversationTitle(userPrompt);

    console.log(conversationTitle);

    return null;
}

const appAction = async ({request}) => {
    const formData = await request.formData();
    const requestType = formData.get('request_type');

    if (requestType === 'user_prompt') {
        return await userPromptAction({ formData });
    }
}

export default appAction;