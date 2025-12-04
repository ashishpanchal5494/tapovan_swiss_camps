"use client";

import { useEffect, useState } from "react";

type LoadingSize = "small" | "medium" | "large";

interface LoadingProps {
  size?: LoadingSize;
  text?: string;
  /** Optional: how long the loader should show (ms). Defaults to 1000. */
  duration?: number;
  /** Optional: full-screen overlay loader */
  fullscreen?: boolean;
}

const Loading = ({
  size = "medium",
  text = "Loading...",
  duration = 1000,
  fullscreen = false,
}: LoadingProps) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  const sizeClasses: Record<LoadingSize, string> = {
    small: "loading-small",
    medium: "loading-medium",
    large: "loading-large",
  };

  return (
    <div
      className={`loading-root ${fullscreen ? "loading-fullscreen" : ""}`}
      aria-busy="true"
      aria-live="polite"
      role="status"
    >
      <div className={`loading-container ${sizeClasses[size]}`}>
        <div className="loading-spinner">
          <div className="spinner-ring outer"></div>
          <div className="spinner-ring middle"></div>
          <div className="spinner-ring inner"></div>
          <div className="spinner-center"></div>
        </div>
        {text && <p className="loading-text">{text}</p>}
      </div>
    </div>
  );
};

export default Loading;
