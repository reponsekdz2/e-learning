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

  useEffect(() => {
    // Initialize the chat session
    if (!chatRef.current) {
        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            chatRef.current = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: 'You are a helpful and friendly AI Tutor named "Gemini Genius" for Rwandan students studying both general subjects and TVET trades. Be encouraging, clear, and concise in your explanations. If asked about your identity, introduce yourself as Gemini Genius.',
                },
            });

            setMessages([{ role: 'model', text: "Hello! I'm Gemini Genius, your AI Tutor. How can I help you study today? Ask me about any subject!" }]);
        } catch (error) {
            console.error("Failed to initialize Gemini AI:", error);
            setMessages([{ role: 'model', text: "Sorry, I'm having trouble connecting to my brain right now. Please check the API key and refresh the page." }]);
        }
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chatRef.current) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const chat = chatRef.current;
      const responseStream = await chat.sendMessageStream({ message: input });

      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      
      for await (const chunk of responseStream) {
        const chunkText = chunk.text;
        setMessages(prev => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage.role === 'model') {
            const updatedMessages = [...prev.slice(0, -1)];
            updatedMessages.push({ role: 'model', text: lastMessage.text + chunkText });
            return updatedMessages;
          }
          return prev;
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I encountered an error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
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
              {msg.role === 'model' && (
                <div className="w-8 h-8 rounded-full bg-purple-600 flex-shrink-0 flex items-center justify-center text-white">
                    {React.cloneElement(ICONS.LOGO, {className:"w-6 h-6"})}
                </div>
              )}
              <div className={`max-w-md p-3 rounded-lg ${msg.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-200'}`}>
                <p className="whitespace-pre-wrap">{msg.text}</p>
              </div>
               {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-gray-600 flex-shrink-0 flex items-center justify-center text-white overflow-hidden">
                    {React.cloneElement(AVATARS['avatar1'], {className:"w-full h-full p-1"})}
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex-shrink-0 flex items-center justify-center text-white">
                {React.cloneElement(ICONS.LOGO, {className:"w-6 h-6"})}
              </div>
              <div className="max-w-md p-3 rounded-lg bg-gray-700 flex items-center">
                <Spinner size="sm" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700">
        <div className="flex items-center bg-gray-700 rounded-lg p-1">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent p-2 text-white placeholder-gray-400 focus:outline-none"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatbotScreen;
