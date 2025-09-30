import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { ICONS, AVATARS } from '../constants';
import Spinner from './Spinner';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatbotScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const conversationStarters = [
      "Explain Ohm's law in simple terms.",
      "Give me a practice question about HTML forms.",
      "What's the difference between Mitosis and Meiosis?",
      "Summarize the purpose of a business plan."
  ];

  useEffect(() => {
    if (!chatRef.current) {
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            chatRef.current = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: { systemInstruction: 'You are a helpful and friendly AI Tutor named "Gemini Genius" for Rwandan students studying both general subjects and TVET trades. Be encouraging, clear, and concise in your explanations. If asked about your identity, introduce yourself as Gemini Genius.' },
            });
            setMessages([{ role: 'model', text: "Hello! I'm Gemini Genius, your AI Tutor. How can I help you study today? You can ask me anything or try one of the suggestions below!" }]);
        } catch (error) {
            console.error("Failed to initialize Gemini AI:", error);
            setMessages([{ role: 'model', text: "Sorry, I'm having trouble connecting to my brain right now. Please check the API key and refresh the page." }]);
        }
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading || !chatRef.current) return;

    const userMessage: Message = { role: 'user', text: messageText };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const chat = chatRef.current;
      const responseStream = await chat.sendMessageStream({ message: messageText });
      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      
      for await (const chunk of responseStream) {
        const chunkText = chunk.text;
        setMessages(prev => {
          const newMessages = [...prev];
          const lastMessage = newMessages[newMessages.length - 1];
          if (lastMessage.role === 'model') {
            lastMessage.text += chunkText;
          }
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
    setInput('');
  };

  const handleStarterClick = (starter: string) => {
    setInput(starter);
    sendMessage(starter);
    setInput('');
  };

  return (
    <div className="flex flex-col h-[85vh] max-w-2xl mx-auto bg-gray-800 rounded-2xl shadow-2xl border border-gray-700">
      <div className="p-4 border-b border-gray-700 flex items-center">
        {React.cloneElement(ICONS.CHATBOT, {className: "h-8 w-8 text-purple-400 mr-3"})}
        <div>
            <h2 className="text-xl font-bold text-white">AI Tutor</h2>
            <p className="text-sm text-gray-400">Your personal study assistant</p>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'model' && <div className="w-8 h-8 rounded-full bg-purple-600 flex-shrink-0 flex items-center justify-center text-white">{React.cloneElement(ICONS.LOGO, {className:"w-6 h-6"})}</div>}
              <div className={`max-w-md p-3 rounded-lg ${msg.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-200'}`}><p className="whitespace-pre-wrap">{msg.text}</p></div>
              {msg.role === 'user' && <div className="w-8 h-8 rounded-full bg-gray-600 flex-shrink-0 flex items-center justify-center text-white overflow-hidden">{React.cloneElement(AVATARS['avatar1'], {className:"w-full h-full p-1"})}</div>}
            </div>
          ))}

          {messages.length <= 1 && !isLoading && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4">
                  {conversationStarters.map(starter => (
                      <button key={starter} onClick={() => handleStarterClick(starter)} className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-left text-sm text-gray-300 transition-colors">
                          {starter}
                      </button>
                  ))}
              </div>
          )}

          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex-shrink-0 flex items-center justify-center text-white">{React.cloneElement(ICONS.LOGO, {className:"w-6 h-6"})}</div>
              <div className="max-w-md p-3 rounded-lg bg-gray-700 flex items-center"><Spinner size="sm" /></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <form onSubmit={handleFormSubmit} className="p-4 border-t border-gray-700">
        <div className="flex items-center bg-gray-700 rounded-lg p-1">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask me anything..." className="flex-1 bg-transparent p-2 text-white placeholder-gray-400 focus:outline-none" disabled={isLoading} />
          <button type="submit" disabled={isLoading || !input.trim()} className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ChatbotScreen;