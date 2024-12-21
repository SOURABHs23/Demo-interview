import React, { useEffect } from "react";
import { useState } from "react";

const Data = [
  "https://wallhalla.com/thumbs/79",
  "https://wallpapers.com/images/hd/random-background-1920-x-1200-6ciewyud1u8r1xkl.jpg",
  "https://c4.wallpaperflare.com/wallpaper/1000/657/147/random-hd-wallpaper-preview.jpg",
];

const ImageSlider = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    console.log("hi");
    const timer = setInterval(left, 1000);

    return () => clearInterval(timer);
  }, []);

  const left = () => {
    console.log(i);
    // setI(i == 0 ? Data.length - 1 : i - 1);
    setI((prevI) => (prevI === 0 ? Data.length - 1 : prevI - 1));
  };
  const right = () => {
    setI((i + 1) % Data.length);
  };
  return (
    <div>
      <h1>Image silder</h1>
      <div className="flex justify-center">
        {Data.map((url, k) => (
          <img
            src={url}
            className={
              "w-[500px] h-[400px] object-contain " +
              (i === k ? "block" : "hidden")
            }
            alt="img"
          />
        ))}
      </div>

      <button
        className=" w-10 h-10  m-5 border-solid border-2"
        onClick={() => left()}
      >
        left
      </button>
      <button className=" w-10 h-10 m-4" onClick={() => right()}>
        right
      </button>
    </div>
  );
};

export default ImageSlider;
