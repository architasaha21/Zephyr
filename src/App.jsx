import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import './App.css';

function App() {

  // Track reveal state
  const [showCastle, setShowCastle] = useState(false);
  const [showMountains, setShowMountains] = useState(false);
  const [showText, setShowText] = useState(false);

  // Animations
  const castleStyles = useSpring({
    opacity: showCastle ? 1 : 0,
    config: { duration: 800 }
  });

  const mountainStyles = useSpring({
    opacity: showMountains ? 1 : 0,
    config: { duration: 1000 }
  });

  const textStyles = useSpring({
    opacity: showText ? 1 : 0,
    transform: showText ? "translateY(0px)" : "translateY(30px)",
    config: { duration: 1000 }
  });

  // Timed reveals
  useEffect(() => {
    setTimeout(() => setShowCastle(true), 250);   // castle after 0.25s
    setTimeout(() => setShowMountains(true), 600); // mountains after ~0.6s
    setTimeout(() => setShowText(true), 1200);    // text after 1.2s
  }, []);
  
  return (
    <div className="App">
      <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
        {/* Background */}
        <ParallaxLayer offset={0} speed={0.25}>
          <div className="animation_layer parallax" id="background"></div>
        </ParallaxLayer>

         {/* Castle Layer (fade-in) */}
        <ParallaxLayer offset={0} speed={0.3}>
          <animated.div
            style={castleStyles}
            className="animation_layer parallax"
            id="castle"
          ></animated.div>
        </ParallaxLayer>

        {/* Mountains (fade-in after castle) */}
        <ParallaxLayer offset={0} speed={0.35}>
          <animated.div
            style={mountainStyles}
            className="animation_layer parallax"
            id="mountains"
          ></animated.div>
        </ParallaxLayer>

        {/* Text (fade + slide up) */}
        <ParallaxLayer offset={0} speed={0.4}>
          <animated.h1
            style={textStyles}
            className="absolute text-white text-6xl font-bold left-1/2 top-1/3 transform -translate-x-1/2"
          >
            ZEPHYR
          </animated.h1>
        </ParallaxLayer>

        {/* Other layers if needed */}
        <ParallaxLayer offset={1} speed={0.25}>
          <div className="p-10 text-white text-2xl">
            Scroll down for more 🌌
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;