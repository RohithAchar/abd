import { useEffect, useState } from "react";

import Footer from "./components/Footer";
import { Hero } from "./components/Hero";

const totalImages = 5;

const App = () => {
  const [numOfImagesLoaded, setNumOfImagesLoaded] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  const progress = (numOfImagesLoaded / totalImages) * 100;

  useEffect(() => {
    if (numOfImagesLoaded >= totalImages) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [numOfImagesLoaded]);

  const incrementImagesLoaded = () => {
    setNumOfImagesLoaded((prev) => prev + 1);
  };

  return (
    <>
      {/* APP ALWAYS MOUNTS */}

      <div
        className={`
          transition-opacity
          duration-700

          ${isLoading ? "opacity-0" : "opacity-100"}
        `}
      >
        <Hero incrementImagesLoaded={incrementImagesLoaded} />

        <Footer />
      </div>

      {/* LOADER OVERLAY */}

      {isLoading && (
        <div
          className="
            fixed
            inset-0

            z-[9999]

            flex
            flex-col
            items-center
            justify-center

            bg-black

            text-red-500
          "
        >
          {/* Loading text */}

          <p
            className="
              mb-6

              text-xs
              md:text-sm

              uppercase

              tracking-[0.45em]

              font-mono
            "
          >
            Loading...
          </p>

          {/* Progress bar */}

          <div
            className="
              relative

              w-[220px]
              md:w-[320px]

              h-[2px]

              bg-red-500/20

              overflow-hidden
            "
          >
            <div
              className="
                absolute
                left-0
                top-0

                h-full

                bg-red-500

                transition-all
                duration-300
                ease-out
              "
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          {/* Percentage */}

          <p
            className="
              mt-5

              text-[10px]
              md:text-xs

              tracking-[0.3em]

              font-mono

              text-white/40
            "
          >
            {Math.floor(progress)}%
          </p>
        </div>
      )}
    </>
  );
};

export default App;
