// "use client";

// import { useEffect, useRef, useState } from "react";
// import Loading from "./Loading";

// const VideoSection: React.FC = () => {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleCanPlayThrough = () => {
//     setIsLoaded(true);
//   };

//   useEffect(() => {
//     const video = videoRef.current;
//     if (video) {
//       const playPromise = video.play();
//       if (playPromise !== undefined) {
//         playPromise
//           .then(() => setIsLoaded(true))
//           .catch((err) => {
//             console.warn("Autoplay blocked", err);
//             setIsLoaded(true); // Still remove loader even if autoplay fails
//           });
//       }
//     }
//   }, []);

//   return (
//     <section className="video-section">
//       <div className="video-container">
//         <video
//           ref={videoRef}
//           className="video"
//           src={
//             isMobile
//               ? "/assets/video/resort-mobile.webm" // 👈 Serve smaller video for mobile
//               : "/assets/video/resort.mp4"
//           }
//           autoPlay
//           loop
//           muted
//           playsInline
//           preload="none" // 👈 Prevent heavy initial load
//           onCanPlayThrough={handleCanPlayThrough}
//         />

//         {!isLoaded && (
//           <div className="video-overlay">
//             <Loading />
//           </div>
//         )}
//       </div>

//       <style jsx>{`
//         .video-section {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           position: relative;
//           width: 100%;
//           height: 500px;
//           overflow: hidden;
//         }
//         .video-container {
//           width: 100%;
//           height: 100%;
//           position: relative;
//         }
//         .video {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           background-color: transparent;
//         }
//         .video-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background: rgba(0, 0, 0, 0.5);
//           color: white;
//           font-size: 1.5rem;
//         }
//         @media (max-width: 768px) {
//           .video-section {
//             height: 400px;
//           }
//           .video-overlay {
//             font-size: 1rem;
//           }
//         }
//         @media (max-width: 480px) {
//           .video-section {
//             height: 300px;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default VideoSection;

"use client";

import { useEffect, useRef, useState } from "react";
import Loading from "./Loading";

const VideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCanPlayThrough = () => {
    setIsLoaded(true);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // More reliable mobile video handling
    const handleVideoPlay = async () => {
      try {
        await video.play();
        setIsLoaded(true);
      } catch (err) {
        console.warn("Autoplay blocked:", err);
        // Fallback: Show play button or just display first frame
        setIsLoaded(true);
      }
    };

    // Mobile-specific workaround
    if (isMobile) {
      // Add touch event to start playback on user interaction
      const container = video.parentElement;
      const handleFirstTouch = () => {
        handleVideoPlay();
        container?.removeEventListener("touchstart", handleFirstTouch);
      };
      container?.addEventListener("touchstart", handleFirstTouch, {
        once: true,
      });
    } else {
      handleVideoPlay();
    }

    return () => {
      video.pause();
      video.currentTime = 0;
    };
  }, [isMobile]);

  return (
    <section className="video-section">
      <div className="video-container">
        <video
          ref={videoRef}
          className="video"
          src={"/assets/video/resort-mobile-1.MOV"}
          autoPlay
          loop
          muted
          playsInline
          preload="auto" // Changed from "none" to "auto"
          onCanPlayThrough={handleCanPlayThrough}
        />

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
          background-color: transparent;
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
        @media (max-width: 768px) {
          .video-section {
            height: 400px;
          }
          .video-overlay {
            font-size: 1rem;
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
