"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Loading from "./Loading";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const videos = [
  "/assets/video/resort-mobile-1.MOV",
  "/assets/video/IMG_9302.MOV",
  "/assets/video/IMG_9298.MOV",
];

const VideoSection: React.FC = () => {
  // const [isMobile, setIsMobile] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState<boolean[]>(
    new Array(videos.length).fill(false)
  );

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const handleVideoLoad = (index: number) => {
    const updated = [...loadedVideos];
    updated[index] = true;
    setLoadedVideos(updated);
  };

  return (
    <section className="video-section">
      {/* Custom Arrows */}

      {/* Custom Navigation Buttons */}
      <div className="custom-prev">
        <FaChevronLeft />
      </div>
      <div className="custom-next">
        <FaChevronRight />
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        slidesPerView={1}
        loop
      >
        {videos.map((videoSrc, index) => (
          <SwiperSlide key={index}>
            <div className="video-container">
              <video
                ref={(el) => {
                  if (el) {
                    el.playbackRate = 0.9; // Slow down to 0.5x speed
                  }
                }}
                key={videoSrc}
                className="video"
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onCanPlayThrough={() => handleVideoLoad(index)}
              />
              {!loadedVideos[index] && (
                <div className="video-overlay">
                  <Loading />
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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
        }

        .custom-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: rgba(0, 0, 0, 0.5);
          color: white;
          padding: 10px;
          cursor: pointer;
          font-size: 24px;
          border-radius: 50%;
          user-select: none;
        }

        .swiper-button-prev {
          left: 10px;
        }

        .swiper-button-next {
          right: 10px;
        }

        @media (max-width: 768px) {
          .video-section {
            height: 400px;
          }
          .custom-nav {
            font-size: 18px;
            padding: 8px;
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
