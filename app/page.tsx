"use client"

import { useState, useEffect } from "react"
import BubbleBackground from "@/components/bubble-background"
import Header from "@/components/header"
import ProfileSection from "@/components/profile-section"
import InteractiveSection from "@/components/interactive-section"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  // We'll keep this dummy state to avoid changing the props structure
  const [activeTab, setActiveTab] = useState("Home")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <BubbleBackground />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <Header />

        {/* Main Two-Column Layout */}
        <div
          className={`flex flex-col md:flex-row gap-8 md:gap-12 transition-opacity duration-1000 ease-in-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Left Column - Profile */}
          <ProfileSection />

          {/* Right Column - Interactive Area */}
          <InteractiveSection activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </main>
  )
}

