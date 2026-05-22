import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLoading } from "../contexts/LoadingContext";

export const LoadingScreen = () => {
  const { isLoading, hideLoading } = useLoading();
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if (!isLoading) return;

    // Auto-hide after 5 seconds (allows fade animation to complete)
    const timer = setTimeout(() => {
      hideLoading();
    }, 5000);

    return () => clearTimeout(timer);
  }, [isLoading, hideLoading]);

  useEffect(() => {
    if (!isLoading || !lineRef.current) return;

    // Animate the loading line
    const tl = gsap.timeline();

    tl.fromTo(
      lineRef.current,
      {
        scaleX: 0,
      },
      {
        scaleX: 1,
        duration: 3.5,
        ease: "power2.inOut",
      },
    );

    // Fade out the container
    tl.to(
      containerRef.current,
      {
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      },
      3.2,
    );

    return () => {
      tl.kill();
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      {/* Loading line */}
      <div
        ref={lineRef}
        className="w-24 h-1 bg-red-500"
        style={{
          transformOrigin: "left",
          boxShadow: "0 0 20px rgba(239, 68, 68, 0.8)",
        }}
      ></div>
    </div>
  );
};
