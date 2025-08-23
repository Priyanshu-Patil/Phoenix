import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

const model = genAI.getGenerativeModel({model: 'gemini-2.5-flash'});

export default model;