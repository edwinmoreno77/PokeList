import { IPokeList, Ipoke } from "@/types/pokeInterface";
import { FC } from "react";

export const PokeList: FC<IPokeList> = ({
  getImage,
  data,
  pagina,
  decrement,
  incrementList,
}) => {
  return (
    <div className="m-4 p-4 text-center rounded-xl bg-slate-800 w-2/6">
      <ul>
        {data?.map((poke: Ipoke) => {
          const [number] = poke.url.split("/").slice(6, 7);
          return (
            <li
              onClick={() => getImage(poke.url)}
              className="flex flex-initial cursor-pointer text-2xl justify-center items-center bg-cyan-900 mb-1 rounded-xl hover:bg-cyan-700"
              key={poke.name}
            >
              <p className="flex flex-1 justify-between">
                <span className="ms-10">{`${number}`}</span>
                <span className="mr-10 capitalize">{`${poke.name}`}</span>
              </p>
            </li>
          );
        })}
      </ul>
      <h1 className="text-sm mt-6">{`Pagina ${pagina}`}</h1>
      <div className="text-xl mt-4">
        <button
          onClick={decrement}
          className="bottom-2 bg-slate-950 rounded-xl p-3 m-3  hover:bg-cyan-700"
        >
          Atras
        </button>
        <button
          onClick={incrementList}
          className="bottom-2 bg-slate-950 rounded-xl p-3 m-3  hover:bg-cyan-700"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
