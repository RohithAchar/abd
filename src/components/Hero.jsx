import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const pinContainerRef = useRef(null);
  const heroImageRef = useRef(null);
  const leftTreesRef = useRef(null);
  const rightTreesRef = useRef(null);
  const mainTextRef = useRef(null);
  const kidsRef = useRef(null);
  const blackOverlayRef = useRef(null);
  const abhyudayWrapperRef = useRef(null);
  const abhyudayBgRef = useRef(null);
  const abhyudayImageRef = useRef(null);

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
      markers: true,
    });

    gsap.to(image, {
      scale: 1.15,
      ease: "custom,M0,0 C0.25,1 0.5,1 1,1",
      scrollTrigger: {
        trigger: container,
        start: 0,
        end: 600,
        scrub: true,
      },
    });

    gsap.to(leftTreesRef.current, {
      x: -200,
      scale: 1.25,
      ease: "custom,M0,0 C0.25,1 0.5,1 1,1",
      scrollTrigger: {
        trigger: container,
        start: 0,
        end: 600,
        scrub: true,
      },
    });
    gsap.to(rightTreesRef.current, {
      x: 200,
      scale: 1.25,
      ease: "custom,M0,0 C0.25,1 0.5,1 1,1",
      scrollTrigger: {
        trigger: container,
        start: 0,
        end: 600,
        scrub: true,
      },
    });

    gsap.to(mainTextRef.current, {
      y: -50,
      opacity: 0,
      ease: "custom,M0,0 C0.25,1 0.5,1 1,1",
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
      ease: "custom,M0,0 C0.25,1 0.5,1 1,1",
      scrollTrigger: {
        trigger: container,
        start: 0,
        end: 600,
        scrub: true,
      },
    });

    gsap.to(blackOverlayRef.current, {
      opacity: 1,
      ease: "custom,M0,0 C0.25,1 0.5,1 1,1",
      scrollTrigger: {
        trigger: container,
        start: 350,
        end: 900,
        scrub: true,
      },
    });

    gsap.set(abhyudayWrapperRef.current, {
      scale: 80,
      xPercent: -190,
      yPercent: -50,
    });
    gsap.set(abhyudayBgRef.current, {
      opacity: 0,
    });

    gsap.to(abhyudayWrapperRef.current, {
      scale: 1,
      xPercent: -50,
      ease: "custom,M0,0 C0.25,1 0.5,1 1,1",
      scrollTrigger: {
        trigger: container,
        start: 300,
        end: 900,
        scrub: true,
      },
    });
    gsap.to(abhyudayBgRef.current, {
      opacity: 1,
      ease: "custom,M0,0 C0.25,1 0.5,1 1,1",
      scrollTrigger: {
        trigger: container,
        start: 500,
        end: 900,
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
        <div
          ref={blackOverlayRef}
          className="w-screen h-screen absolute top-0 left-0 bg-black z-11 opacity-0"
        />
        {/* Background image */}
        <img
          ref={heroImageRef}
          src="/strange-bg-sans-trees.png"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
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
          className="absolute w-full top-[10%] text-white text-center"
          style={{
            zIndex: 4,
          }}
        >
          <p className="tracking-wider text-sm">WELCOME TO THE</p>

          <h1 className="font-bold text-4xl">
            UPSIDE <span>DOWN</span>
          </h1>

          <p className="tracking-wider text-sm">MCA, MSRIT</p>
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

        {/* Abhyuday wrapper */}
        <div
          ref={abhyudayWrapperRef}
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 inline-block"
          style={{
            zIndex: 12,
          }}
        >
          {/* White background */}
          <div
            ref={abhyudayBgRef}
            className="absolute inset-0 bg-white mx-auto my-auto"
            style={{
              zIndex: 1,
              borderRadius: "8px",
              width: "99%",
              height: "99%",
            }}
          />

          {/* SVG */}
          <img
            ref={abhyudayImageRef}
            src="/abhyuday_new.svg"
            alt="Abhyuday"
            className="relative z-[2] w-auto h-auto max-w-[90vw]"
          />
        </div>
      </div>

      <div style={{ height: "1px" }} />
    </div>
  );
};
