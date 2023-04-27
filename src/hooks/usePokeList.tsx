import { IPokemon } from "@/types/pokeInterface";
import { useEffect, useState } from "react";

const initialPokemon = "https://pokeapi.co/api/v2/pokemon/1/";
const initialUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg";

export const usePokeList = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [imagen, setImagen] = useState(initialUrl);
  const [animation, setAnimation] = useState(
    "h-80 w-80 rounded-xl p-5 bg-green-600 cursor-pointer"
  );
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [pagina, setPagina] = useState(1);

  const url = `https://pokeapi.co/api/v2/pokemon?limit=15&offset=${offset}`;

  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.results);
  }

  async function getImage(url: RequestInfo | URL) {
    setAnimation(
      "animate-ping absolute inline-flex h-32 w-32 rounded-full bg-green-600 opacity-75"
    );
    const response = await fetch(url);
    const data = await response.json();
    setImagen(data.sprites.other.dream_world.front_default);
    setPokemon(data);

    setTimeout(() => {
      setAnimation("h-80 w-80 rounded-xl p-5 bg-green-600 cursor-pointer");
    }, 1000);
  }
  const incrementList = () => {
    if (offset >= 1280 || pagina === 86) return;
    setOffset(offset + 15);
    setPagina(pagina + 1);
  };

  const decrement = () => {
    if (offset === 0) return;
    setOffset(offset - 15);
    setPagina(pagina - 1);
  };

  useEffect(() => {
    getData();
  }, [offset]);

  useEffect(() => {
    getImage(initialPokemon);
  }, []);

  return {
    //Properties
    data,
    offset,
    imagen,
    animation,
    pokemon,
    pagina,

    //functions
    getData,
    incrementList,
    decrement,
    getImage,

    //Dsipatch
    setImagen,
    setPokemon,
    setOffset,
    setData,
  };
};
