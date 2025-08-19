import { account } from "../../lib/appwrite";

const userPromptAction = async ({formData}) => {
    const userPrompt = formData.get('user_propmt');

    const user = await account.get();
    return null
}

const appAction = async ({request}) => {
    const formData = await request.formData();
    const requestType = form.get('request_type');

    if (requestType === 'user_prompt') {
        return await userPromptAction(formData);
    }
}

export default appAction;