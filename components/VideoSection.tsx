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
    </section>
  );
};

export default VideoSection;
