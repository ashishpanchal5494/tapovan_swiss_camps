"use client";

import { useState, useRef, useEffect } from "react";

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement,
        config: {
          videoId: string;
          playerVars?: Record<string, string | number>;
          events?: {
            onReady?: (event: { target: YouTubePlayer }) => void;
            onStateChange?: (event: { data: number; target: YouTubePlayer }) => void;
          };
        }
      ) => YouTubePlayer;
      PlayerState: {
        ENDED: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface YouTubePlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
  loadVideoById: (videoId: string) => void;
  destroy: () => void;
}

const videos = ["TvdBCChG7Ow", "a4M5WPz7xKA", "gsQxyaxodMk"];

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [apiReady, setApiReady] = useState(false);
  const playerHostRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<YouTubePlayer | null>(null);

  useEffect(() => {
    if (window.YT?.Player) {
      setApiReady(true);
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.youtube.com/iframe_api"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.body.appendChild(script);
    }

    const previousReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousReady?.();
      setApiReady(true);
    };

    return () => {
      window.onYouTubeIframeAPIReady = previousReady;
    };
  }, []);

  useEffect(() => {
    if (!apiReady || !window.YT?.Player) return;

    const host = playerHostRef.current;
    if (!host || playerRef.current) return;

    playerRef.current = new window.YT!.Player(host, {
      videoId: videos[0],
      playerVars: {
        autoplay: 0,
        controls: 0,
        rel: 0,
        modestbranding: 1,
        playsinline: 1,
        fs: 0,
        iv_load_policy: 3,
        enablejsapi: 1,
        origin: window.location.origin,
      },
      events: {
        onReady: (event) => {
          event.target.mute();
          if (!prefersReducedMotion && isPageVisible) {
            event.target.playVideo();
          }
        },
        onStateChange: (event) => {
          if (event.data === window.YT?.PlayerState.ENDED) {
            setActiveVideo((prev) => (prev + 1) % videos.length);
          }
        },
      },
    });
  }, [apiReady]);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    player.loadVideoById(videos[activeVideo]);
    player.mute();
  }, [activeVideo]);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) return;

    if (prefersReducedMotion || !isPageVisible) {
      player.pauseVideo();
      return;
    }

    player.playVideo();
  }, [isPageVisible, prefersReducedMotion]);

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

  useEffect(() => {
    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, []);

  return (
    <section className="video-section">
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
        <div ref={playerHostRef} className="youtube-player-host" />
      </div>
    </section>
  );
};

export default VideoSection;
