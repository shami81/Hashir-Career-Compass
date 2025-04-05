import Image from "next/image"

export default function ProfileSection() {
  return (
    <div className="md:w-1/3 bg-gray-800/90 rounded-xl shadow-xl p-6 md:p-8 flex flex-col items-center">
      <div className="relative w-40 h-40 mx-auto mb-6">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Muhammad_Hashir_King.jpg-47gDFSC25jo6cj9a4qQSdjYdIGdkWJ.jpeg"
          alt="Muhammad Hashir Ehtisham"
          width={160}
          height={160}
          className="rounded-full border-4 border-teal-500 object-cover w-full h-full"
        />
      </div>

      <h2 className="text-2xl font-semibold text-teal-400 mt-4 text-center">Muhammad Hashir Ehtisham</h2>

      <h3 className="text-lg text-gray-300 mt-1 text-center">Google Certified AI App Developer</h3>

      <p className="text-gray-300 mt-4 text-justify">
        I created Career Compass to help students and professionals navigate their career paths with confidence. This
        AI-powered tool analyzes your skills, experience, and goals to provide personalized career guidance and
        opportunities tailored to your unique profile.
      </p>

      <div className="mt-6 w-full">
        <div className="flex flex-col gap-4">
          <a
            href="/resources/career-compass-template.xlsx"
            download
            className="w-full py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Excel Template
          </a>
          <a
            href="/resources/career-compass-demo.mp4"
            download
            className="w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="23 7 16 12 23 17 23 7" />
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
            </svg>
            Watch Demo Video
          </a>

          {/* Social Media Links */}
          <div className="flex justify-center gap-4 mt-2">
            <a
              href="https://www.linkedin.com/in/muhammad-hashir-ehtisham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://github.com/hashir-ehtisham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-teal-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

