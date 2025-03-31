import React from "react";
import wave from "../assets/wave.svg";
import { MdElectricBolt } from "react-icons/md";
import FlipCard from "../components/FlipCard";

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
          <img
            src={wave}
            alt="wave"
            className="absolute bottom-0 left-0 w-full max-w-full"
          />
        </div>

        <div className="h-auto">
          <h1 className="text-xl md:text-3xl text-center font-semibold flex items-center justify-center">
            Popular Pokemon
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center align-middle mt-5 mb-14 w-full">
            <FlipCard
              img="https://pngimg.com/uploads/pokemon/small/pokemon_PNG14.png"
              backComponent={
                <div className="relative h-full font-bold">
                  <div
                    className="bg-purple-500 w-full h-full rounded-lg overflow-hidden absolute top-0"
                    style={{
                      clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 80%)",
                    }}
                  />

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                    <MdElectricBolt className="w-20 h-20 text-yellow-300" />
                    <h1 className="text-center text-yellow-200">Pikachu</h1>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
