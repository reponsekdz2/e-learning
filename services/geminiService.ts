// Fix: Implemented Gemini service functions and added necessary imports.
import { GoogleGenAI, Type } from "@google/genai";
import { Quiz, Question } from '../types';

// The guidelines state to assume API_KEY is pre-configured and valid.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const getExplanation = async (question: Question): Promise<string> => {
  const prompt = `Explain why the correct answer to the following multiple-choice question is "${question.options[question.correctAnswerIndex]}".
  
  Question: ${question.questionText}
  Options:
  - ${question.options.join('\n- ')}
  
  Correct Answer: ${question.options[question.correctAnswerIndex]}
  
  Provide a clear and concise explanation suitable for a student.`;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching explanation from Gemini:", error);
    return "Sorry, I couldn't fetch an explanation at this time. Please try again later.";
  }
};


export const generateQuiz = async (subject: string, topic: string): Promise<Quiz | null> => {
  const prompt = `Create a 5-question multiple-choice quiz about "${topic}" in the subject of "${subject}".
  Each question should have 4 options. One of the options must be the correct answer.
  The questions should be suitable for a high school or vocational student.
  Format the output as a JSON object that matches this structure:
  {
    "title": "Quiz Title about the topic",
    "questions": [
      {
        "questionText": "The text of the question?",
        "options": ["Option A", "Option B", "Option C", "Option D"],
        "correctAnswerIndex": 0
      }
    ]
  }
  Do not include any text or markdown formatting outside of the JSON object.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            questions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  questionText: { type: Type.STRING },
                  options: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  },
                  correctAnswerIndex: { type: Type.INTEGER }
                },
                required: ["questionText", "options", "correctAnswerIndex"]
              }
            }
          },
          required: ["title", "questions"]
        }
      },
    });

    const jsonText = response.text.trim();
    const quizData = JSON.parse(jsonText);

    // Basic validation
    if (!quizData.title || !Array.isArray(quizData.questions) || quizData.questions.length === 0) {
        throw new Error("Invalid quiz format received from API");
    }
    
    const newQuizId = `gemini-gen-${Date.now()}`;

    return {
      ...quizData,
      id: newQuizId,
      questions: quizData.questions.map((q: Omit<Question, 'id'>, index: number) => ({
        ...q,
        id: `${newQuizId}-q-${index}`
      }))
    };

  } catch (error) {
    console.error("Error generating quiz from Gemini:", error);
    return null;
  }
};
