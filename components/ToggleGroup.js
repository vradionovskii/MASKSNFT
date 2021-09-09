import { motion, AnimateSharedLayout } from "framer-motion";
import { useState } from "react";
const screens = [
  {
    title: "Masks",
    color: "#D2FD7E",
  },
  {
    title: "Video",
    color: "#A376E1",
  },
];

export default function ToggleGroup() {
  const [selected, setSelected] = useState(0);

  function onClick(i) {
    setSelected(i);
    let root = document.documentElement;
    if (i === 0) {
      root.style.setProperty("--main-bg-color", "#D2FD7E");
    } else {
      root.style.setProperty("--main-bg-color", "#A376E1");
    }
  }
  return (
    <div>
      <AnimateSharedLayout>
        <div className="inline-flex p-1 bg-black rounded-[2.5rem] transition-colors duration-200">
          {screens.map(({ title, color }, i) => (
            <motion.button
              key={i}
              className={`w-20 h-[2.25rem] text-center  ${
                i === selected ? "text-black" : "text-white"
              } relative`}
              onClick={() => onClick(i)}
            >
              <p className="relative z-10">{title}</p>
              {i === selected && (
                <motion.div
                  layoutId="toggle-group"
                  className="toggle-group"
                  style={{
                    backgroundColor: i === selected ? color : "transparent",
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </AnimateSharedLayout>
    </div>
  );
}
