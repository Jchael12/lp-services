import { ReactLenis } from "lenis/dist/lenis-react";
import Hero from "./components/Hero";
import Video from "/real_estate.mp4";

const App = () => {
  return (
    <ReactLenis root>
      <div className="font-playfair">
        <div className="relative h-screen w-full">
          <video
            src={Video}
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          />
        </div>
        <Hero />
      </div>
    </ReactLenis>
  );
};

export default App;
