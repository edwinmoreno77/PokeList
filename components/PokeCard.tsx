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
    <div className="m-5 p-10 bg-slate-800 h-full rounded-xl hover:shadow-xl">
      <div className="flex flex-1 justify-around">
        <h1 className="text-3xl">{pokemon?.id}</h1>
        <h1 className="text-3xl">{pokemon?.name}</h1>
      </div>
      <div className="flex justify-center items-center justify-items-center m-5 p-5 h-96">
        <img
          className={`w-96 h-96 rounded-xl p-3 bg-slate-400 ${animation}`}
          src={imagen}
          alt="pokemon"
        />
      </div>
      <div className="flex flex-1 justify-around text-2xl">
        <h1>{`Weight: ${pokemon?.weight}`}</h1>
        <h1>{`height: ${pokemon?.height}`}</h1>
      </div>
      <section className="flex justify-center mt-10">
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
