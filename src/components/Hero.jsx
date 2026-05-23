import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const pinContainerRef = useRef(null);
  const heroImageRef = useRef(null);
  const leftTreesRef = useRef(null);
  const rightTreesRef = useRef(null);
  const mainTextRef = useRef(null);
  const kidsRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = pinContainerRef.current;
    const image = heroImageRef.current;

    if (!container || !image) return;

    // Main pinned section
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "+=3000",
      pin: true,
      markers: false,
    });

    gsap.to(image, {
      scale: 1.15,
      y: -50,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: 0,
        end: 600,
        scrub: true,
      },
    });

    gsap.to(leftTreesRef.current, {
      x: -200,
      y: -50,
      scale: 1.25,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: 0,
        end: 600,
        scrub: true,
      },
    });
    gsap.to(rightTreesRef.current, {
      x: 200,
      y: -50,
      scale: 1.25,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: 0,
        end: 600,
        scrub: true,
      },
    });

    gsap.to(mainTextRef.current, {
      y: -150,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: 0,
        end: 600,
        scrub: true,
      },
    });

    gsap.to(kidsRef.current, {
      y: -150,
      scale: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: 0,
        end: 600,
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="overflow-hidden relative" style={{ position: "relative" }}>
      {/* Absolute background */}

      <div
        ref={pinContainerRef}
        className="relative z-10"
        style={{
          height: "100vh",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <img
          ref={heroImageRef}
          src="/strange-bg-sans-trees.jpg"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
            WebkitMaskImage:
              "linear-gradient(to bottom, black 55%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 55%, transparent 100%)",
          }}
        />

        {/* Left trees */}
        <img
          ref={leftTreesRef}
          src="/trees-left.png"
          alt=""
          style={{
            position: "absolute",
            top: 0,
            height: "100%",
            width: "auto",
            maxWidth: "none",
            zIndex: 3,
          }}
          className="ml-[-650px] sm:ml-[-700px] md:ml-[-650px] lg:ml-[-600px] xl:ml-[-500px] 2xl:ml-[-350px] 3xl:ml-[-350px]"
        />

        {/* Right trees */}
        <img
          ref={rightTreesRef}
          src="/trees-right.png"
          alt=""
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "100%",
            width: "auto",
            maxWidth: "none",
            zIndex: 3,
          }}
          className="mr-[-650px] sm:mr-[-700px] md:mr-[-650px] lg:mr-[-600px] xl:mr-[-500px] 2xl:mr-[-350px] 3xl:mr-[-350px]"
        />

        {/* Main text */}
        <div
          ref={mainTextRef}
          className="absolute top-[10%] w-full text-center text-white px-4"
          style={{
            zIndex: 4,
          }}
        >
          <p className="tracking-[0.25em] text-sm sm:text-sm md:text-base lg:text-lg">
            WELCOME TO THE
          </p>

          <h1
            className="
      font-bold
      leading-none
      mt-2
      text-[clamp(2.25rem,5vw,4rem)]
    "
          >
            UPSIDE <span>DOWN</span>
          </h1>

          <p className="tracking-[0.25em] mt-2 text-sm sm:text-sm md:text-base lg:text-lg">
            MCA, MSRIT
          </p>
        </div>

        {/* Kids */}
        <img
          ref={kidsRef}
          src="/strange-kids.png"
          alt="Kids"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 scale-120 min-w-[1200px]"
          style={{
            zIndex: 5,
          }}
        />
      </div>

      <div className="absolute"></div>

      <div style={{ height: "1px" }} />
    </div>
  );
};
