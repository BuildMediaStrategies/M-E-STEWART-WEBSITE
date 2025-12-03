import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getProjectAdvice = async (userQuery: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please check your configuration.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are an expert construction consultant for 'M E Stewart Building Contractors'. 
      The user is asking about a construction project: "${userQuery}".
      
      Provide a concise, professional, and encouraging response. 
      Break down the response into:
      1. Key Considerations (permits, structural integrity, timeline)
      2. Estimated Phases (brief bullet points)
      3. A recommendation to book a site visit with M E Stewart for an accurate quote.
      
      Keep the tone bold, professional, and confident. Limit response to approx 200 words.`,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "I couldn't generate a response at this time. Please try again.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "An error occurred while fetching advice. Please check your connection and try again.";
  }
};