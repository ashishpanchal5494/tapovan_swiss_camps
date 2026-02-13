"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const videos = [
  "/assets/video/garden.mp4",
  "/assets/video/pool.mp4",
  "/assets/video/vollyball.mp4",
];

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const isVideoBuffered = useRef<boolean[]>(videos.map(() => false));

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

      if (prefersReducedMotion || !isPageVisible) {
        video.pause();
        return;
      }

      if (index === activeVideo) {
        video.muted = true;
        video.playsInline = true;
        video.preload = "auto";

        if (video.readyState >= 3) {
          requestAnimationFrame(() => playVideo(video));
        } else {
          const onCanPlay = () => {
            requestAnimationFrame(() => playVideo(video));
            video.removeEventListener("canplay", onCanPlay);
          };
          video.addEventListener("canplay", onCanPlay);
          if (!isVideoBuffered.current[index]) {
            video.load();
          }
        }
      } else {
        video.pause();
      }
    });
  }, [activeVideo, prefersReducedMotion, isPageVisible]);

  useEffect(() => {
    // Warm up the next video so transition is smooth on slower servers.
    const nextIndex = (activeVideo + 1) % videos.length;
    const nextVideo = videoRefs.current[nextIndex];
    if (!nextVideo || prefersReducedMotion || !isPageVisible) return;

    nextVideo.preload = "auto";
    if (!isVideoBuffered.current[nextIndex]) {
      nextVideo.load();
    }
  }, [activeVideo, prefersReducedMotion, isPageVisible]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const updateVisibility = () => setIsPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () =>
      document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

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
              preload={
                isPageVisible &&
                (index === activeVideo ||
                  index === (activeVideo + 1) % videos.length)
                  ? "auto"
                  : "metadata"
              }
              className="video-slide"
              onLoadedData={() => {
                isVideoBuffered.current[index] = true;
              }}
              onEnded={index === activeVideo ? nextVideo : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
