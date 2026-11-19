import { FormEvent, useState } from "react";

type MeasurementField = {
  id: "height" | "weight" | "waist";
  label: string;
  placeholder: string;
  top: string;
  labelTop: string;
};

const measurementFields: MeasurementField[] = [
  {
    id: "height",
    label: "Altura (cm)",
    placeholder: "Ex.: 175",
    top: "top-[331px]",
    labelTop: "top-[296px]",
  },
  {
    id: "weight",
    label: "Peso (Kg)",
    placeholder: "Ex.: 70",
    top: "top-[445px]",
    labelTop: "top-[410px]",
  },
  {
    id: "waist",
    label: "Cintura (cm)",
    placeholder: "Ex.: 80",
    top: "top-[560px]",
    labelTop: "top-[525px]",
  },
];

export const ElementMedidasCorporais = (): JSX.Element => {
  const [measurements, setMeasurements] = useState({
    height: "",
    weight: "",
    waist: "",
  });
  const [isSaved, setIsSaved] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setMeasurements((currentMeasurements) => ({
      ...currentMeasurements,
      [name]: value,
    }));

    setIsSaved(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setIsSaved(true);
  };

  return (
    <main className="bg-[#080d0a] w-full min-w-[393px] min-h-[852px] relative">
      <div className="absolute top-[15px] left-[161px] [font-family:'Boldonse-Regular',Helvetica] font-normal text-[#a8e10c] text-base tracking-[0] leading-[normal]">
        DressIA
      </div>
      <h1 className="absolute top-[138px] left-[87px] w-[220px] [font-family:'Boldonse-Regular',Helvetica] font-normal text-white text-[28px] tracking-[0] leading-[normal]">
        Suas medidas
      </h1>
      <p className="absolute top-[246px] left-7 w-[338px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#b9c5b9] text-base text-center tracking-[0] leading-[normal]">
        Informe suas medidas para encontrar o tamanho ideal
      </p>
      <form className="absolute inset-0" onSubmit={handleSubmit} noValidate>
        {measurementFields.map((field) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className={`absolute left-[${field.id === "height" ? "55px" : field.id === "weight" ? "54px" : "51px"}] ${field.labelTop} [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap`}
            >
              {field.label}
            </label>
            <input
              id={field.id}
              name={field.id}
              type="number"
              inputMode="decimal"
              min="0"
              step="any"
              required
              value={measurements[field.id]}
              onChange={handleChange}
              placeholder={field.placeholder}
              aria-label={field.label}
              className={`absolute left-[47px] ${field.top} w-[300px] h-[50px] px-[20px] bg-[#222923] rounded-[10px] border border-solid border-[#a8e10c] [font-family:'Roboto-Bold',Helvetica] font-bold text-[#b9c5b9] text-base tracking-[0] leading-[normal] placeholder:text-[#b9c5b9] focus:border-[#d0ff39] focus:ring-2 focus:ring-[#a8e10c]/40`}
            />
          </div>
        ))}

        <button
          type="submit"
          className="absolute top-[714px] left-[54px] w-[300px] h-[52px] bg-[#a8e10c] rounded-[10px] [font-family:'Inter-Black',Helvetica] font-black text-black text-lg text-center tracking-[0] leading-[normal] transition-colors hover:bg-[#b9ed16] focus:outline-none focus:ring-2 focus:ring-[#a8e10c] focus:ring-offset-2 focus:ring-offset-[#080d0a] active:bg-[#91c900]"
          aria-label="Salvar medidas e continuar"
        >
          {isSaved ? "Medidas Salvas" : "Salvar e Continuar"}
        </button>
      </form>
    </main>
  );
};
