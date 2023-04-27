import { PokeDatails } from "../components/PokeDatails";
import { PokeList } from "../components/PokeList";
import { PokeCard } from "../components/PokeCard";
import { usePokeList } from "@/hooks/usePokeList";

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
      <h1 className="text-center mt-10 text-5xl">POKEMON LIST</h1>
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
