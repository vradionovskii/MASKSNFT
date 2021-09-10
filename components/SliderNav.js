import { motion } from "framer-motion";

export default function SliderNav({
  className,
  SLIDE_DURATION,
  slides,
  slideIndex,
  onClick,
}) {
  return (
    <div
      className={`${className} relative z-50 space-x-6 md:space-x-0 md:space-y-4 md:flex-col justify-center items-center`}
    >
      {slides.map(({ icon, title }, i) =>
        i !== slideIndex ? (
          <button
            aria-label={title}
            onClick={() => onClick(i)}
            className="w-10 h-10"
            key={icon}
          >
            <img src={icon} alt={title} className="w-10 h-10 rounded-full" />
          </button>
        ) : (
          <div
            key={icon}
            className="relative flex items-center justify-center w-[4.5rem] h-[4.5rem]"
          >
            <button
              aria-label={title}
              onClick={() => onClick(i)}
              className="w-14 h-14"
            >
              <img src={icon} alt={title} className="rounded-full w-14 h-14" />
            </button>
            <svg
              viewBox="0 0 92 92"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full rotate-180"
            >
              <motion.path
                d="M1,46a45,45 0 1,0 90,0a45,45 0 1,0 -90,0"
                stroke="#000"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: SLIDE_DURATION / 1000,
                }}
                exit={false}
              />
            </svg>
          </div>
        )
      )}
    </div>
  );
}
