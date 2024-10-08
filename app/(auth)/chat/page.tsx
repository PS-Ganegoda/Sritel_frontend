"use client";
import { useState } from 'react';
import Navbar from "@/app/components/Navbar";

const ChatPage = () => {
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessages = [...messages, { user: 'Customer', text: input }];
      setMessages(newMessages);
      setInput('');

      setTimeout(() => {
        setMessages([...newMessages, { user: 'Service', text: 'Thank you for your message. How can I assist you further?' }]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="flex flex-col flex-1 justify-center items-center py-5 bg-gray-200">
        <div className="w-full max-w-2xl flex flex-col h-[70vh] bg-white rounded-lg shadow-md">
          <header className="bg-[#2b4b55] text-white p-4 text-center text-xl font-semibold rounded-t-lg">
            Customer Service Chat
          </header>

          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.user === 'Customer' ? 'text-right' : 'text-left'}`}>
                <div
                  className={`inline-block p-3 rounded-lg ${
                    message.user === 'Customer' ? 'bg-[#c96cc3] text-white' : 'bg-[#e5a8df] text-gray-900'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center p-4 border-t border-gray-300 bg-white">
            <input
              type="text"
              className="flex-1 p-2 border border-gray-300 rounded-lg mr-2"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="bg-[#2b4b55] text-white px-4 py-2 rounded-lg hover:bg-[#c96cc3]"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
