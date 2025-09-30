import { GoogleGenAI, Type } from "@google/genai";
import { Question, Quiz } from '../types';

if (!process.env.API_KEY) {
  console.error("API Key not found. Please set the API_KEY environment variable.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const quizGenerationSchema = {
  type: Type.OBJECT,
  properties: {
    questions: {
      type: Type.ARRAY,
      description: "An array of 5 quiz questions.",
      items: {
        type: Type.OBJECT,
        properties: {
          questionText: {
            type: Type.STRING,
            description: "The text of the question."
          },
          options: {
            type: Type.ARRAY,
            description: "An array of exactly 4 strings representing the possible answers.",
            items: {
              type: Type.STRING,
            }
          },
          correctAnswerIndex: {
            type: Type.NUMBER,
            description: "The 0-based index of the correct answer in the 'options' array."
          }
        },
        required: ["questionText", "options", "correctAnswerIndex"]
      }
    }
  },
  required: ["questions"]
};


export const generateQuiz = async (subjectName: string, topic: string): Promise<Quiz | null> => {
  try {
    const prompt = `Generate a 5-question multiple-choice quiz about '${topic}' within the subject of '${subjectName}'. Each question must have exactly 4 options. Ensure the questions are challenging and suitable for a vocational training student. Return the response as a JSON object that strictly follows the provided schema. Do not include markdown formatting like \`\`\`json.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: quizGenerationSchema,
      },
    });
    
    const jsonStr = response.text.trim();
    const cleanedJsonStr = jsonStr.replace(/^```json\s*|```$/g, '');
    const generatedData = JSON.parse(cleanedJsonStr) as { questions: Question[] };

    if (!generatedData.questions || generatedData.questions.length === 0) {
      throw new Error("AI failed to generate questions.");
    }
    
    const newQuiz: Quiz = {
      id: `ai-${Date.now()}`,
      title: `${topic} (AI Generated)`,
      questions: generatedData.questions,
    };

    return newQuiz;

  } catch (error) {
    console.error("Error generating quiz:", error);
    return null;
  }
};

export const getExplanation = async (question: Question): Promise<string> => {
  try {
      const correctAnswerText = question.options[question.correctAnswerIndex];
      const prompt = `Please provide a concise and easy-to-understand explanation for the following quiz question. Explain why the correct answer is "${correctAnswerText}" and briefly mention why the other options are incorrect.
      
      Question: "${question.questionText}"
      Options: ${question.options.join(', ')}
      Correct Answer: "${correctAnswerText}"
      
      Keep the explanation to 2-3 sentences.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      return response.text;

  } catch (error) {
      console.error("Error getting explanation:", error);
      return "Sorry, I couldn't generate an explanation at this time. Please check your connection and API key.";
  }
};