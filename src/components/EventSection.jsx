import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    id: "01",
    title: "Hackathon",
    subtitle: "CODE. BREAK. BUILD.",
    desc: "48 hours to build the impossible.",
    image: "/events/hackathon.jpg",
  },
  {
    id: "02",
    title: "Tech Events",
    subtitle: "LOGIC. STRATEGY. SPEED.",
    desc: "Test your skills. Solve. Outwit.",
    image: "/events/tech.jpg",
  },
  {
    id: "03",
    title: "Workshops",
    subtitle: "LEARN. EXPLORE. EVOLVE.",
    desc: "Hands-on sessions by experts.",
    image: "/events/workshop.jpg",
  },
  {
    id: "04",
    title: "Open Mic",
    subtitle: "YOUR VOICE. THEIR EARS.",
    desc: "Speak your truth.",
    image: "/events/mic.jpg",
  },
  {
    id: "05",
    title: "Fun Events",
    subtitle: "GAMES. CHAOS. MEMORIES.",
    desc: "Dive into the upside down.",
    image: "/events/fun.jpg",
  },
  {
    id: "06",
    title: "Mystery Event",
    subtitle: "NOT EVERYTHING IS MEANT TO BE REVEALED.",
    desc: "Something is coming.",
    image: "/events/mystery.jpg",
  },
];

const EventsSection = () => {
  useEffect(() => {
    gsap.set(".event-card", {
      opacity: 0,
      y: 120,
      clipPath: "inset(0 0 100% 0)",
    });

    gsap.to(".event-card", {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0 0% 0)",

      stagger: 0.12,

      duration: 1.2,

      ease: "power4.out",

      scrollTrigger: {
        trigger: ".events-wrapper",
        start: "top 75%",
      },
    });

    gsap.fromTo(
      ".event-image",
      {
        scale: 1.15,
      },
      {
        scale: 1,

        stagger: 0.08,

        duration: 2,

        ease: "power3.out",

        scrollTrigger: {
          trigger: ".events-wrapper",
          start: "top 80%",
        },
      },
    );

    gsap.set(".heading-line", {
      yPercent: 120,
      clipPath: "inset(0 0 100% 0)",
      opacity: 1,
    });

    gsap.to(".heading-line", {
      yPercent: 0,
      clipPath: "inset(0 0 0% 0)",

      stagger: 0.08,

      duration: 2,

      ease: "power4.out",

      scrollTrigger: {
        trigger: ".events-wrapper",
        start: "top 80%",
      },
    });

    gsap.fromTo(
      ".heading-sub",
      {
        opacity: 0,
        letterSpacing: "0.8em",
      },
      {
        opacity: 1,
        letterSpacing: "0.5em",

        duration: 1.2,

        ease: "power3.out",

        scrollTrigger: {
          trigger: ".events-wrapper",
          start: "top 82%",
        },
      },
    );
  }, []);

  return (
    <section
      className="
        events-wrapper

        relative

        overflow-hidden

        bg-black

        px-4
        md:px-8
        xl:px-16

        py-20
        md:py-28
      "
    >
      {/* Background glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-0
            left-1/2

            h-[500px]
            w-[500px]

            -translate-x-1/2

            rounded-full

            bg-red-600/10

            blur-[180px]
          "
        />
      </div>

      {/* Header */}

      <div className="events-heading relative z-[2] text-center mb-14 md:mb-20">
        <div className="overflow-hidden">
          <p
            className="
        heading-sub

        text-red-500

        uppercase

        tracking-[0.5em]

        text-[10px]
        md:text-xs

        font-mono

        mb-5
      "
          >
            EVENTS
          </p>
        </div>

        <div className="overflow-hidden">
          <h2
            className="
        heading-line

        text-white

        text-[clamp(3rem,8vw,8rem)]

        leading-[0.85]

        uppercase

        tracking-[-0.06em]

        font-black
      "
            style={{
              fontFamily:
                'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
            }}
          >
            WHERE TECHNOLOGY
          </h2>
        </div>

        <div className="overflow-hidden">
          <h2
            className="
        heading-line

        text-white

        text-[clamp(3rem,8vw,8rem)]

        leading-[0.85]

        uppercase

        tracking-[-0.06em]

        font-black
      "
            style={{
              fontFamily:
                'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
            }}
          >
            MEETS CHAOS
          </h2>
        </div>

        <div className="mx-auto mt-8 h-px w-32 bg-red-500/30" />
      </div>

      {/* Grid */}

      <div
        className="
          relative
          z-[2]

          grid

          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3

          gap-5
          md:gap-7
        "
      >
        {events.map((event) => (
          <div
            key={event.id}
            className="
              event-card

              group

              relative

              overflow-hidden

              border
              border-red-500/20

              bg-black/60

              backdrop-blur-sm
            "
          >
            {/* Image */}

            <div className="relative h-[240px] overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="
                  event-image

                  absolute
                  inset-0

                  h-full
                  w-full

                  object-cover

                  brightness-[0.45]
                  contrast-[1.1]

                  transition-transform
                  duration-700

                  group-hover:scale-105
                "
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Number */}

              <div
                className="
                  absolute
                  top-4
                  left-4

                  border
                  border-red-500/30

                  bg-black/60

                  px-3
                  py-2
                "
              >
                <p
                  className="
                    text-red-500

                    text-2xl
                    md:text-3xl

                    leading-none

                    font-black
                  "
                  style={{
                    fontFamily:
                      'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
                  }}
                >
                  {event.id}
                </p>
              </div>

              {/* Corner line */}

              <div className="absolute top-0 right-0 h-px w-24 bg-red-500/30" />
            </div>

            {/* Content */}

            <div className="p-5 md:p-6">
              <p
                className="
                  text-red-500

                  uppercase

                  tracking-[0.25em]

                  text-[10px]
                  md:text-xs

                  font-mono

                  mb-4
                "
              >
                {event.subtitle}
              </p>

              <h3
                className="
                  text-white

                  text-4xl
                  md:text-5xl

                  leading-[0.9]

                  uppercase

                  tracking-[-0.04em]

                  font-black
                "
                style={{
                  fontFamily:
                    'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
                }}
              >
                {event.title}
              </h3>

              <p
                className="
                  mt-5

                  text-sm
                  md:text-base

                  leading-relaxed

                  text-white/60

                  max-w-[26ch]
                "
              >
                {event.desc}
              </p>

              {/* Footer */}

              <div className="mt-8 flex items-center justify-between">
                <button
                  className="
                    border
                    border-red-500/30

                    px-4
                    py-2

                    text-[10px]
                    md:text-xs

                    uppercase

                    tracking-[0.25em]

                    text-red-500

                    font-mono

                    transition-all
                    duration-300

                    group-hover:bg-red-500
                    group-hover:text-black
                  "
                >
                  Enter Event
                </button>

                <div
                  className="
                    text-red-500

                    text-3xl
                    md:text-4xl

                    leading-none

                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                >
                  ›
                </div>
              </div>
            </div>

            {/* Border overlay */}

            <div className="pointer-events-none absolute inset-0 border border-red-500/10" />

            {/* Glow */}

            <div
              className="
                pointer-events-none

                absolute
                inset-0

                opacity-0

                transition-opacity
                duration-500

                group-hover:opacity-100
              "
            >
              <div className="absolute inset-0 bg-red-500/5" />
            </div>
          </div>
        ))}
      </div>

      {/* Footer line */}

      <div className="relative z-[2] mt-16 md:mt-24 text-center">
        <div className="mx-auto mb-5 h-px w-40 bg-red-500/20" />

        <p
          className="
            text-red-500/70

            uppercase

            tracking-[0.35em]

            text-[10px]
            md:text-xs

            font-mono
          "
        >
          Stay Tuned. Stay Curious.
        </p>
      </div>
    </section>
  );
};

export default EventsSection;
