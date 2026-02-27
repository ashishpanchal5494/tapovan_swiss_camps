"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactPlayer so it's not downloaded on initial page load
const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
});

const videos = ["TvdBCChG7Ow", "a4M5WPz7xKA", "gsQxyaxodMk"];

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [inView, setInView] = useState(false);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Set up native intersection observer for lazy loading
  useEffect(() => {
    if (!hasMounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            setHasLoadedOnce(true);
          } else {
            // Optional: Pause video when scrolled completely out of view
            setInView(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasMounted]);

  const handleEnded = () => {
    setActiveVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <section ref={sectionRef} className="video-section">
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
        <div className="youtube-player-host w-100 h-100 position-relative rounded-4 overflow-hidden bg-dark">
          {hasLoadedOnce && (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videos[activeVideo]}`}
              width="100%"
              height="100%"
              className="react-player"
              playing={inView} // Autoplays only when in view
              muted={true}     // Required for autoplay policies
              controls={false} // Hidden controls for clean background feel
              playsinline={true}
              onEnded={handleEnded}
              style={{ position: "absolute", top: 0, left: 0 }}
              config={{
                youtube: {
                  playerVars: {
                    modestbranding: 1,
                    rel: 0,
                    iv_load_policy: 3, // Hide video annotations
                  },
                },
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
