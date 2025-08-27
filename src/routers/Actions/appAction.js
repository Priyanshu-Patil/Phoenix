import { account, databases } from '../../lib/appwrite';
import { getConversationTitle, getAiResponse } from '../../api/googleAi';
import generateID from '../../utils/generateID';
import { redirect } from 'react-router-dom';

const userPromptAction = async ({ formData }) => {
  const userPrompt = formData.get('user_prompt');

  if (!userPrompt || userPrompt.trim() === '') {
    console.log('No Prompt Provided');
    return null;
  }

  const user = await account.get();
  const conversationTitle = await getConversationTitle(userPrompt);
  let conversation = null;

  try {
    conversation = await databases.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      '68a8570b001e58506631',
      generateID(),
      {
        title: conversationTitle,
        user_id: user.$id,
      },
    );
  } catch (error) {
    console.log(`Error creating coversation ${error.message}`);
  }

  const aiResponse = await getAiResponse(userPrompt);

  try {
    await databases.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'chats',
      generateID(),
      {
        user_prompt: userPrompt,
        ai_response: aiResponse,
        conversation: conversation.$id,
      },
    );
  } catch (error) {
    console.log(`Error creating chat ${error.message}`);
  }

  return redirect(`/${conversation.$id}`);
};

const conversationAction = async ({formData}) => {
  const conversationId = formData.get('conversation_id');
  const conversationTitle = formData.get('conversation_title');

  try {
    await databases.deleteDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      '68a8570b001e58506631',
      conversationId,
    );

    return { conversationTitle };
  } catch (error) {
    console.log(`Error deleting coversation ${error.message}`);
  }
};

const appAction = async ({ request }) => {
  const formData = await request.formData();
  const requestType = formData.get('request_type');

  if (requestType === 'user_prompt') {
    return await userPromptAction({ formData });
  }

  if (requestType === 'delete_conversation') {
    return await conversationAction({ formData });
  }
};

export default appAction;
