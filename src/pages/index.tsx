import { PokeDatails } from "../components/PokeDatails";
import { PokeList } from "../components/PokeList";
import { PokeCard } from "../components/PokeCard";
import { usePokeList } from "@/hooks/usePokeList";
import Image from "next/image";
import pokeImage from "../../public/pokemon.png";

export default function Home() {
  const {
    getImage,
    pokemon,
    data,
    setData,
    incrementList,
    decrement,
    pagina,
    imagen,
    animation,
    getData,
  } = usePokeList();

  return (
    <div>
      <head className="flex flex-auto justify-center items-center p-2 m-2">
        <Image src={pokeImage} alt="poke-titulo" width={250} height={250} />
      </head>
      <main className="bg-slate-600 m-5">
        <section className="text-center flex flex-row justify-around m-5 p-5">
          <PokeCard
            pokemon={pokemon}
            imagen={imagen}
            setData={setData}
            animation={animation}
            getData={getData}
          />
          {data?.length < 1 ? (
            <PokeDatails pokemon={pokemon} />
          ) : (
            <PokeList
              getImage={getImage}
              incrementList={incrementList}
              decrement={decrement}
              pagina={pagina}
              data={data}
            />
          )}
        </section>
      </main>
    </div>
  );
}
