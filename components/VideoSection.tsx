"use client";

import { useState, useCallback, useRef, useEffect } from "react";

const videos = [
  "/assets/video/garden.mp4",
  "/assets/video/pool.mp4",
  "/assets/video/vollyball.mp4",
];

const VideoSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const nextVideo = useCallback(() => {
    setActiveVideo((prev) => (prev + 1) % videos.length);
  }, []);

  const prevVideo = useCallback(() => {
    setActiveVideo((prev) => (prev - 1 + videos.length) % videos.length);
  }, []);

  // Only preload the first video for better performance
  useEffect(() => {
    const firstVideo = document.createElement("video");
    firstVideo.src = videos[0];
    firstVideo.preload = "metadata"; // Only metadata, not full video
    firstVideo.load();
  }, []);

  // Autoplay active video when ref becomes available
  useEffect(() => {
    const tryPlay = () => {
      const v = videoRefs.current[activeVideo];
      if (v) {
        try {
          v.currentTime = 0;
          void v.play();
        } catch {}
      }
    };
    // Defer to end of tick so refs have time to set
    const t = window.setTimeout(tryPlay, 0);
    return () => window.clearTimeout(t);
  }, [activeVideo]);

  // Pause all non-active videos (guard nulls)
  useEffect(() => {
    videoRefs.current.forEach((v, idx) => {
      if (v && idx !== activeVideo) {
        try {
          v.pause();
          v.currentTime = 0;
        } catch {}
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
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold text-dark mb-4">
          Experience Our{" "}
          <span className="text-primary-custom">Beautiful Campsite</span>
        </h2>
        <p className="lead text-muted mb-3">
          Take a virtual tour of our luxury camping facilities and natural
          surroundings
        </p>
      </div>

      <div className="video-slider-wrapper">
        <div
          className="video-slider"
          style={{
            transform: `translateX(-${activeVideo * 100}%)`,
          }}
        >
          {videos.map((src, index) => (
            <video
              key={index}
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              className="video-slide"
              muted
              playsInline
              preload={index === 0 ? "metadata" : "none"}
              onEnded={nextVideo}
              onLoadedMetadata={(e) => {
                if (index === activeVideo) {
                  try {
                    void (e.currentTarget as HTMLVideoElement).play();
                  } catch {}
                }
              }}
              src={src}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .video-section {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .video-slider-wrapper {
          width: 100%;
          height: 90vh;

          position: relative;
          overflow: hidden;
        }

        .video-slider {
          display: flex;
          width: 100%;
          transition: transform 0.8s ease-in-out;
        }

        .video-slide {
          width: 100%;
          height: 90vh;

          object-fit: cover;
          flex-shrink: 0;
        }

        .video-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.4);
          color: white;
          border: none;
          font-size: 2rem;
          padding: 10px 15px;
          cursor: pointer;
          border-radius: 50%;
          z-index: 10;
          transition: 0.3s;
        }

        .video-btn:hover {
          background: rgba(0, 0, 0, 0.6);
        }

        .video-btn.prev {
          left: 20px;
        }

        .video-btn.next {
          right: 20px;
        }

        @media (max-width: 768px) {
          .video-slider-wrapper {
            height: 50vh;
          }
          .video-slide {
            height: 50vh;
          }
        }

        @media (max-width: 480px) {
          .video-slider-wrapper {
            height: 40vh;
          }
          .video-slide {
            height: 40vh;
          }
        }
      `}</style>
    </section>
  );
};

export default VideoSection;
