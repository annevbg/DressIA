import { useRef, useState } from "react";
import andrsrxnCamera from "./andrsrxn-camera.svg";

export const ElementEnviarFoto = (): JSX.Element => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
  };

  const handleContinue = (): void => {
    if (!selectedFile) {
      fileInputRef.current?.click();
    }
  };

  return (
    <main className="bg-[#080d0a] w-full min-w-[393px] min-h-[852px] relative">
      <header
        className="absolute top-[17px] left-[161px] [font-family:'Boldonse-Regular',Helvetica] font-normal text-[#a8e10c] text-base tracking-[0] leading-[normal]"
        aria-label="DressIA"
      >
        DressIA
      </header>
      <section aria-labelledby="upload-title">
        <h1 className="absolute top-[140px] left-[77px] w-[239px] [font-family:'Boldonse-Regular',Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[normal]">
          Envie sua foto
        </h1>
        <p className="absolute top-[246px] left-7 w-[338px] [font-family:'Roboto-Bold',Helvetica] font-bold text-[#b9c5b9] text-base text-center tracking-[0] leading-[normal]">
          Adicione uma foto para experimentar roupas virtualmente
        </p>
        <input
          ref={fileInputRef}
          id="photo-upload"
          name="photo"
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={handleFileChange}
        />
        <label
          htmlFor="photo-upload"
          className="top-[301px] h-[250px] bg-[#222923] rounded-xl border border-solid border-[#a8e10c] absolute left-[47px] w-[300px] cursor-pointer"
          aria-label="Adicionar foto"
        >
          <img
            className="absolute top-[84px] left-[129px] w-10 h-10 aspect-[1]"
            alt=""
            aria-hidden="true"
            src={andrsrxnCamera}
          />
          <span className="absolute top-[124px] left-[99px] [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
            Adicionar foto
          </span>
        </label>
        <button
          type="button"
          className="top-[715px] h-[52px] bg-[#a8e10c] rounded-[10px] absolute left-[47px] w-[300px] [font-family:'Inter-Black',Helvetica] font-black text-black text-lg text-center tracking-[0] leading-[normal] cursor-pointer"
          onClick={handleContinue}
          aria-label={
            selectedFile ? "Continuar com a foto selecionada" : "Continuar"
          }
        >
          Continuar
        </button>
      </section>
    </main>
  );
};
