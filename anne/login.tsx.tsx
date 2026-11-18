import { FormEvent, useState } from "react";

export const ElementLogin = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <main className="relative h-[852px] min-w-[393px] w-full bg-[#080d0a]">
      <header
        className="absolute left-[116px] top-28 [font-family:'Boldonse-Regular',Helvetica] text-4xl font-normal leading-[normal] tracking-[0] text-[#a8e10c]"
        aria-label="DressIA"
      >
        DressIA
      </header>
      <section aria-labelledby="welcome-title">
        <h1
          id="welcome-title"
          className="absolute left-[91px] top-[299px] whitespace-nowrap [font-family:'Inter-Bold',Helvetica] text-xl font-bold leading-[normal] tracking-[0] text-white"
        >
          Bem - Vindo de Volta!
        </h1>
        <p className="absolute left-[calc(50%_-_190px)] top-[342px] w-[382px] text-center [font-family:'Inter-Regular',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-white">
          Entre na sua conta e descubra seu próximo look.
        </p>
      </section>
      <form
        className="absolute inset-0"
        onSubmit={handleSubmit}
        noValidate
        aria-label="Formulário de login"
      >
        <div className="absolute left-12 top-[416px] [font-family:'Inter-Black',Helvetica] text-base font-black leading-[normal] tracking-[0] text-white">
          <label htmlFor="email">E-mail</label>
        </div>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          placeholder="Digite seu e-mail"
          required
          aria-required="true"
          className="absolute left-[11.96%] top-[51.29%] h-[6.1%] w-[76.34%] rounded-[10px] border border-solid border-[#a8e10c] bg-[#222923] px-4 text-center [font-family:'Inter-Regular',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-white placeholder:text-[#a3aca3] focus:border-[#c5f52c] focus:ring-2 focus:ring-[#a8e10c]/40"
        />
        <div className="absolute left-[47px] top-[519px] [font-family:'Inter-Black',Helvetica] text-base font-black leading-[normal] tracking-[0] text-white">
          <label htmlFor="password">Senha</label>
        </div>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          placeholder="Digite sua senha"
          required
          aria-required="true"
          className="absolute left-[11.7%] top-[64.32%] h-[6.1%] w-[76.34%] rounded-[10px] border border-solid border-[#a8e10c] bg-[#222923] px-4 text-center [font-family:'Inter-Regular',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-white placeholder:text-[#a3aca3] focus:border-[#c5f52c] focus:ring-2 focus:ring-[#a8e10c]/40"
        />
        <button
          type="submit"
          className="absolute left-[47px] top-[667px] h-[52px] w-[300px] rounded-[10px] bg-[#a8e10c] [font-family:'Inter-Black',Helvetica] text-lg font-black leading-[normal] tracking-[0] text-[#080d0a] transition-colors hover:bg-[#baf51b] focus:outline-none focus:ring-2 focus:ring-[#a8e10c] focus:ring-offset-2 focus:ring-offset-[#080d0a] active:bg-[#91c400]"
        >
          Entrar
        </button>
      </form>
      <p className="absolute left-[58px] top-[729px] w-[266px] whitespace-nowrap text-center [font-family:'Inter-Regular',Helvetica] text-base font-normal leading-[normal] tracking-[0]">
        <span className="text-white">Não tem uma conta?</span>{" "}
        <a
          href="#cadastro"
          className="[font-family:'Inter-Black',Helvetica] font-black text-[#a8e10c] underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-[#a8e10c] focus:ring-offset-2 focus:ring-offset-[#080d0a]"
        >
          Cadastre-se
        </a>
      </p>
    </main>
  );
};
