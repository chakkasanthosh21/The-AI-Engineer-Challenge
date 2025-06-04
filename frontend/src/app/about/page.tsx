export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The AI Engineer Challenge
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Empowering developers to build the future of AI applications.
          </p>
        </div>

        <div className="mt-10">
          <div className="prose prose-indigo prose-lg text-gray-500 mx-auto">
            <p>
              The AI Engineer Challenge is a platform designed to help developers master the art of building AI-powered applications. 
              Our mission is to provide the tools, resources, and community support needed to create innovative AI solutions.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h3>
            <p>
              We believe that AI technology should be accessible to all developers. Our platform provides:
            </p>
            <ul className="list-disc list-inside mb-6">
              <li>Comprehensive learning resources</li>
              <li>Hands-on project experience</li>
              <li>Community support and collaboration</li>
              <li>Industry-standard tools and practices</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Join Our Community</h3>
            <p>
              Whether you&apos;re just starting your journey in AI development or you&apos;re an experienced engineer looking to expand your skills, 
              we welcome you to join our growing community of AI engineers.
            </p>

            <div className="mt-8 flex justify-center">
              <a
                href="/dashboard"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 