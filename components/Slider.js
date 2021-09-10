import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MaskInfo from "./MaskInfo";
import SliderNav from "./SliderNav";

const slides = [
  {
    image: "/images/slide-1.jpg",
    icon: "/images/icon-1.png",
    nickname: "cameron",
    title: "Sometimes Typhoons Come",
    likes: "37",
    minBidETH: "10.23",
    minBidUSD: "720",
    endsIn: 73656009,
  },
  {
    image: "/images/slide-2.jpg",
    icon: "/images/icon-2.png",
    nickname: "chad",
    title: "Gas Grill Burners Getting To Know You",
    likes: "73",
    minBidETH: "1.4",
    minBidUSD: "1240",
    endsIn: 83235013,
  },
  {
    image: "/images/slide-3.jpg",
    icon: "/images/icon-3.png",
    nickname: "gala",
    title: "Emu Oil For Anti Wrinkle",
    likes: "1337",
    minBidETH: "100.23",
    minBidUSD: "7200",
    endsIn: 45549849,
  },
  {
    image: "/images/slide-4.jpg",
    icon: "/images/icon-4.png",
    nickname: "homer",
    title: "Ipsum Lorem Dolorem",
    likes: "12",
    minBidETH: "0.1",
    minBidUSD: "200",
    endsIn: 33781192,
  },
];

const transition = {
  duration: 0.5,
  ease: [0, 0.55, 0.45, 1],
};

const variants = {
  enter: {
    transition: {
      ...transition,
    },
    opacity: 0,
  },
  center: {
    transition: {
      ...transition,
    },
    opacity: 1,
  },
  exit: {
    transition: {
      ...transition,
    },
    opacity: 0,
  },
};

export const Slider = () => {
  const [page, setPage] = useState(0);
  const countRef = useRef(page);
  const interval = useRef(null);
  const slideIndex = wrap(0, slides.length, page);
  const SLIDE_DURATION = 6000;

  function wrap(min, max, v) {
    var rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  }

  function getInterval() {
    countRef.current += 1;
    setPage(countRef.current);
  }

  function updateSlide(i) {
    setPage(i);
    clearInterval(interval.current);
    countRef.current = wrap(0, slides.length, i);
    interval.current = setInterval(() => getInterval(), SLIDE_DURATION);
  }

  useEffect(() => {
    interval.current = setInterval(() => getInterval(), SLIDE_DURATION);
    return () => clearInterval(interval.current);
  }, []);

  return (
    <div
      style={{ minHeight: "calc(100vh - 0.6250rem)" }}
      className="inset-0 flex items-center max-w-sm px-4 m-auto md:max-w-none"
    >
      <SliderNav
        SLIDE_DURATION={SLIDE_DURATION}
        slides={slides}
        slideIndex={slideIndex}
        onClick={updateSlide}
        className="hidden md:flex"
      />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={page}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="w-full h-full mt-20 mb-6 md:items-center md:space-x-4 md:justify-evenly md:flex md:my-0"
        >
          <div className="relative w-full max-w-sm 2xl:max-w-md">
            <div className="relative block overflow-hidden w-full  pb-[143.1%]">
              <img
                src={slides[slideIndex].image}
                alt={slides[slideIndex].title}
                className="absolute inset-0 object-contain w-full h-auto rounded-2xl"
              />
            </div>
          </div>
          <SliderNav
            SLIDE_DURATION={SLIDE_DURATION}
            slides={slides}
            slideIndex={slideIndex}
            onClick={updateSlide}
            className="flex py-6 md:hidden"
          />
          <div>
            <MaskInfo data={slides[slideIndex]} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
