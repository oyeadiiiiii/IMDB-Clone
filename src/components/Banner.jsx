import React from "react";

function Banner() {
  return (
    <div
      className="md:h-[80vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://w0.peakpx.com/wallpaper/203/851/HD-wallpaper-avengers-endgame-banner.jpg)`,
      }}
    >
      <div className="text-white text-xl text-center w-full bg-gray-900/60 p-5">
        Avengers Infinity War
      </div>
    </div>
  );
}

export default Banner;
