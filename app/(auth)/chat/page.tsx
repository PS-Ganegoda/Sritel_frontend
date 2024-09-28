"use client"
import { useState } from 'react';

const ChatPage = () => {
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessages = [...messages, { user: 'Customer', text: input }];
      setMessages(newMessages);
      setInput('');

      // Simulate a customer service response
      setTimeout(() => {
        setMessages([...newMessages, { user: 'Service', text: 'Thank you for your message. How can I assist you further?' }]);
      }, 1000);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen py-5  bg-gray-200">
      <div className="w-1/2 flex flex-col h-full bg-gray-100 rounded-lg">
        <header className="bg-blue-600 text-white p-4 text-center text-xl font-semibold">
          Customer Service Chat
        </header>

        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 ${message.user === 'Customer' ? 'text-right' : 'text-left'}`}>
              <div
                className={`inline-block p-3 rounded-lg ${
                  message.user === 'Customer' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'
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
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
