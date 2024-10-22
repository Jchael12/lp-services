import { ReactLenis } from "lenis/dist/lenis-react";
import Hero from "./components/Hero";
import Video from "/real_estate.mp4";

import logo from "/jhsereno-light.png";

const App = () => {
  return (
    <ReactLenis root>
      <div className="font-playfair">
        <div className="relative h-screen w-full">
          <div className="flex flex-col items-center justify-center h-full">
            <img src={logo} alt="logo" className="w-24 mb-6" />
            <h2 className="text-6xl font-bold text-white">Services</h2>
          </div>
          <video
            src={Video}
            autoPlay
            muted
            loop
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          />
          {/* dim overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 -z-10" />
        </div>
        <Hero />
      </div>
    </ReactLenis>
  );
};

export default App;
