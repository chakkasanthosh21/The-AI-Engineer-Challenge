'use client';

import { useState } from 'react';
import { useChat } from 'ai/react';

const models = [
  'gpt-4.1-mini',
  'gpt-4.1-nano',
  'gpt-4o-mini',
  'gpt-3.5-turbo'
];

const roles = [
  'You are a helpful AI assistant.',
  'You are a wise Python programmer.',
  'You are a creative writing expert.',
  'You are a data science expert.',
  'You are a web development expert.',
  'You are a system design expert.',
  'You are a cybersecurity expert.',
  'You are a machine learning expert.',
  'You are a software architecture expert.',
  'You are a database optimization expert.'
];

export default function Home() {
  const [apiKey, setApiKey] = useState('');
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  const [customPrompt, setCustomPrompt] = useState('');
  const [showCustomPrompt, setShowCustomPrompt] = useState(false);

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
    body: {
      apiKey,
      model: selectedModel,
      systemPrompt: showCustomPrompt ? customPrompt : selectedRole
    }
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey) {
      alert('Please enter your OpenAI API key');
      return;
    }
    handleSubmit(e);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-gray-50">
      <div className="w-full max-w-4xl space-y-4">
        <h1 className="text-2xl font-bold text-center mb-8">AI Chat Interface</h1>
        
        {/* Model Selection */}
        <div className="flex flex-wrap gap-2">
          {models.map((model) => (
            <button
              key={model}
              onClick={() => setSelectedModel(model)}
              className={`px-3 py-1 rounded text-sm ${
                selectedModel === model
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {model}
            </button>
          ))}
        </div>

        {/* API Key Input */}
        <input
          type="password"
          placeholder="Enter your OpenAI API key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="w-full p-2 border rounded shadow-sm"
        />

        {/* Role Selection */}
        <div className="flex flex-wrap gap-2">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => {
                setSelectedRole(role);
                setShowCustomPrompt(false);
              }}
              className={`px-3 py-1 rounded text-sm ${
                selectedRole === role && !showCustomPrompt
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {role.replace('You are ', '').replace('.', '')}
            </button>
          ))}
          <button
            onClick={() => setShowCustomPrompt(true)}
            className={`px-3 py-1 rounded text-sm ${
              showCustomPrompt
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            + Add Custom Prompt
          </button>
        </div>

        {/* Custom Prompt Input */}
        {showCustomPrompt && (
          <input
            type="text"
            placeholder="Enter custom system prompt"
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
            className="w-full p-2 border rounded shadow-sm"
          />
        )}

        {/* Messages */}
        <div className="space-y-4 mt-4 max-h-[60vh] overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 rounded-lg ${
                message.role === 'user'
                  ? 'bg-blue-100 ml-auto'
                  : 'bg-white border'
              } max-w-[80%]`}
            >
              <p className="whitespace-pre-wrap">{message.content}</p>
            </div>
          ))}
          {isLoading && (
            <div className="bg-gray-100 p-4 rounded-lg max-w-[80%]">
              <p>AI is thinking...</p>
            </div>
          )}
        </div>

        {/* Input Form */}
        <form onSubmit={onSubmit} className="flex gap-2 sticky bottom-4">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded shadow-sm"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-blue-500 text-white rounded shadow-sm hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
} 