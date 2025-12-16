"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const videos = [
  "/assets/video/garden.mp4",
  "/assets/video/pool.mp4",
  "/assets/video/vollyball.mp4",
];

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const playVideo = async (video: HTMLVideoElement) => {
    try {
      await video.play();
    } catch {
      // iOS fallback — play after user interaction
      const unlock = () => {
        video.play().catch(() => {});
        document.removeEventListener("touchstart", unlock);
      };
      document.addEventListener("touchstart", unlock, { once: true });
    }
  };

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeVideo) {
        video.muted = true;
        video.playsInline = true;
        video.preload = "auto";
        video.currentTime = 0;

        if (video.readyState >= 3) {
          requestAnimationFrame(() => playVideo(video));
        } else {
          const onCanPlay = () => {
            requestAnimationFrame(() => playVideo(video));
            video.removeEventListener("canplay", onCanPlay);
          };
          video.addEventListener("canplay", onCanPlay);
          video.load();
        }
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeVideo]);

  const nextVideo = useCallback(
    () => setActiveVideo((prev) => (prev + 1) % videos.length),
    []
  );

  return (
    <section className="video-section">
            {/* ✅ YOUR CONTENT ADDED HERE */}
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

      <div className="video-wrapper">
        <div
          className="video-slider"
          style={{ transform: `translateX(-${activeVideo * 100}%)` }}
        >
          {videos.map((src, index) => (
            <video
              key={src}
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={src}
              muted
              playsInline
              preload={index === activeVideo ? "auto" : "metadata"}
              className="video-slide"
              onEnded={nextVideo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
