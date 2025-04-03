import React, { useEffect, useState } from "react";
import wave from "../assets/wave.svg";
import { MdElectricBolt } from "react-icons/md";
import { IoWater } from "react-icons/io5";
import { FaLeaf } from "react-icons/fa";
import FlipCard from "../components/FlipCard";
import ReactSelect from "react-select";
import axios, { Axios } from "axios";
import Card from "../components/Card";

const Home = () => {
  const [pokemonOption, setPokemonOption] = useState([]);
  const [pokemonData, setpokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async (search) => {
    try {
      let url = search
        ? `https://pokeapi.co/api/v2/pokemon/${search}`
        : "https://pokeapi.co/api/v2/pokemon?limit=6&offset=0";

      const res = await axios.get(url);

      if (!search) {
        const pokemonList = res.data.results;
        const pokemonDetails = await Promise.all(
          pokemonList.map(async (item) => {
            try {
              const pokeRes = await axios.get(item.url);
              // Debugging For Abilities Unknown
              console.log("Pokemon Response: ", pokeRes.data);
              return {
                ...pokeRes.data,
                name: item.name,
                image:
                  pokeRes.data.sprites.other["official-artwork"].front_default,
                url: item.url,
                abilities: pokeRes.data.abilities.map(
                  (ability) => ability.ability.name
                ),
                types: pokeRes.data.types.map((t) => t.type.name),
              };
            } catch (error) {
              console.log("Error: ", error);
            }
          })
        );
        setpokemonData(pokemonDetails.filter((pokemon) => pokemon !== null));
      } else {
        setpokemonData(
          res.data.name && [
            {
              ...res,
              data,
              name: res.data.name,
              image: res.data.sprites.other["official-artwork"].front_default,
              url: url,
              abilities: res.data.abilities.map(
                (ability) => ability.ability.name
              ),
              types: res.data.types.map((t) => t.type.name),
            },
          ]
        );
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const fetchOption = async () => {
    try {
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
      );
      setPokemonOption(
        res.data.results.map((item) => ({
          value: item.name,
          label: item.name,
        }))
      );
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  const handleSearchChange = (selectedOption) => {
    setSearchTerm(selectedOption ? selectedOption.value.toLowerCase() : "");
  };

  useEffect(() => {
    fetchData(searchTerm);
    fetchOption();
  }, [searchTerm]);

  return (
    <>
      <div className="w-full">
        {/* Hero Section */}
        <div className="w-full relative">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7FTVsFXf5msnKmtFpd8nj3slbpliBdH7Qfu-I_wmzyj1zh0JkWbZa8fPdW8CAoXqWhDOl6GXNOKtVYLTo3MPU9bsNdRAGdiu-qYFPwYQFkfngbtztFyvOTVzN_sNXED_Rkw2oP4oO7A3L/w1440-h900-c/detective-pikachu-uhdpaper.com-4K-55.jpg"
            alt="Poke Pedia Wallpaper"
            className="w-full object-cover object-center h-[15rem] md:h-[50rem]"
          />
        </div>

        {/* Wave */}
        <div className="w-full relative">
          <img
            src={wave}
            alt="wave"
            className="absolute bottom-0 left-0 w-full max-w-full"
          />
        </div>

        {/* FlipCard */}
        <div className="h-auto">
          <h1 className="text-xl md:text-3xl text-center font-semibold flex items-center justify-center">
            Popular Pokemon
          </h1>

          {/* Grid Pokemon Card */}
          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center align-middle mt-5 mb-14 w-full">
            {/* Card 1 */}
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

            {/* Card 2 */}
            <FlipCard
              img="https://pngimg.com/uploads/pokemon/small/pokemon_PNG5.png"
              backComponent={
                <div className="relative h-full font-bold">
                  <div
                    className="bg-purple-500 w-full h-full rounded-lg overflow-hidden absolute top-0"
                    style={{
                      clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 80%)",
                    }}
                  />

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                    <IoWater className="w-20 h-20 text-yellow-300" />
                    <h1 className="text-center text-yellow-200">Squirtle</h1>
                  </div>
                </div>
              }
            />

            {/* Card 3 */}
            <FlipCard
              img="https://pngimg.com/uploads/pokemon/small/pokemon_PNG52.png"
              backComponent={
                <div className="relative h-full font-bold">
                  <div
                    className="bg-purple-500 w-full h-full rounded-lg overflow-hidden absolute top-0"
                    style={{
                      clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 80%)",
                    }}
                  />

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                    <FaLeaf className="w-20 h-20 text-yellow-300" />
                    <h1 className="text-center text-yellow-200">Bulbasaur</h1>
                  </div>
                </div>
              }
            />
          </div>
        </div>

        <h1 className="text-xl md:text-4xl text-center font-semibold flex items-center justify-center z-10">
          Find Your Pokemon
        </h1>

        {/* Search Pokemon */}
        <div className="flex justify-center my-5 mb-[5rem]">
          <ReactSelect
            onChange={handleSearchChange}
            className="w-full md:w-1/2 p-2 rounded-md"
            placeholder="Search Pokemon"
            isClearable={true}
            name="pokeData"
            options={pokemonOption}
          />
        </div>

        {/* Card */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {pokemonData?.map((pokemon, index) => (
            <div key={index} className="w-full">
              <Card
                name={pokemon.name}
                image={pokemon.image}
                types={pokemon.types}
                abilities={pokemon.abilities}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
