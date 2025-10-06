"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Loading from "./Loading";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const videos = [
  "/assets/video/garden.mp4",
  "/assets/video/pool.mp4",
  "/assets/video/vollyball.mp4",
];

const videoPosters = [
  "/assets/img/room/gardenPhoto.webp",
  "/assets/img/room/pool.webp",
  "/assets/img/room/vollyball.webp",
];
const VideoSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [loadedVideos, setLoadedVideos] = useState<boolean[]>(
    new Array(videos.length).fill(false)
  );
  const [videoProgress, setVideoProgress] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleVideoLoad = useCallback((index: number) => {
    setLoadedVideos((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  }, []);

  const nextVideo = useCallback(() => {
    setActiveVideo((prev) => (prev + 1) % videos.length);
  }, [videos.length]);

  const prevVideo = useCallback(() => {
    setActiveVideo((prev) => (prev - 1 + videos.length) % videos.length);
  }, [videos.length]);

  // Handle video end - auto advance to next video
  const handleVideoEnd = useCallback(() => {
    setVideoProgress(0);
    // Auto advance to next video after a short delay
    setTimeout(() => {
      nextVideo();
    }, 500);
  }, [nextVideo]);

  // Handle video time update for progress
  const handleTimeUpdate = useCallback(() => {
    const currentVideo = videoRefs.current[activeVideo];
    if (currentVideo) {
      const progress = (currentVideo.currentTime / currentVideo.duration) * 100;
      setVideoProgress(progress);
    }
  }, [activeVideo]);

  // Touch handlers for swipe navigation
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextVideo();
    } else if (isRightSwipe) {
      prevVideo();
    }
  }, [touchStart, touchEnd, nextVideo, prevVideo]);

  // Auto-play current video when it becomes active
  useEffect(() => {
    const currentVideo = videoRefs.current[activeVideo];
    if (currentVideo && loadedVideos[activeVideo]) {
      // Small delay to ensure smooth transition
      setTimeout(() => {
        currentVideo.play().catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      }, 200);
    }
  }, [activeVideo, loadedVideos]);

  // Pause all other videos when switching
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeVideo) {
        video.pause();
        video.currentTime = 0; // Reset to beginning
      }
    });
    setVideoProgress(0); // Reset progress when switching videos
  }, [activeVideo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevVideo();
      } else if (event.key === "ArrowRight") {
        nextVideo();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [prevVideo, nextVideo]);

  return (
    <section className="video-section position-relative overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center mb-5">
              <h2 className="display-5 display-md-4 display-lg-3 fw-bold text-dark mb-4">
                Experience Our{" "}
                <span className="text-primary-custom">Beautiful Campsite</span>
              </h2>
              <p className="lead text-muted mb-3">
                Take a virtual tour of our luxury camping facilities and natural
                surroundings
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="video-carousel position-relative">
        {/* Navigation Arrows */}
        {/* <button
          className="video-nav video-nav-prev"
          onClick={prevVideo}
          aria-label="Previous video"
        >
          <FaChevronLeft />
        </button>
        <button
          className="video-nav video-nav-next"
          onClick={nextVideo}
          aria-label="Next video"
        >
          <FaChevronRight />
        </button> */}
        {/* Video Container */}
        <div
          className="video-container-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="video-container">
            <video
              ref={(el) => {
                videoRefs.current[activeVideo] = el;
                if (el) {
                  el.playbackRate = 1.0; // Normal playback speed
                }
              }}
              className="video"
              src={videos[activeVideo]}
              muted
              playsInline
              preload="metadata"
              onCanPlayThrough={() => handleVideoLoad(activeVideo)}
              onEnded={handleVideoEnd}
              onTimeUpdate={handleTimeUpdate}
              autoPlay
            />

            {/* Loading Overlay */}
            {!loadedVideos[activeVideo] && (
              <div className="video-loading-overlay">
                <Loading />
              </div>
            )}

            {/* Video Info Overlay */}
            <div className="video-info-overlay">
              <div className="video-info">
                <h3 className="h4 text-white mb-2">
                  {activeVideo === 0 && "Garden View"}
                  {activeVideo === 1 && "Swimming Pool"}
                  {activeVideo === 2 && "Volleyball Court"}
                </h3>
                <p className="text-white-50 mb-0">
                  {activeVideo === 0 && "Relax in our beautiful garden area"}
                  {activeVideo === 1 && "Cool off in our refreshing pool"}
                  {activeVideo === 2 && "Enjoy sports and activities"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .video-section {
          padding: 0;
        }

        .video-carousel {
          width: 100%;
          margin: 0;
          border-radius: 0;
          overflow: hidden;
        }

        .video-container-wrapper {
          position: relative;
          width: 100%;
          height: 90vh;
          overflow: hidden;
        }

        .video-container {
          width: 100%;
          height: 100%;
          position: relative;
        }

        .video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: #507650;
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 20px;
          backdrop-filter: blur(10px);
        }

        .video-nav:hover {
          transform: translateY(-50%) scale(1.1);
        }

        .video-nav:active {
          transform: translateY(-50%) scale(1.05);
        }

        .video-nav-prev {
          left: 30px;
        }

        .video-nav-next {
          right: 30px;
        }

        .video-loading-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 5;
        }

        .video-info-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
          padding: 40px 30px 30px;
          z-index: 5;
        }

        .video-info h3 {
          font-weight: 600;
          margin-bottom: 8px;
        }

        .video-info p {
          font-size: 14px;
          opacity: 0.9;
        }

        .video-progress-container {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: rgba(0, 0, 0, 0.3);
          z-index: 10;
        }

        .video-progress-bar {
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
        }

        .video-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #fff, #ccc);
          transition: width 0.1s ease;
        }

        @media (max-width: 768px) {
          .video-section {
            padding: 0;
          }

          .video-container-wrapper {
            height: 50vh;
          }

          .video-nav {
            width: 50px;
            height: 50px;
            font-size: 18px;
          }

          .video-nav-prev {
            left: 20px;
          }

          .video-nav-next {
            right: 20px;
          }

          .video-info-overlay {
            padding: 30px 20px 20px;
          }
        }

        @media (max-width: 480px) {
          .video-container-wrapper {
            height: 40vh;
          }

          .video-info-overlay {
            padding: 20px 15px 15px;
          }

          .video-info h3 {
            font-size: 18px;
          }

          .video-info p {
            font-size: 13px;
          }
        }
      `}</style>
    </section>
  );
};

export default VideoSection;
