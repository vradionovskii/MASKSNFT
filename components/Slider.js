import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MaskInfo from "./MaskInfo";

const slides = [
  {
    image: "/images/slide-1.jpg",
    icon: "/images/icon-1.png",
    nickname: "cameron",
    title: "Sometimes Typhoons Come",
    likes: "37",
    minBidETH: "10.23",
    minBidUSD: "720",
    endsIn: "1631350825000",
  },
  {
    image: "/images/slide-2.jpg",
    icon: "/images/icon-2.png",
    nickname: "cameron",
    title: "Sometimes Typhoons Come",
    likes: "37",
    minBidETH: "10.23",
    minBidUSD: "720",
    endsIn: "1631350825000",
  },
  {
    image: "/images/slide-3.jpg",
    icon: "/images/icon-3.png",
    nickname: "cameron",
    title: "Sometimes Typhoons Come",
    likes: "37",
    minBidETH: "10.23",
    minBidUSD: "720",
    endsIn: "1631350825000",
  },
  {
    image: "/images/slide-4.jpg",
    icon: "/images/icon-4.png",
    nickname: "cameron",
    title: "Sometimes Typhoons Come",
    likes: "37",
    minBidETH: "10.23",
    minBidUSD: "720",
    endsIn: "1631350825000",
  },
];

const variants = {
  enter: {
    transition: {
      duration: 0.2,
    },
    opacity: 0,
  },
  center: {
    transition: {
      duration: 0.2,
    },
    opacity: 1,
  },
  exit: {
    transition: {
      duration: 0.2,
    },
    opacity: 0,
  },
};

export const Slider = () => {
  const [page, setPage] = useState(0);
  const slideIndex = wrap(0, slides.length, page);

  const paginate = (i) => {
    setPage(i);
  };

  function wrap(min, max, v) {
    var rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  }

  function SliderNav({ className }) {
    return (
      <div
        className={`${className} relative z-50 space-x-6 md:space-x-0 md:space-y-4 md:flex-col`}
      >
        {slides.map(({ icon, title }, i) => (
          <button onClick={() => paginate(i)} className="w-10 h-10" key={icon}>
            <img src={icon} alt={title} className="w-10 h-10 rounded-full" />
          </button>
        ))}
      </div>
    );
  }

  return (
    <div
      style={{ minHeight: "calc(100vh - 0.6250rem)" }}
      className="inset-0 flex items-center max-w-sm px-4 m-auto md:max-w-none"
    >
      <SliderNav className="hidden md:flex" />
      <AnimatePresence exitBeforeEnter initial={false}>
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
          <SliderNav className="py-6 md:hidden" />
          <div className="">
            <MaskInfo data={slides[slideIndex]} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
