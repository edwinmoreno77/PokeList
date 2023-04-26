import { IPokemon } from "@/types/pokeInterface";
import { useEffect, useState } from "react";

const initialPokemon = "https://pokeapi.co/api/v2/pokemon/1/";
const initialUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg";

export const usePokeList = () => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [imagen, setImagen] = useState(initialUrl);
  const [animation, setAnimation] = useState("");
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [pagina, setPagina] = useState(1);

  const url = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`;

  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.results);
  }

  async function getImage(url: RequestInfo | URL) {
    setAnimation("animate-pulse");
    const response = await fetch(url);
    const data = await response.json();
    setImagen(data.sprites.other.dream_world.front_default);
    setPokemon(data);

    setTimeout(() => {
      setAnimation("");
    }, 2500);
  }
  const incrementList = () => {
    if (offset >= 1280) return;
    setOffset(offset + 12);
    setPagina(pagina + 1);
  };

  const decrement = () => {
    if (offset === 0) return;
    setOffset(offset - 12);
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
