import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const fields = [
  {
    id: "name",
    label: "Nome Completo",
    placeholder: "Digite seu nome",
    type: "text",
    autocomplete: "name",
  },
  {
    id: "email",
    label: "E-mail",
    placeholder: "Digite seu e-mail",
    type: "email",
    autocomplete: "email",
  },
  {
    id: "password",
    label: "Senha",
    placeholder: "Digite sua senha",
    type: "password",
    autocomplete: "new-password",
  },
  {
    id: "confirmPassword",
    label: "Confirmar Senha",
    placeholder: "Repita sua senha",
    type: "password",
    autocomplete: "new-password",
  },
] as const;

export const ElementCadastro = (): JSX.Element => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: undefined,
    }));

    setSubmitted(false);
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Informe seu nome completo.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Informe seu e-mail.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Informe um e-mail válido.";
    }

    if (!values.password) {
      nextErrors.password = "Informe sua senha.";
    } else if (values.password.length < 6) {
      nextErrors.password = "A senha deve ter pelo menos 6 caracteres.";
    }

    if (!values.confirmPassword) {
      nextErrors.confirmPassword = "Confirme sua senha.";
    } else if (values.confirmPassword !== values.password) {
      nextErrors.confirmPassword = "As senhas não coincidem.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <main className="bg-[#080d0a] w-full min-w-[393px] min-h-[852px] relative overflow-hidden">
      <section
        aria-labelledby="signup-title"
        className="relative w-full min-w-[393px] h-[852px]"
      >
        <header>
          <div className="absolute top-[113px] left-[116px] [font-family:'Boldonse-Regular',Helvetica] font-normal text-[#a8e10c] text-4xl tracking-[0] leading-[normal]">
            DressIA
          </div>
          <h1
            id="signup-title"
            className="absolute top-[242px] left-[83px] [font-family:'Boldonse-Regular',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]"
          >
            Crie sua Conta
          </h1>
          <p className="absolute top-[298px] left-[calc(50.00%_-_190px)] w-[382px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#a3aca3] text-base text-center tracking-[0] leading-[normal]">
            Comece sua experiência de moda personalizada
          </p>
        </header>
        <form
          aria-describedby={submitted ? "success-message" : undefined}
          noValidate
          onSubmit={handleSubmit}
          className="absolute inset-0"
        >
          {fields.map((field, index) => {
            const topPositions = [349, 449, 546, 646];
            const inputPositions = [375, 472, 573, 672];
            const labelLeftPositions = [47, 48, 47, 47];
            const inputPlaceholderPositions = [139, 136, 132, 133];
            const error = errors[field.id];

            return (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="absolute [font-family:'Inter-Black',Helvetica] font-black text-white text-base text-center tracking-[0] leading-[normal] whitespace-nowrap"
                  style={{
                    top: `${topPositions[index]}px`,
                    left: `${labelLeftPositions[index]}px`,
                  }}
                >
                  {field.label}
                </label>
                <div
                  className="absolute w-[76.34%] h-[6.10%] bg-[#222923] rounded-[10px] border border-solid border-[#a8e10c]"
                  style={{
                    top: `${inputPositions[index]}px`,
                    left: "11.20%",
                  }}
                >
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    autoComplete={field.autocomplete}
                    value={values[field.id]}
                    onChange={handleChange}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? `${field.id}-error` : undefined}
                    placeholder={field.placeholder}
                    className="absolute inset-0 w-full h-full rounded-[10px] px-4 text-center [font-family:'Inter-Regular',Helvetica] font-normal text-[#a3aca3] text-base tracking-[0] leading-[normal] placeholder:text-[#a3aca3] focus:border-[#c4ff00] focus:ring-2 focus:ring-[#a8e10c]/30"
                  />
                </div>
                {error ? (
                  <p
                    id={`${field.id}-error`}
                    role="alert"
                    className="absolute left-[47px] text-xs text-[#ff8b8b] [font-family:'Inter-Regular',Helvetica]"
                    style={{
                      top: `${inputPositions[index] + 55}px`,
                    }}
                  >
                    {error}
                  </p>
                ) : null}

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute [font-family:'Inter-Regular',Helvetica] font-normal text-[#a3aca3] text-base text-center tracking-[0] leading-[normal] whitespace-nowrap opacity-0"
                  style={{
                    top: `${inputPositions[index] + 16}px`,
                    left: `${inputPlaceholderPositions[index]}px`,
                  }}
                >
                  {field.placeholder}
                </span>
              </div>
            );
          })}

          <button
            type="submit"
            className="absolute top-[771px] left-11 w-[300px] h-[52px] bg-[#a8e10c] rounded-[10px] [font-family:'Inter-Black',Helvetica] font-black text-[#080d0a] text-lg text-center tracking-[0] leading-[normal] transition-colors hover:bg-[#baff14] focus:outline-none focus:ring-2 focus:ring-[#a8e10c] focus:ring-offset-2 focus:ring-offset-[#080d0a]"
          >
            Criar Conta
          </button>
        </form>
        {submitted ? (
          <p
            id="success-message"
            role="status"
            className="absolute top-[823px] left-16 w-[266px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#a8e10c] text-xs text-center tracking-[0] leading-[normal]"
          >
            Conta criada com sucesso!
          </p>
        ) : (
          <p className="absolute top-[823px] left-16 w-[266px] [font-family:'Inter-Regular',Helvetica] font-normal text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
            <span className="text-white">Já tem uma conta? </span>
            <button
              type="button"
              onClick={() => undefined}
              className="[font-family:'Inter-Bold',Helvetica] font-bold text-[#a8e10c] focus:outline-none focus:underline"
            >
              Entrar
            </button>
          </p>
        )}
      </section>
    </main>
  );
};

export default ElementCadastro;
