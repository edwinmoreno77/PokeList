import { IPokeCard } from "@/types/pokeInterface";
import React, { FC } from "react";

export const PokeCard: FC<IPokeCard> = ({
  pokemon,
  setData,
  imagen,
  animation,
  getData,
}) => {
  return (
    <div className="m-4 p-14 bg-slate-800 h-full rounded-xl hover:shadow-xl w-2/6">
      <h1 className="text-2xl m-2 p-2">POKEMON</h1>
      <div className="flex flex-1 justify-around mb-7 p-2">
        <h1 className="text-2xl bg-slate-900 rounded-full p-3 m-1">
          {pokemon?.id}
        </h1>
        <h1 className="text-2xl bg-slate-900 rounded-3xl p-3 m-1">
          {pokemon?.name}
        </h1>
      </div>
      <div className="flex justify-center items-center justify-items-center h-64">
        <img
          onClick={() => setData([])}
          className={animation}
          src={imagen}
          alt="pokemon"
        />
      </div>
      <div className="flex flex-1 rounded-xl justify-around text-2xl mt-10">
        <h1 className=" bg-slate-900 p-3 rounded-xl">{`Altura: ${pokemon?.height}`}</h1>
        <h1 className=" bg-slate-900 p-3 rounded-xl">{`Peso: ${pokemon?.weight}`}</h1>
      </div>
      <section className="flex justify-center mt-5">
        <button
          onClick={getData}
          className="bottom-2 bg-slate-950 rounded-xl p-4 m-3 hover:bg-cyan-700"
        >
          Lista
        </button>
        <button
          onClick={() => setData([])}
          className="bottom-2 bg-slate-950 rounded-xl p-4 m-3  hover:bg-cyan-700"
        >
          Detalles
        </button>
      </section>
    </div>
  );
};
