import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold">AI Engineer</h1>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </Link>
                <Link href="/about" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  About
                </Link>
                <Link href="/dashboard" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8">About AI Engineer</h1>
        <div className="prose lg:prose-xl mx-auto">
          <p>
            Welcome to AI Engineer, a platform that leverages the power of various GPT models
            to assist with your tasks. Our interface provides access to different GPT models,
            each suited for specific needs and requirements.
          </p>
          <h2>Available Models</h2>
          <ul>
            <li><strong>GPT-3.5 Turbo:</strong> Fast and efficient for most tasks</li>
            <li><strong>GPT-4:</strong> Most capable model for complex tasks</li>
            <li><strong>GPT-3.5 Turbo 16K:</strong> Extended context window for longer conversations</li>
            <li><strong>GPT-4 32K:</strong> Maximum context window for comprehensive analysis</li>
          </ul>
        </div>
      </main>
    </div>
  );
} 