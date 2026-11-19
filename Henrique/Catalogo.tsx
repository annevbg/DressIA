import { useMemo, useState } from "react";
import rectangle17 from "./rectangle-17.png";
import rectangle18 from "./rectangle-18.png";
import rectangle19 from "./rectangle-19.png";
import vector from "./vector.svg";

type Category = "Todos" | "Camisetas" | "Calças" | "Vestidos";

type ClothingItem = {
  name: string;
  price: string;
  category: Exclude<Category, "Todos">;
  image: string;
  imageAlt: string;
  containerClassName: string;
  imageClassName: string;
  nameClassName: string;
  priceClassName: string;
};

const _categories: Category[] = ["Todos", "Camisetas", "Calças", "Vestidos"];

const clothingItems: ClothingItem[] = [
  {
    name: "Camiseta oversized",
    price: "R$ 89,90",
    category: "Camisetas",
    image: rectangle17,
    imageAlt: "Camiseta oversized preta",
    containerClassName:
      "absolute top-[403px] left-[47px] w-[140px] h-[150px] bg-[#222923] rounded-[10px] border border-solid border-black",
    imageClassName:
      "absolute top-[414px] left-[61px] w-[113px] h-[105px] object-cover",
    nameClassName:
      "absolute top-[523px] left-16 [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap",
    priceClassName:
      "absolute top-[537px] left-16 [font-family:'Roboto-Bold',Helvetica] font-bold text-[#a8e10c] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap",
  },
  {
    name: "Calça jeans",
    price: "R$ 129,90",
    category: "Calças",
    image: rectangle18,
    imageAlt: "Calça jeans azul",
    containerClassName:
      "absolute top-[403px] left-[215px] w-[140px] h-[150px] bg-[#222923] rounded-[10px] border border-solid border-black",
    imageClassName:
      "absolute top-[414px] left-[228px] w-[113px] h-[105px] object-cover",
    nameClassName:
      "absolute top-[523px] left-[233px] [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap",
    priceClassName:
      "absolute top-[537px] left-[233px] [font-family:'Roboto-Bold',Helvetica] font-bold text-[#a8e10c] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap",
  },
  {
    name: "Vestido",
    price: "R$ 149,90",
    category: "Vestidos",
    image: rectangle19,
    imageAlt: "Vestido preto",
    containerClassName:
      "absolute top-[577px] left-[47px] w-[140px] h-[150px] bg-[#222923] rounded-[10px] border border-solid border-black",
    imageClassName:
      "absolute top-[586px] left-[61px] w-[113px] h-[105px] object-cover",
    nameClassName:
      "absolute top-[696px] left-16 [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap",
    priceClassName:
      "absolute top-[707px] left-16 [font-family:'Roboto-Bold',Helvetica] font-bold text-[#a8e10c] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap",
  },
];

export const ElementCatlogoDeRoupas = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos");

  const visibleItems = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLocaleLowerCase();

    return clothingItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "Todos" || item.category === selectedCategory;
      const matchesSearch =
        normalizedSearchTerm.length === 0 ||
        item.name.toLocaleLowerCase().includes(normalizedSearchTerm);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <main className="bg-[#080d0a] w-full min-w-[393px] min-h-[852px] relative">
      <header>
        <div className="absolute top-[17px] left-[161px] [font-family:'Boldonse-Regular',Helvetica] font-normal text-[#a8e10c] text-base tracking-[0] leading-[normal]">
          DressIA
        </div>
        <h1 className="absolute top-[63px] left-[47px] w-[279px] [font-family:'Boldonse-Regular',Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[normal]">
          Catálogo de roupas
        </h1>
      </header>
      <section aria-labelledby="catalog-description">
        <p
          id="catalog-description"
          className="absolute top-[182px] left-8 w-[338px] [font-family:'Roboto-Bold',Helvetica] font-bold text-[#b9c5b9] text-base text-center tracking-[0] leading-[normal]"
        >
          Explore peças e encontre seu próximo look
        </p>
        <form
          className="absolute top-[216px] left-[47px] w-[308px] h-[50px] bg-[#222923] rounded-[10px] border border-solid border-[#a8e10c]"
          role="search"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="clothing-search" className="sr-only">
            Buscar roupas
          </label>
          <input
            id="clothing-search"
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Buscar roupas..."
            className="absolute top-0 left-0 w-full h-full px-[21px] pr-[58px] rounded-[10px] [font-family:'Roboto-Bold',Helvetica] font-bold text-[#b9c5b9] text-base tracking-[0] leading-[normal] placeholder:text-[#b9c5b9]"
          />
          <button
            type="submit"
            aria-label="Buscar"
            className="absolute top-[12px] right-[12px] w-6 h-6 flex aspect-[1] cursor-pointer"
          >
            <img
              className="flex-1 w-[22.33px]"
              alt=""
              aria-hidden="true"
              src={vector}
            />
          </button>
        </form>
        <nav
          className="absolute top-0 left-0 w-full h-[374px]"
          aria-label="Categorias de roupas"
        >
          <div className="absolute top-[290px] left-[47px]">
            <button
              type="button"
              aria-pressed={selectedCategory === "Todos"}
              onClick={() => setSelectedCategory("Todos")}
              className="w-[95px] h-[42px] bg-[#a8e10c] rounded-[10px] [font-family:'Inter-Black',Helvetica] font-black text-black text-lg text-center tracking-[0] leading-[normal] cursor-pointer"
            >
              Todos
            </button>
          </div>
          <div className="absolute top-[283px] left-[146px]">
            <button
              type="button"
              aria-pressed={selectedCategory === "Camisetas"}
              onClick={() => setSelectedCategory("Camisetas")}
              className="w-[110px] h-[42px] bg-[#222923] rounded-[10px] border border-solid border-[#a8e10c] [font-family:'Roboto-Bold',Helvetica] font-bold text-[#b9c5b9] text-base tracking-[0] leading-[normal] whitespace-nowrap cursor-pointer"
            >
              Camisetas
            </button>
          </div>
          <div className="absolute top-[281px] left-[260px]">
            <button
              type="button"
              aria-pressed={selectedCategory === "Calças"}
              onClick={() => setSelectedCategory("Calças")}
              className="w-[81px] h-[42px] bg-[#222923] rounded-[10px] border border-solid border-[#a8e10c] [font-family:'Roboto-Bold',Helvetica] font-bold text-[#b9c5b9] text-base tracking-[0] leading-[normal] whitespace-nowrap cursor-pointer"
            >
              Calças
            </button>
          </div>
          <div className="absolute top-[332px] left-[47px]">
            <button
              type="button"
              aria-pressed={selectedCategory === "Vestidos"}
              onClick={() => setSelectedCategory("Vestidos")}
              className="w-[99px] h-[42px] bg-[#222923] rounded-[10px] border border-solid border-[#a8e10c] [font-family:'Roboto-Bold',Helvetica] font-bold text-[#b9c5b9] text-base tracking-[0] leading-[normal] whitespace-nowrap cursor-pointer"
            >
              Vestidos
            </button>
          </div>
        </nav>
      </section>
      <section aria-label="Produtos disponíveis">
        {visibleItems.map((item) => (
          <article
            key={item.name}
            className={item.containerClassName}
            aria-label={`${item.name}, ${item.price}`}
          >
            <img
              className={item.imageClassName}
              alt={item.imageAlt}
              src={item.image}
            />
            <h2 className={item.nameClassName}>{item.name}</h2>
            <p className={item.priceClassName}>{item.price}</p>
          </article>
        ))}
      </section>
    </main>
  );
};
