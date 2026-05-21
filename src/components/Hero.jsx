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
  const abhyudayRef = useRef(null);

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

    gsap.set(abhyudayRef.current, {
      xPercent: -150,
      yPercent: 150,
      scale: 55,
    });

    gsap.to(abhyudayRef.current, {
      scale: 1,
      xPercent: -50,
      ease: "custom,M0,0 C0.25,1 0.5,1 1,1",
      scrollTrigger: {
        trigger: container,
        start: 300,
        end: 600,
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="overflow-hidden" style={{ position: "relative" }}>
      <div
        ref={pinContainerRef}
        style={{
          height: "100vh",
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
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
          }}
        />

        <img
          ref={leftTreesRef}
          src="/trees-left.png"
          alt=""
          style={{
            height: "100%",
            width: "auto",
            maxWidth: "none",
          }}
          className="absolute top-0 ml-[-650px] sm:ml-[-700px] md:ml-[-650px] lg:ml-[-600px] xl:ml-[-500px] 2xl:ml-[-350px] 3xl:ml-[-350px]"
        />
        <img
          ref={rightTreesRef}
          src="/trees-right.png"
          alt=""
          style={{
            height: "100%",
            width: "auto",
            maxWidth: "none",
          }}
          className="absolute top-0 right-0 mr-[-650px] sm:mr-[-700px] md:mr-[-650px] lg:mr-[-600px] xl:mr-[-500px] 2xl:mr-[-350px] 3xl:mr-[-350px]"
        />

        <div
          ref={mainTextRef}
          className="absolute w-full top-[10%] text-white text-center"
        >
          <p className="tracking-wider text-sm">WELCOME TO THE</p>
          <h1 className="font-bold text-4xl">
            UPSIDE <span>DOWN</span>
          </h1>
          <p className="tracking-wider text-sm">MCA, MSRIT</p>
        </div>

        <img
          ref={abhyudayRef}
          src="/abhyuday.svg"
          alt="Abhyuday"
          className="absolute left-1/2 z-1"
        />

        <img
          ref={kidsRef}
          src="/strange-kids.png"
          alt="Kids"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 scale-120 min-w-[1200px]"
        />
      </div>

      <div style={{ height: "1px" }} />
    </div>
  );
};
