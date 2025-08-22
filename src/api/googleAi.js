import { GoogleGenAI } from '@google/genai';
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

const getConversationTitle = async (userPrompt) => {
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

export { getConversationTitle };
