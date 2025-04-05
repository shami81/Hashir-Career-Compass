"use client"

interface InteractiveSectionProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function InteractiveSection({ activeTab, setActiveTab }: InteractiveSectionProps) {
  // Set the URL with dark mode parameter
  const iframeUrl = "https://hashirehtisham-career-compass.hf.space/?__theme=dark"

  return (
    <div className="md:w-3/4 bg-gray-800/90 rounded-xl shadow-xl p-6 md:p-8 flex flex-col">
      {/* Iframe Container */}
      <div className="flex-grow min-h-[500px] bg-gray-900 rounded-md">
        <iframe
          src={iframeUrl}
          className="w-full h-full min-h-[500px] border-0 rounded-md"
          title="Career Compass"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Info Section */}
      <div className="mt-6 p-4 bg-gray-700/50 rounded-md">
        <h3 className="text-lg font-medium text-teal-400 mb-2">Welcome to Career Compass</h3>
        <p className="text-gray-300 text-sm">
          Explore our AI-powered career guidance platform designed to help you navigate your professional journey. Use
          the tabs within the application to analyze your career path, upload your resume, or get personalized guidance.
        </p>
      </div>
    </div>
  )
}

