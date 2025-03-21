"use client"

import { useState, useEffect, useRef } from "react"
import {
  ExternalLink,
  Maximize,
  Minimize,
  RefreshCw,
  Laptop,
  Smartphone,
  Tablet,
  Play,
  Pause,
  ChevronUp,
  ChevronDown,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface WebsiteShowcaseProps {
  url: string
  title: string
  description?: string
  aspectRatio?: "desktop" | "mobile" | "tablet"
  height?: number
  isActive?: boolean
}

export default function WebsiteShowcase({
  url,
  title,
  description,
  aspectRatio = "desktop",
  height = 600,
  isActive = false,
}: WebsiteShowcaseProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentAspectRatio, setCurrentAspectRatio] = useState(aspectRatio)
  const [isAutoScrolling, setIsAutoScrolling] = useState(false)
  const [scrollSpeed, setScrollSpeed] = useState(1) // 1 = normal, 0.5 = slow, 2 = fast
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setIsLoading(true)
    setError(null)
  }, [url])

  useEffect(() => {
    setCurrentAspectRatio(aspectRatio)
  }, [aspectRatio])

  // Stop auto-scrolling when component unmounts or when not active
  useEffect(() => {
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current)
        autoScrollIntervalRef.current = null
      }
    }
  }, [])

  // Handle auto-scrolling based on active state
  useEffect(() => {
    if (!isActive && isAutoScrolling) {
      setIsAutoScrolling(false)
    }
  }, [isActive, isAutoScrolling])

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setError("Failed to load website. It may have X-Frame-Options restrictions.")
  }

  const refreshIframe = () => {
    if (iframeRef.current) {
      setIsLoading(true)
      iframeRef.current.src = url
    }
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const changeAspectRatio = (newRatio: "desktop" | "mobile" | "tablet") => {
    setCurrentAspectRatio(newRatio)
  }

  const toggleAutoScroll = () => {
    if (isAutoScrolling) {
      stopAutoScroll()
    } else {
      startAutoScroll()
    }
  }

  const startAutoScroll = () => {
    if (!iframeRef.current || error) return

    // Stop any existing interval
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current)
    }

    setIsAutoScrolling(true)

    // Get the iframe document
    const iframe = iframeRef.current

    // Try to access the iframe content
    try {
      // Reset scroll position to top before starting
      if (iframe.contentWindow) {
        iframe.contentWindow.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }

      // Start the auto-scroll interval
      autoScrollIntervalRef.current = setInterval(() => {
        if (iframe.contentWindow) {
          const contentHeight = iframe.contentWindow.document.body.scrollHeight
          const viewportHeight = iframe.contentWindow.innerHeight
          const currentScroll = iframe.contentWindow.scrollY
          const maxScroll = contentHeight - viewportHeight

          // If we've reached the bottom, reset to top
          if (currentScroll >= maxScroll - 10) {
            iframe.contentWindow.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          } else {
            // Otherwise continue scrolling
            iframe.contentWindow.scrollBy({
              top: 1 * scrollSpeed,
              behavior: "auto",
            })
          }
        }
      }, 10)
    } catch (e) {
      // If we can't access the iframe content due to CORS, show an error
      console.error("Cannot access iframe content due to CORS restrictions", e)
      setError("Cannot auto-scroll due to security restrictions.")
      setIsAutoScrolling(false)
    }
  }

  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current)
      autoScrollIntervalRef.current = null
    }
    setIsAutoScrolling(false)
  }

  const changeScrollSpeed = (faster: boolean) => {
    if (faster) {
      setScrollSpeed((prev) => Math.min(prev + 0.5, 3))
    } else {
      setScrollSpeed((prev) => Math.max(prev - 0.5, 0.5))
    }
  }

  const getAspectRatioClass = () => {
    switch (currentAspectRatio) {
      case "mobile":
        return "max-w-[375px] aspect-[9/19]"
      case "tablet":
        return "max-w-[768px] aspect-[4/3]"
      case "desktop":
      default:
        return "w-full aspect-[16/9]"
    }
  }

  const getDeviceFrame = () => {
    switch (currentAspectRatio) {
      case "mobile":
        return (
          <div className="relative h-full rounded-[2.5rem] border-[14px] border-gray-900 shadow-xl bg-gray-900 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-xl z-10"></div>
            <div className="w-full h-full overflow-hidden rounded-[1.5rem]">{renderContent()}</div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-700 rounded-full"></div>
          </div>
        )
      case "tablet":
        return (
          <div className="relative h-full rounded-[2rem] border-[12px] border-gray-900 shadow-xl bg-gray-900 overflow-hidden">
            <div className="absolute top-1/2 -translate-y-1/2 right-3 w-1 h-12 bg-gray-700 rounded-full"></div>
            <div className="w-full h-full overflow-hidden rounded-[1rem]">{renderContent()}</div>
            <div className="absolute bottom-1/2 translate-y-1/2 left-3 w-1 h-12 bg-gray-700 rounded-full"></div>
          </div>
        )
      case "desktop":
      default:
        return (
          <div className="rounded-xl border h-full border-gray-200 shadow-xl overflow-hidden bg-white">
            <div className="bg-gray-100 border-b border-gray-200 p-2 flex items-center">
              <div className="flex space-x-1.5 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-500 truncate border border-gray-200">
                {url}
              </div>

              <div className="flex ml-4 space-x-2">
                <button
                  onClick={refreshIframe}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Refresh"
                >
                  <RefreshCw size={16} />
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                >
                  {isFullscreen ? <Minimize size={16} /> : <Maximize size={16} />}
                </button>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Open in new tab"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
            <div className="w-full h-full">{renderContent()}</div>
          </div>
        )
    }
  }

  const renderContent = () => {
    return (
      <div className="relative w-full h-full bg-gray-50">
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 z-10"
            >
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin"></div>
                <div className="absolute inset-0 rounded-full border-r-2 border-primary opacity-75 animate-ping"></div>
              </div>
              <p className="mt-4 text-sm text-gray-500 font-medium">Loading preview...</p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6 z-10"
            >
              <div className="w-16 h-16 mb-4 text-red-500 flex items-center justify-center rounded-full bg-red-50 border border-red-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Unable to Load Preview</h3>
              <p className="text-sm text-gray-600 text-center max-w-md mb-6">
                This website cannot be embedded due to security restrictions. Consider using a screenshot or video demo
                instead.
              </p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary/90 text-white rounded-full font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all transform hover:-translate-y-0.5"
              >
                Visit Website
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <iframe
          ref={iframeRef}
          src={url}
          title={title}
          className="w-full h-full border-0"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          sandbox="allow-scripts allow-same-origin"
          loading="lazy"
        />

        {/* Auto-scroll controls overlay */}
        {!isLoading && !error && (
          <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-2">
            <AnimatePresence>
              {isAutoScrolling && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  className="flex flex-col gap-1 items-center bg-black/20 backdrop-blur-sm p-1 rounded-full"
                >
                  <button
                    onClick={() => changeScrollSpeed(true)}
                    className="p-1.5 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                    aria-label="Increase scroll speed"
                  >
                    <ChevronUp size={14} />
                  </button>
                  <div className="text-xs font-medium text-white/90 py-1">
                    {scrollSpeed === 0.5
                      ? "Slow"
                      : scrollSpeed === 1
                        ? "Normal"
                        : scrollSpeed === 1.5
                          ? "Fast"
                          : "Very Fast"}
                  </div>
                  <button
                    onClick={() => changeScrollSpeed(false)}
                    className="p-1.5 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                    aria-label="Decrease scroll speed"
                  >
                    <ChevronDown size={14} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={toggleAutoScroll}
              className={`p-2.5 rounded-full shadow-lg transition-all ${
                isAutoScrolling ? "bg-primary text-white" : "bg-white/80 text-gray-800 hover:bg-white"
              }`}
              aria-label={isAutoScrolling ? "Stop auto-scroll" : "Start auto-scroll"}
            >
              {isAutoScrolling ? <Pause size={18} /> : <Play size={18} />}
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      className={`website-showcase ${isFullscreen ? "fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-4 overflow-auto" : "relative"}`}
    >
      <motion.div
        layout
        initial={false}
        animate={{
          scale: isFullscreen ? 1 : 1,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className={`transition-all duration-300 ${isFullscreen ? "w-full h-full" : getAspectRatioClass()}`}
        style={{ height: isFullscreen ? "100%" : height }}
      >
        {isFullscreen && (
          <div className="absolute top-4 right-4 z-20 flex gap-2">
            <button
              onClick={toggleFullscreen}
              className="p-2 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-colors"
              aria-label="Exit fullscreen"
            >
              <Minimize size={20} />
            </button>
          </div>
        )}

        {!isFullscreen && (
          <div className="absolute -top-12 right-0 z-10 flex items-center gap-2">
            <button
              onClick={() => changeAspectRatio("desktop")}
              className={`p-1.5 rounded-md transition-colors ${
                currentAspectRatio === "desktop"
                  ? "bg-primary/10 text-primary"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              }`}
              aria-label="Desktop view"
            >
              <Laptop size={18} />
            </button>
            <button
              onClick={() => changeAspectRatio("tablet")}
              className={`p-1.5 rounded-md transition-colors ${
                currentAspectRatio === "tablet"
                  ? "bg-primary/10 text-primary"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              }`}
              aria-label="Tablet view"
            >
              <Tablet size={18} />
            </button>
            <button
              onClick={() => changeAspectRatio("mobile")}
              className={`p-1.5 rounded-md transition-colors ${
                currentAspectRatio === "mobile"
                  ? "bg-primary/10 text-primary"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              }`}
              aria-label="Mobile view"
            >
              <Smartphone size={18} />
            </button>
          </div>
        )}

        {getDeviceFrame()}
      </motion.div>

      {!isFullscreen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4"
        >
          <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
          {description && <p className="text-gray-600 mt-1 text-sm">{description}</p>}
        </motion.div>
      )}
    </div>
  )
}

