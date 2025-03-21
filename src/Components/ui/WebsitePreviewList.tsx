"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import WebsiteShowcase from "./WebsitePreview"
import { getLastWordsToRecolor } from "../HeroSection"

interface Website {
  url: string
  title: string
  description?: string
}

interface WebsitePreviewListProps {
  websites: Website[]
}

export default function WebsitePreviewList({ websites }: WebsitePreviewListProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
//   eslint-disable-next-line
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [viewportHeight, setViewportHeight] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  // Check if device is mobile and get viewport height
  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 768)
      // Calculate available height (subtract header and padding)
      const availableHeight = window.innerHeight - 150 // Adjust based on your layout
      setViewportHeight(availableHeight)
    }

    // Initial check
    checkViewport()

    // Add event listener for window resize
    window.addEventListener("resize", checkViewport)

    // Cleanup
    return () => window.removeEventListener("resize", checkViewport)
  }, [])

  // Set up refs array for each website item
  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, websites.length)
  }, [websites.length])

  const scrollToIndex = (index: number) => {
    if (containerRef.current && itemRefs.current[index]) {
      const container = containerRef.current
      const item = itemRefs.current[index]

      if (item) {
        // Calculate the position to center the item
        const containerWidth = container.offsetWidth
        const itemWidth = item.offsetWidth
        const itemLeft = item.offsetLeft

        // Center the item in the container
        const targetScrollPosition = itemLeft - (isMobile ? 0 : containerWidth / 2 - itemWidth / 2)

        // Smooth scroll to the position
        container.scrollTo({
          left: targetScrollPosition,
          behavior: "smooth",
        })

        setScrollPosition(targetScrollPosition)
        setCurrentIndex(index)
      }
    }
  }

  const handleNext = () => {
    if (currentIndex < websites.length - 1) {
      scrollToIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1)
    }
  }

  // Update scroll position when container is scrolled
  const handleScroll = () => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft)
    }
  }

  // Initialize scroll position
  useEffect(() => {
    if (websites.length > 0) {
      scrollToIndex(currentIndex)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile])

  // Calculate the appropriate height for the website preview
  const getPreviewHeight = () => {
    if (isMobile) {
      // On mobile, use a percentage of the viewport height
      return viewportHeight * 0.7 // 70% of available height
    } else {
      // On desktop, use a fixed height or aspect ratio
      return 600 // Default height
    }
  }

  return (
    <div className="relative py-8 md:py-12 md:px-4 max-w-full">
      <h1 className="font-bold text-3xl text-center pb-6 md:pb-8">
        {getLastWordsToRecolor("Webseiten unserer Kunden!", 0, ["Webseiten"])}
      </h1>

      {/* Navigation buttons - positioned differently on mobile */}
      <div className={`absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 ${isMobile ? "opacity-70" : ""}`}>
        <button
          onClick={handlePrev}
          className="p-2 bg-white/80 text-gray-800 rounded-full shadow-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentIndex === 0}
          aria-label="Vorherige Website"
        >
          <ChevronLeft size={isMobile ? 20 : 24} />
        </button>
      </div>

      <div className={`absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 ${isMobile ? "opacity-70" : ""}`}>
        <button
          onClick={handleNext}
          className="p-2 bg-white/80 text-gray-800 rounded-full shadow-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentIndex === websites.length - 1}
          aria-label="Nächste Website"
        >
          <ChevronRight size={isMobile ? 20 : 24} />
        </button>
      </div>

      {/* Carousel indicators - positioned at bottom on mobile */}
      <div className={`flex justify-center gap-2 ${isMobile ? "absolute bottom-2 left-0 right-0 z-20" : "mb-4"}`}>
        {websites.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-blue-300/80" : "bg-gray-300/60"
            }`}
            aria-label={`Gehe zu Website ${index + 1}`}
          />
        ))}
      </div>

      {/* Carousel container - full width on mobile */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 md:pb-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={handleScroll}
      >
        {/* Padding at beginning - only on desktop */}
        {!isMobile && <div className="flex-shrink-0 w-[10%]" />}

        {websites.map((website, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`flex-shrink-0 transition-all duration-300 snap-center ${
              isMobile ? "w-full px-0" : "w-[80%] px-4"
            } ${
              index === currentIndex
                ? "scale-100 opacity-100"
                : isMobile
                  ? "scale-100 opacity-100"
                  : "scale-90 opacity-70"
            }`}
          >
            <WebsiteShowcase
              url={website.url}
              title={website.title}
              description={website.description}
              height={getPreviewHeight()}
              isActive={index === currentIndex}
            />
          </div>
        ))}

        {/* Padding at end - only on desktop */}
        {!isMobile && <div className="flex-shrink-0 w-[10%]" />}
      </div>
    </div>
  )
}

