"use client";

import { useEffect, useState } from "react";

const Loading = ({
  size = "medium",
  text = "Loading...",
}: {
  size?: "small" | "medium" | "large";
  text?: string;
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  const sizeClasses = {
    small: "loading-small",
    medium: "loading-medium",
    large: "loading-large",
  };

  return (
    <div className={`loading-container ${sizeClasses[size]}`}>
      <div className="loading-spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
      {text && <p className="loading-text">{text}</p>}

      <style jsx>{`
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .loading-small {
          min-height: 100px;
        }

        .loading-medium {
          min-height: 200px;
        }

        .loading-large {
          min-height: 300px;
        }

        .loading-spinner {
          position: relative;
          width: 60px;
          height: 60px;
        }

        .spinner-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 3px solid transparent;
          border-top: 3px solid var(--mainColor, #507650);
          border-radius: 50%;
          animation: spin 1.2s linear infinite;
        }

        .spinner-ring:nth-child(2) {
          width: 80%;
          height: 80%;
          top: 10%;
          left: 10%;
          border-top-color: rgba(80, 118, 80, 0.7);
          animation-delay: -0.4s;
        }

        .spinner-ring:nth-child(3) {
          width: 60%;
          height: 60%;
          top: 20%;
          left: 20%;
          border-top-color: rgba(80, 118, 80, 0.4);
          animation-delay: -0.8s;
        }

        .loading-text {
          margin-top: 15px;
          color: var(--mainColor, #507650);
          font-size: 14px;
          font-weight: 500;
          text-align: center;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .loading-small .loading-spinner {
          width: 40px;
          height: 40px;
        }

        .loading-small .loading-text {
          font-size: 12px;
        }

        .loading-large .loading-spinner {
          width: 80px;
          height: 80px;
        }

        .loading-large .loading-text {
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default Loading;
