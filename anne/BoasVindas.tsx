export const ElementBoasVindas = (): JSX.Element => {
  return (
    <main className="bg-[#080d0a] w-full min-w-[393px] min-h-[852px] flex flex-col">
      <h1 className="ml-[116px] w-[161px] h-[69px] mt-[114px] [font-family:'Boldonse-Regular',Helvetica] font-normal text-[#a8e10c] text-4xl tracking-[0] leading-[normal]">
        DressIA
      </h1>
      <section aria-labelledby="welcome-heading">
        <h2
          id="welcome-heading"
          className="ml-[69px] w-[254px] h-6 mt-[179px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap"
        >
          Seu Estilo. Sua Identidade
        </h2>
        <p className="-ml-2 h-9 w-[317px] self-center mt-10 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[normal]">
          A inteligência artificial encontra o look ideal para você.
        </p>
        <div className="ml-[46px] w-[300px] h-[52px] relative mt-[145px]">
          <a
            href="/onboarding"
            className="absolute w-full h-full top-[-19.23%] left-0 bg-[#a8e10c] rounded-[10px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a8e10c]"
            aria-label="Começar a criar seu look"
          >
            <span className="absolute w-[27.67%] h-[42.31%] top-[11.54%] left-[38.67%] [font-family:'Inter-Black',Helvetica] font-black text-[#080d0a] text-lg tracking-[0] leading-[normal]">
              Começar
            </span>
          </a>
        </div>
        <a
          href="/login"
          className="block ml-[121px] w-[150px] h-[19px] mt-28 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Já tenho uma conta
        </a>
      </section>
    </main>
  );
};
