import React from "react";
import wave from "../assets/wave.svg"

const Home = () => {
  return (
    <>
    <div className="w-full">
      <div className="w-full relative">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7FTVsFXf5msnKmtFpd8nj3slbpliBdH7Qfu-I_wmzyj1zh0JkWbZa8fPdW8CAoXqWhDOl6GXNOKtVYLTo3MPU9bsNdRAGdiu-qYFPwYQFkfngbtztFyvOTVzN_sNXED_Rkw2oP4oO7A3L/w1440-h900-c/detective-pikachu-uhdpaper.com-4K-55.jpg"
          alt="Poke Pedia Wallpaper"
          className="w-full object-cover object-center h-[15rem] md:h-[50rem]"
        />
      </div>
      <div className="w-full relative">
        <img src={wave} alt="wave" className="absolute bottom-0 left-0 w-full max-w-full" />
      </div>
      <div className="h-auto">
        <h1 className="text-xl md:text-3xl text-center font-semibold flex items-center justify-center">
          Popular Pokemon
        </h1>

      </div>
    </div>
    </>
  );
};

export default Home;
