import { IPokemon } from "@/types/pokeInterface";
import React, { FC } from "react";

interface Props {
  pokemon: IPokemon | undefined;
}

export const PokeDatails: FC<Props> = ({ pokemon }) => {
  return (
    <div>
      <h6 className="m-5 p-5 text-center text-2xl bg-slate-800 rounded-xl">
        Para cambiar la imagen presione el boton de Lista
      </h6>
      <div className="flex flex-row justify-center items-center">
        <img
          className="w-36 h-36"
          alt="poke"
          src={pokemon?.sprites.back_default}
        />
        <img
          className="w-36 h-36"
          alt="poke"
          src={pokemon?.sprites.front_default}
        />
        <img
          className="w-36 h-36"
          alt="poke"
          src={pokemon?.sprites.back_shiny}
        />
      </div>
    </div>
  );
};
