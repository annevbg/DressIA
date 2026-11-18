import { useState } from "react";
import { Link } from "react-router-dom";

const styles = ["Streetwear", "Casual", "Elegante", "Esportivo"];

export const ElementMeuEstilo = (): JSX.Element => {
  const [selectedStyle, setSelectedStyle] = useState<string>("");

  return (
    <main className="relative min-h-[852px] w-full min-w-[393px] bg-[#080d0a]">
      <header>
        <div className="absolute left-[161px] top-3.5 [font-family:'Boldonse-Regular',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-[#a8e10c]">
          DressIA
        </div>
      </header>
      <section aria-labelledby="style-title">
        <h1 className="absolute left-[76px] top-[119px] [font-family:'Boldonse-Regular',Helvetica] text-xl font-normal leading-[normal] tracking-[0] text-white">
          Qual é&nbsp;&nbsp;o seu Estilo?
        </h1>
        <p className="absolute left-[calc(50.00%_-_190px)] top-[167px] w-[382px] [font-family:'Inter-Regular',Helvetica] text-center text-lg font-normal leading-[normal] tracking-[0] text-[#a3aca3]">
          Escolha o estilo que mais combina com você.
        </p>
        <div
          className="absolute left-[11.96%] top-[32.63%] h-[6.10%] w-[76.34%] rounded-[10px] border border-solid border-[#a8e10c] bg-[#222923]"
          aria-hidden="true"
        />
        <div
          className="absolute left-[11.96%] top-[44.01%] h-[6.10%] w-[76.34%] rounded-[10px] border border-solid border-[#a8e10c] bg-[#222923]"
          aria-hidden="true"
        />
        <div
          className="absolute left-[11.96%] top-[55.28%] h-[6.10%] w-[76.34%] rounded-[10px] border border-solid border-[#a8e10c] bg-[#222923]"
          aria-hidden="true"
        />
        <div
          className="absolute left-[11.96%] top-[66.55%] h-[6.10%] w-[76.34%] rounded-[10px] border border-solid border-[#a8e10c] bg-[#222923]"
          aria-hidden="true"
        />
        <div
          className="absolute left-[11.96%] top-[32.63%] flex h-[6.10%] w-[76.34%] items-center"
          role="group"
          aria-labelledby="style-title"
        >
          {styles.map((style, index) => (
            <button
              key={style}
              type="button"
              aria-pressed={selectedStyle === style}
              onClick={() => setSelectedStyle(style)}
              className={`absolute left-0 flex h-full w-full items-center rounded-[10px] px-[44px] [font-family:'Inter-Black',Helvetica] text-left text-lg font-black leading-[normal] tracking-[0] text-white ${
                selectedStyle === style ? "bg-[#33420c]" : "bg-transparent"
              } ${index === 0 ? "top-0" : index === 1 ? "top-[185.22%]" : index === 2 ? "top-[369.34%]" : "top-[553.45%]"}`}
            >
              {style}
            </button>
          ))}
        </div>
      </section>
      <div className="absolute left-[47px] top-[692px] h-[52px] w-[300px]">
        <Link
          className={`absolute left-0 top-[-19.23%] flex h-full w-full items-center justify-center rounded-[10px] bg-[#a8e10c] [font-family:'Inter-Black',Helvetica] text-lg font-black leading-[normal] tracking-[0] text-[#080d0a] ${
            selectedStyle ? "opacity-100" : "opacity-60"
          }`}
          to="/x04-u45-meu-estilo"
          aria-label={
            selectedStyle
              ? `Continuar com estilo ${selectedStyle}`
              : "Continuar sem selecionar um estilo"
          }
        >
          Continuar
        </Link>
      </div>
    </main>
  );
};
