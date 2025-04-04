"use client";

import { useEffect, useRef, useState } from "react";
import Loading from "./Loading";

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => console.warn("Autoplay blocked, showing play button"));
      }
      setIsLoaded(true);
    }
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="video-section">
      <div className="video-container">
        {isMobile ? (
          <video
            ref={videoRef}
            className="video"
            src="../assets/video/resort.webm"
            autoPlay
            loop
            muted
            playsInline
            onCanPlayThrough={() => setIsLoaded(true)}
          />
        ) : (
          <video
            ref={videoRef}
            className="video"
            src="../assets/video/resort.mp4"
            autoPlay
            loop
            muted
            playsInline
            onCanPlayThrough={() => setIsLoaded(true)}
          />
        )}

        {!isLoaded && (
          <div className="video-overlay">
            <Loading />
          </div>
        )}
      </div>
      <style jsx>{`
        .video-section {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          width: 100%;
          height: 500px;
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
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          font-size: 1.5rem;
        }
        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.7);
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 1.5rem;
          cursor: pointer;
          border-radius: 5px;
        }
        @media (max-width: 768px) {
          .video-section {
            height: 400px;
          }
          .video-overlay {
            font-size: 1rem;
          }
          .play-button {
            font-size: 1rem;
            padding: 8px 16px;
          }
        }
        @media (max-width: 480px) {
          .video-section {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default VideoSection;
