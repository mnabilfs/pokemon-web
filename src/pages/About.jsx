import React from "react";

const About = () => {
  return (
    <div className="mx-5 md:container md:mx-auto py-8 grid grid-cols-1 md:grid-cols-2 h-screen place-content-center">
      <div className="w-full sm:w-2/4 mx-auto">
        <img
          src="https://pngimg.com/uploads/pokemon/small/pokemon_PNG156.png"
          alt="Pokemon"
          className="w-full rounded-lg"
        />
      </div>
      <div>
        <div className="flex justify-center items-center gap-2 mb-4">
          <h1 className="text-3xl font-bold">About Pokepedia</h1>
          <img
            src="https://pngimg.com/d/pokemon_PNG140.png"
            alt="Pikachu"
            className="w-7"
          />
        </div>
      <p className="mb-4">
        Pokepedia adalah sumber informasi utama untuk semua hal terkait Pokemon.
        Kami menyediakan data lengkap tentang berbagai Pokemon, termasuk detail
        tentang jenis, kemampuan, dan sejarah mereka.
      </p>
      <p className="mb-4">
        Tim kami berkomitmen untuk memberikan informasi yang akurat dan terbaru
        kepada para penggemar Pokemon di seluruh dunia.
      </p>
      </div>
    </div>
  );
};

export default About;
