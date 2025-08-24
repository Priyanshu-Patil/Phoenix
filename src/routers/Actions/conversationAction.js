import { getAiResponse } from '../../api/googleAi';
import { databases } from '../../lib/appwrite';
import genedateId from '../../utils/generateID';

const conversationAction = async ({ request, params }) => {
  const { conversationId } = params;
  const formData = await request.formData();
  const userPrompt = formData.get('user_prompt');
  let chatHistory = [];
  let aiResponse = '';

  try {
    const { chats } = await databases.getDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      '68a8570b001e58506631',
      conversationId,
    );

    chatHistory = chats.map(({ user_prompt, ai_response }) => {
      return { user_prompt, ai_response };
    });
  } catch (error) {
    console.log(`Error getting chats: ${error.message}`);
  }

  try {
    aiResponse = await getAiResponse(userPrompt, chatHistory);
  } catch (error) {
    console.log(`Error getting Gemini Repsonse: ${error.message}`);
  }

  try {
    await databases.createDocument(
      import.meta.env.VITE_APPWRITE_DATABASE_ID,
      'chats',
      genedateId(),
      {
        user_prompt: userPrompt,
        ai_response: aiResponse,
        conversation: conversationId
      }
    );
  } catch (error) {console.log(`Error storing chats: ${error.message}`);}
};

export default conversationAction;