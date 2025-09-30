
import { GoogleGenAI, Type } from "@google/genai";
import { Question, QuizData } from '../types';
import { TOTAL_QUESTIONS } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const schema = {
  type: Type.OBJECT,
  properties: {
    questions: {
      type: Type.ARRAY,
      description: `An array of ${TOTAL_QUESTIONS} quiz questions.`,
      items: {
        type: Type.OBJECT,
        properties: {
          questionText: {
            type: Type.STRING,
            description: "The text of the trivia question."
          },
          options: {
            type: Type.ARRAY,
            description: "An array of 4 possible answers.",
            items: { type: Type.STRING }
          },
          correctAnswerIndex: {
            type: Type.INTEGER,
            description: "The 0-based index of the correct answer in the 'options' array."
          }
        },
        required: ["questionText", "options", "correctAnswerIndex"]
      }
    }
  },
  required: ["questions"]
};

export const fetchQuizQuestions = async (): Promise<Question[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate ${TOTAL_QUESTIONS} unique and engaging multiple-choice trivia questions on a variety of topics (e.g., science, history, pop culture). Each question must have exactly 4 options and one single correct answer.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
      },
    });

    const jsonText = response.text;
    const data: QuizData = JSON.parse(jsonText);
    
    // Basic validation
    if (!data.questions || data.questions.length !== TOTAL_QUESTIONS) {
        throw new Error("Invalid data structure received from API.");
    }

    data.questions.forEach(q => {
        if (!q.questionText || !q.options || q.options.length !== 4 || q.correctAnswerIndex < 0 || q.correctAnswerIndex > 3) {
            throw new Error("One of the questions has an invalid format.");
        }
    });

    return data.questions;
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
    throw new Error("Failed to generate quiz. Please check your API key and try again.");
  }
};
