import React, { useLayoutEffect } from "react";
import { animated, useSpring } from "@react-spring/web";
import { useEffect } from "react";

function TextContent() {
  const [animationProps, setAnimationProps] = useSpring(() => ({
    opacity: 0,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { duration: 500 },
  }));

  useLayoutEffect(() => {
    setAnimationProps({
      opacity: 1,
      transform: "translateY(0)",
      from: { opacity: 0, transform: "translateY(20px)" },
      config: { duration: 500 },
    });
  }, [setAnimationProps]);
  return (
    <>
      <animated.div
        className="absolute w-screen h-screen top-0 left-0 z-50 text-white text-9xl hidden lg:flex text-center   justify-center items-center"
        style={animationProps}
      >
        A Story of Love <br /> and Hate
      </animated.div>

      <animated.div
        className="absolute w-screen h-screen top-0 left-0 z-50 text-white text-7xl text-center flex  justify-center items-center lg:hidden"
        style={animationProps}
      >
        A Story of <br /> Love <br /> and Hate
      </animated.div>
    </>
  );
}

export default TextContent;
