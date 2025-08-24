import { GoogleGenAI } from '@google/genai';
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

const getConversationTitle = async (userPrompt, chats = []) => {
  const history = [];
  chats.forEach(({ user_prompt, ai_response}) => {
    history.push(
      {
        role: 'user',
        parts: [{text: user_prompt}],
      },
      {
        role: 'model',
        parts: [{ text: ai_response}],
      },
    );
    console.log(history)
  });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Given a user prompt, generate a concise and informative title that accurately describes the conversation. Consider keywords, topics, and the overall intent of the prompt. Response in plain text format, not markdown.
            
    Prompt: ${userPrompt}`,
    });

    return response.text;
  } catch (error) {
    console.log(`Error generating conversation title: ${error.message}`);
  }
};

const getAiResponse = async(userPrompt, chats = []) => {
  try {
    // Format history for Gemini 2.5 Flash
    const history = [];
    chats.forEach(({ user_prompt, ai_response }) => {
      history.push(
        {
          role: 'user',
          parts: [{ text: user_prompt }],
        },
        {
          role: 'model',
          parts: [{ text: ai_response }],
        }
      );
    });
    // Add latest user prompt
    history.push({
      role: 'user',
      parts: [{ text: userPrompt }],
    });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: history,
      generationConfig: { temperature: 1.5 }
    });
    return response.text;
  } catch (error) {
    console.log(`Error generating AI response ${error.message}`)
  }
}

export { getConversationTitle, getAiResponse };