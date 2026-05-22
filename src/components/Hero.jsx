import { useEffect, useRef, useState } from "react";
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
  const abhyudayTenRef = useRef(null);
  const dateRef = useRef(null);

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
      y: -50,
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

    gsap.to(blackOverlayRef.current, {
      opacity: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: 600,
        end: 900,
        scrub: true,
      },
    });

    gsap.set(abhyudayWrapperRef.current, {
      scale: isMobile ? 80 : 150,
      xPercent: isMobile ? -190 : -270,
      yPercent: -50,
    });
    gsap.set(abhyudayBgRef.current, {
      opacity: 0,
    });

    gsap.to(abhyudayWrapperRef.current, {
      scale: 1,
      xPercent: -50,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: 300,
        end: 1500,
        scrub: 1,
      },
    });
    gsap.to(abhyudayBgRef.current, {
      opacity: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: 600,
        end: 1400,
        scrub: 1,
      },
    });

    gsap.set(abhyudayTenRef.current, {
      xPercent: -50,
      y: isMobile ? -35 : -80, // move up
      left: "50%",
      top: "100%",
      opacity: 0,
      scale: 1.1,
    });
    gsap.set(dateRef.current, {
      xPercent: -50,
      opacity: 0,
      y: 140, // move up
    });

    gsap.to([abhyudayTenRef.current, dateRef.current], {
      opacity: 1,
      scale: 1,
      stagger: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: 1500,
        end: 2000,
        scrub: true,
      },
    });
    gsap.to(abhyudayTenRef.current, {
      color: "red", // move down to original position
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: 1500,
        end: 2000,
        scrub: true,
      },
    });

    gsap.to(abhyudayWrapperRef.current, {
      opacity: 0,
      y: 10,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start: 2300,
        end: 3000,
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
          className="w-screen h-screen absolute top-0 left-0 bg-black z-20 opacity-0"
        />
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

        {/* Abhyuday wrapper */}
        <div
          ref={abhyudayWrapperRef}
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 inline-block"
          style={{
            zIndex: 21,
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
            className="relative z-[5] w-auto h-auto max-w-[70vw]"
          />

          <h1
            ref={abhyudayTenRef}
            className="z-[6] absolute left-1/2 text-white text-[150px] leading-none font-bold"
          >
            10.0
          </h1>
          <p
            ref={dateRef}
            className="z-[6] absolute left-1/2 leading-none text-white"
          >
            COMING SOON
          </p>
        </div>
      </div>

      <div style={{ height: "1px" }} />
    </div>
  );
};
