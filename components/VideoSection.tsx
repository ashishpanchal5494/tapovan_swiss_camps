"use client";

import {
  useState,
  useCallback,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";

const videos = [
  "/assets/video/garden.mp4",
  "/assets/video/pool.mp4",
  "/assets/video/vollyball.mp4",
];

const VideoSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [videoLoadedStates, setVideoLoadedStates] = useState<boolean[]>(
    new Array(videos.length).fill(false)
  );
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextVideo = useCallback(() => {
    setActiveVideo((prev) => (prev + 1) % videos.length);
  }, []);

  const prevVideo = useCallback(() => {
    setActiveVideo((prev) => (prev - 1 + videos.length) % videos.length);
  }, []);

  // Set fixed viewport height to prevent resize on scroll
  useLayoutEffect(() => {
    const setViewportHeight = () => {
      if (typeof window !== "undefined") {
        // Calculate 1vh in pixels to handle mobile browser address bar
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);

        // Set fixed height for video wrapper to prevent resize on scroll
        if (wrapperRef.current) {
          const isMobile = window.innerWidth <= 768;
          const isSmallMobile = window.innerWidth <= 480;
          const heightMultiplier = isSmallMobile ? 0.4 : isMobile ? 0.5 : 0.9;
          const calculatedHeight = window.innerHeight * heightMultiplier;
          // Ensure minimum height for visibility
          const minHeight = isSmallMobile ? 200 : isMobile ? 250 : 300;
          const height = Math.max(calculatedHeight, minHeight);
          wrapperRef.current.style.height = `${height}px`;
          wrapperRef.current.style.minHeight = `${height}px`;
        }
      }
    };

    // Set immediately on mount
    setViewportHeight();

    // Update on resize and orientation change
    window.addEventListener("resize", setViewportHeight);
    window.addEventListener("orientationchange", setViewportHeight);

    // Also update after a short delay to catch any late viewport changes
    const timeoutId = setTimeout(setViewportHeight, 100);

    return () => {
      window.removeEventListener("resize", setViewportHeight);
      window.removeEventListener("orientationchange", setViewportHeight);
      clearTimeout(timeoutId);
    };
  }, []);

  // Preload all videos with metadata for faster switching
  useEffect(() => {
    const cleanupFunctions: (() => void)[] = [];

    videos.forEach((src, index) => {
      const video = document.createElement("video");
      video.src = src;
      video.preload = "metadata";
      video.muted = true;
      video.playsInline = true;

      const handleLoadedMetadata = () => {
        setVideoLoadedStates((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };

      const handleError = () => {
        console.error(`Failed to load video ${index}: ${src}`);
      };

      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      video.addEventListener("error", handleError);
      video.load();

      cleanupFunctions.push(() => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("error", handleError);
        video.src = ""; // Release video resources
      });
    });

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, []);

  // Preload adjacent videos when active video changes
  useEffect(() => {
    const preloadAdjacent = () => {
      const prevIndex = (activeVideo - 1 + videos.length) % videos.length;
      const nextIndex = (activeVideo + 1) % videos.length;

      [prevIndex, nextIndex].forEach((idx) => {
        const video = videoRefs.current[idx];
        if (video && video.readyState < 2) {
          // If video hasn't loaded enough data, load it
          video.load();
        }
      });
    };

    preloadAdjacent();
  }, [activeVideo]);

  // Autoplay active video when it's loaded and ready
  useEffect(() => {
    const playActiveVideo = async () => {
      // Clear any pending timeout
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }

      const video = videoRefs.current[activeVideo];
      if (!video) {
        // Retry after a short delay if video ref is not ready
        loadingTimeoutRef.current = setTimeout(playActiveVideo, 100);
        return;
      }

      // Wait for video to be ready
      const checkAndPlay = async () => {
        if (video.readyState >= 2) {
          // HAVE_CURRENT_DATA or higher
          try {
            video.currentTime = 0;
            await video.play();
          } catch (error) {
            console.warn("Autoplay prevented:", error);
            // Some browsers may block autoplay, that's okay
          }
        } else {
          // Wait for video to load
          const handleCanPlay = async () => {
            try {
              video.currentTime = 0;
              await video.play();
            } catch (error) {
              console.warn("Autoplay prevented:", error);
            }
            video.removeEventListener("canplay", handleCanPlay);
          };

          video.addEventListener("canplay", handleCanPlay);
          // Force load if not already loading
          if (video.networkState === 0 || video.networkState === 3) {
            video.load();
          }
        }
      };

      checkAndPlay();
    };

    playActiveVideo();

    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, [activeVideo, videoLoadedStates]);

  // Pause all non-active videos
  useEffect(() => {
    videoRefs.current.forEach((v, idx) => {
      if (v && idx !== activeVideo) {
        try {
          v.pause();
          v.currentTime = 0;
        } catch {
          // Ignore pause errors
        }
      }
    });
  }, [activeVideo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") prevVideo();
      if (event.key === "ArrowRight") nextVideo();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [nextVideo, prevVideo]);

  return (
    <section className="video-section position-relative overflow-hidden">
      <div className="text-center mb-3 mb-md-4 mb-lg-5 video-section-header">
        <h2 className="video-section-title fw-bold text-dark mb-2 mb-md-3 mb-lg-4">
          Experience Our{" "}
          <span className="text-primary-custom">Beautiful Campsite</span>
        </h2>
        <p className="video-section-description text-muted mb-2 mb-md-3">
          Take a virtual tour of our luxury camping facilities and natural
          surroundings
        </p>
      </div>

      <div className="video-slider-wrapper" ref={wrapperRef}>
        <div
          className="video-slider"
          style={{
            transform: `translateX(-${activeVideo * 100}%)`,
            width: `${videos.length * 100}%`,
          }}
        >
          {videos.map((src, index) => (
            <video
              key={index}
              ref={(el) => {
                if (el) {
                  videoRefs.current[index] = el;
                }
              }}
              className="video-slide"
              muted
              playsInline
              preload="metadata"
              onEnded={nextVideo}
              onLoadedMetadata={() => {
                // Mark video as loaded
                setVideoLoadedStates((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }}
              onCanPlay={() => {
                // Try to play if this is the active video
                if (index === activeVideo) {
                  const video = videoRefs.current[index];
                  if (video) {
                    video.play().catch((error) => {
                      console.warn("Autoplay prevented:", error);
                    });
                  }
                }
              }}
              onError={(e) => {
                console.error(`Error loading video ${index}:`, e);
              }}
              src={src}
              style={{
                width: `${100 / videos.length}%`,
                height: "100%",
                objectFit: "cover",
                display: "block",
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
