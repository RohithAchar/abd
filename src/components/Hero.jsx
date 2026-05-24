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
  const revealWrapperRef = useRef(null);
  const versionRef = useRef(null);
  const dateRef = useRef(null);
  const collegeRef = useRef(null);
  const abWrapperRef = useRef(null);
  const creepyBgRef = useRef(null);

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
      end: isMobile ? "+=5000" : "+=5000",
      pin: true,
      markers: false,
    });

    gsap.to(image, {
      scale: 1.15,
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: 0,
        end: 1000,
        scrub: true,
      },
    });

    gsap.to(leftTreesRef.current, {
      x: -200,
      y: -50,
      scale: 1.25,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: 0,
        end: 1000,
        scrub: true,
      },
    });
    gsap.to(rightTreesRef.current, {
      x: 200,
      y: -50,
      scale: 1.25,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: 0,
        end: 1000,
        scrub: true,
      },
    });

    gsap.to(mainTextRef.current, {
      y: -150,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: 0,
        end: 1000,
        scrub: true,
      },
    });

    gsap.to(kidsRef.current, {
      y: -150,
      scale: 2,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: 0,
        end: 1000,
        scrub: true,
      },
    });

    gsap.to(revealWrapperRef.current, {
      y: "-100vh",
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: 500,
        end: 2700,
        scrub: true,
      },
    });

    gsap.set(".metadata-inner", {
      yPercent: 120,
      clipPath: "inset(0 0 100% 0)",
      opacity: 1,
    });

    gsap.to(".metadata-inner", {
      yPercent: 0,
      clipPath: "inset(0 0 0% 0)",

      stagger: {
        each: 0.08,
      },

      ease: "power4.out",

      scrollTrigger: {
        trigger: container,
        start: 1900,
        end: 2800,
        scrub: true,
      },
    });

    const letterOffsets = [
      -10, // A
      25, // B
      -18, // H
      12, // Y
      -30, // U
      18, // D
      -15, // A
      28, // Y
    ];

    gsap.set(".ab-letter", {
      yPercent: (i) => letterOffsets[i],
      opacity: 1,
    });

    gsap.to(".ab-letter", {
      yPercent: 0,
      xPercent: 0,
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: 1700,
        end: 2500,
        scrub: true,
      },
    });

    gsap.set(creepyBgRef.current, {
      clipPath: "inset(100% 0 0 0)",
      yPercent: 8,
      scale: 1,
    });

    gsap.to(creepyBgRef.current, {
      clipPath: "inset(0% 0 0 0)",
      yPercent: 0,
      scale: 1,

      ease: "none",

      scrollTrigger: {
        trigger: container,
        start: 1800,
        end: 3200,
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div
        ref={pinContainerRef}
        className="relative"
        style={{
          height: "100dvh",
          width: "100%",
        }}
      >
        <div
          ref={revealWrapperRef}
          className="absolute inset-0 overflow-hidden"
          style={{
            zIndex: 1,
          }}
        >
          {/* Background image */}
          <img
            ref={heroImageRef}
            src="/hero-bg.png"
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
              zIndex: 2,
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
              zIndex: 2,
            }}
            className="mr-[-650px] sm:mr-[-700px] md:mr-[-650px] lg:mr-[-600px] xl:mr-[-500px] 2xl:mr-[-350px] 3xl:mr-[-350px]"
          />

          {/* Main text */}
          <div
            ref={mainTextRef}
            className="absolute top-[10%] w-full text-center text-white px-4"
            style={{
              zIndex: 3,
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
            className="absolute bottom-0 left-1/2 -translate-x-1/2 scale-120 min-w-[1200px] no-repeat"
            style={{
              zIndex: 4,
            }}
          />
        </div>
        <div
          className="absolute inset-0 overflow-hidden bg-black"
          style={{
            zIndex: 0,
          }}
        >
          {/* Background image */}
          <img
            ref={creepyBgRef}
            src="/creepy-background.jpg"
            alt=""
            className="
      creepy-bg
      absolute
      inset-0
      w-full
      h-full
      object-cover
      brightness-[1.2]
      contrast-[1]
    "
          />

          {/* Dark overlay */}
          {/* <div className="absolute inset-0 bg-black/25 z-[1]" /> */}

          {/* Red atmospheric glow */}
          <div className="absolute inset-0 z-[2] pointer-events-none">
            <div
              className="
        absolute
        top-1/2
        left-1/2

        w-[320px]
        md:w-[900px]

        h-[220px]
        md:h-[500px]

        -translate-x-1/2
        -translate-y-1/2

        bg-red-600/15

        blur-[70px]
        md:blur-[140px]
      "
            />
          </div>

          {/* Scanlines */}
          <div className="scanlines absolute inset-0 z-[3] pointer-events-none opacity-60 md:opacity-100" />

          {/* Corner HUD */}
          <div
            className="
      absolute

      top-4
      md:top-10

      left-4
      md:left-10

      z-[4]

      text-red-500
      font-mono
      uppercase

      tracking-[0.12em]
      md:tracking-[0.2em]

      text-[8px]
      sm:text-[9px]
      md:text-sm

      max-w-[140px]
      md:max-w-none
    "
          >
            <div className="flex items-center gap-2 mb-2 md:mb-3">
              <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500 animate-pulse" />
              REC
            </div>

            <p>Transmission 07</p>

            <p className="mt-1">Theta Network [LIVE]</p>

            <p className="mt-1 text-red-300 break-words">
              Feed: ABHYUDAY_SIGNAL_1986
            </p>
          </div>

          {/* Right HUD */}
          <div
            className="
      absolute

      top-4
      md:top-10

      right-4
      md:right-10

      z-[4]

      text-right
      font-mono
      uppercase

      tracking-[0.12em]
      md:tracking-[0.2em]

      text-[8px]
      sm:text-[9px]
      md:text-sm

      max-w-[120px]
      md:max-w-none
    "
          >
            <p>UPSIDE DOWN FREQUENCY</p>

            <p className="text-lg md:text-2xl mt-1 md:mt-2 text-red-500">
              88.6 MHz
            </p>

            <p className="mt-1 md:mt-2">CHANNEL v1.0</p>
          </div>

          {/* Main content */}
          <div
            ref={abWrapperRef}
            className="
      absolute
      top-1/2
      left-1/2
      -translate-x-1/2
      -translate-y-1/2

      z-[5]

      w-full

      px-4
      md:px-6

      text-center
      text-white
    "
          >
            {/* Subtitle */}
            <p
              className="
        text-red-500
        uppercase

        tracking-[0.28em]
        md:tracking-[0.5em]

        text-[10px]
        md:text-sm

        mb-4
        md:mb-6

        font-mono
      "
            >
              ENTER THE UPSIDE DOWN
            </p>

            {/* Main title */}
            <h1
              className="
        flex
        justify-center
        flex-nowrap
        whitespace-nowrap

        text-[clamp(3.8rem,18vw,16rem)]

        font-black
        uppercase
        leading-[0.82]

        tracking-[-0.06em]

        text-white
        select-none
      "
              style={{
                fontFamily:
                  'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
              }}
            >
              {"ABHYUDAY".split("").map((letter, index) => (
                <span key={index} className="ab-letter inline-block">
                  {letter}
                </span>
              ))}
            </h1>

            {/* Signal */}
            <div className="mt-4 md:mt-6 flex justify-center">
              <div className="w-[88vw] md:w-[70vw] max-w-[900px] h-[1px] bg-red-500 relative overflow-hidden">
                <div className="absolute inset-0 waveform" />
              </div>
            </div>

            {/* Signal text */}
            <p
              className="
        mt-4
        md:mt-5

        text-red-500
        uppercase

        tracking-[0.28em]
        md:tracking-[0.4em]

        text-[10px]
        md:text-sm

        font-mono
      "
            >
              SIGNAL DETECTED
            </p>

            {/* Metadata */}
            <div
              className="
    mt-10
    md:mt-14

    w-full
    max-w-6xl
    mx-auto
  "
            >
              {/* MOBILE */}

              <div className="flex flex-col gap-3 md:hidden">
                {[
                  {
                    label: "LOCATION",
                    value: "MSRIT CAMPUS",
                  },
                  {
                    label: "TRANSMISSION",
                    value: "ACTIVE",
                  },
                  {
                    label: "STATUS",
                    value: "OPEN",
                  },
                  {
                    label: "DATE",
                    value: "OCT 10 1986",
                  },
                  {
                    label: "CHANNEL",
                    value: "v1.0",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
          metadata-item
          overflow-hidden

          border
          border-red-500/10

          bg-black/20

          px-4
          py-3
        "
                  >
                    <div
                      className="
            metadata-inner

            flex
            items-center
            justify-between

            gap-4
          "
                    >
                      <p
                        className="
              text-[9px]
              uppercase

              tracking-[0.22em]

              text-red-500/60

              font-mono

              shrink-0
            "
                      >
                        {item.label}
                      </p>

                      <p
                        className="
              text-[11px]

              tracking-[0.08em]

              text-white

              font-mono

              text-right
            "
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* DESKTOP */}

              <div
                className="
      hidden
      md:grid

      grid-cols-5

      gap-6

      text-left
      font-mono
    "
              >
                {[
                  {
                    label: "Location",
                    value: "MSRIT CAMPUS",
                  },
                  {
                    label: "Transmission",
                    value: "ACTIVE",
                  },
                  {
                    label: "Status",
                    value: "OPEN",
                  },
                  {
                    label: "Date",
                    value: "OCT 10 1986",
                  },
                  {
                    label: "Channel",
                    value: "v1.0",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
          metadata-item
          overflow-hidden
        "
                  >
                    <div className="metadata-inner">
                      <p
                        className="
              text-red-500/60
              text-[10px]
              uppercase
              tracking-[0.3em]
            "
                      >
                        {item.label}
                      </p>

                      <p
                        className="
              text-white
              text-lg
              tracking-[0.15em]
              mt-2
            "
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              className="
        mt-10
        md:mt-14

        border
        border-red-500

        px-8
        md:px-12

        py-3
        md:py-4

        text-red-500

        uppercase

        tracking-[0.24em]
        md:tracking-[0.4em]

        font-mono

        text-[10px]
        md:text-sm

        hover:bg-red-500
        hover:text-black

        transition-all
        duration-300
      "
            >
              ENTER EXPERIENCE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
