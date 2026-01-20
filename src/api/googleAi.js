import { GoogleGenAI } from '@google/genai';
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

// Normalize Gemini responses so callers always receive a plain string.
const extractText = (response) => {
  if (!response) return '';

  if (typeof response.text === 'function') return response.text();
  if (typeof response.text === 'string') return response.text;

  if (typeof response.response?.text === 'function') return response.response.text();
  if (typeof response.response?.text === 'string') return response.response.text;

  const candidateText = response.response?.candidates?.[0]?.content?.parts
    ?.map((part) => part.text)
    .join('')
    .trim();

  return candidateText || '';
};

const FALLBACK_AI_RESPONSE =
  'Phoenix could not generate a reply right now. Please try again in a moment.';

const getConversationTitle = async (userPrompt, chats = []) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Given a user prompt, generate a concise and informative title that accurately describes the conversation. Consider keywords, topics, and the overall intent of the prompt. Response in plain text format, not markdown.
            
    Prompt: ${userPrompt}`,
    });

    const text = extractText(response);

    if (!text) {
      throw new Error('Empty response while generating conversation title');
    }

    return text;
  } catch (error) {
    console.log(`Error generating conversation title: ${error.message}`);

    return 'New conversation';
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

    const text = extractText(response);

    if (!text) {
      throw new Error('Empty AI response');
    }

    return text;
  } catch (error) {
    console.log(`Error generating AI response ${error.message}`)

    // Returning a fallback string prevents downstream Appwrite errors when
    // the AI service is temporarily unavailable (e.g., 503 responses).
    return FALLBACK_AI_RESPONSE;
  }
}

export { getConversationTitle, getAiResponse };