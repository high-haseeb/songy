import React, { useEffect } from "react";
import { useSpring, animated, useScroll } from "@react-spring/web";

const ScrollRotateAnimation = () => {
  const { scrollYprogess: scrollYProgress } = useScroll({
    onChange: () => console.log('scrolled'),
  });
  return (
    <>
      <animated.div
        className="w-screen h-screen bg-black "
        style={{ transform: `rotate(-${scrollYProgress * 45}deg)` }}
      ></animated.div>
      <animated.div
        style={{ opacity: scrollYProgress }}
        className="w-screen h-screen bg-blue-300"
      >
        Hello world
      </animated.div>
    </>
  );
};
export default ScrollRotateAnimation;
