import React, { useState } from "react";
import camiseta from "./camiseta.png";

type Props = {
  onVoltar?: () => void;
  onExperimentar?: (tamanho: string) => void;
};

export default function DetalhesProduto({ onVoltar, onExperimentar }: Props) {
  const [tamanho, setTamanho] = useState<string>("");
  const tamanhos = ["P", "M", "G", "GG"];

  return (
    <main style={styles.pagina}>
      <section style={styles.tela}>
        <header style={styles.cabecalho}>
          <h1 style={styles.logo}>DressIA</h1>
          <button style={styles.voltar} onClick={onVoltar} type="button">
            ← Voltar ao catálogo
          </button>
        </header>

        <img
          src={camiseta}
          alt="Camiseta oversized preta"
          style={styles.foto}
        />

        <h2 style={styles.nome}>Camiseta Oversized</h2>
        <p style={styles.preco}>R$ 89,90</p>
        <p style={styles.descricao}>
          Camiseta confortável com modelagem ampla, ideal para looks casuais e
          streetwear.
        </p>

        <h3 style={styles.subtitulo}>Selecione o tamanho</h3>
        <div style={styles.tamanhos}>
          {tamanhos.map((opcao) => (
            <button
              type="button"
              key={opcao}
              onClick={() => setTamanho(opcao)}
              aria-pressed={tamanho === opcao}
              style={{
                ...styles.tamanho,
                ...(tamanho === opcao ? styles.tamanhoSelecionado : {}),
              }}
            >
              {opcao}
            </button>
          ))}
        </div>

        <button
          type="button"
          style={styles.experimentar}
          onClick={() => onExperimentar?.(tamanho)}
        >
          Experimentar virtualmente
        </button>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  pagina: {
    minHeight: "100vh",
    backgroundColor: "#202020",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  tela: {
    backgroundColor: "#080D0A",
    color: "#FFFFFF",
    width: "100%",
    maxWidth: 325,
    minHeight: 704,
    boxSizing: "border-box",
    padding: "14px 20px 36px",
  },
  cabecalho: { marginBottom: 16 },
  logo: {
    color: "#A8E10C",
    fontSize: 20,
    fontWeight: 800,
    margin: "0 0 10px",
    textAlign: "center",
  },
  voltar: {
    background: "transparent",
    border: 0,
    padding: 0,
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
  },
  foto: {
    display: "block",
    width: "100%",
    height: 270,
    objectFit: "cover",
    borderRadius: 9,
    backgroundColor: "#F4F4F4",
  },
  nome: { fontSize: 19, fontWeight: 700, margin: "13px 0 13px" },
  preco: {
    color: "#A8E10C",
    fontSize: 20,
    fontWeight: 800,
    margin: "0 0 16px",
  },
  descricao: {
    fontSize: 13,
    color: "#BBC5BB",
    lineHeight: 1.22,
    maxWidth: 260,
    margin: "0 0 12px",
  },
  subtitulo: { fontSize: 14, fontWeight: 700, margin: "0 0 14px" },
  tamanhos: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 26,
  },
  tamanho: {
    backgroundColor: "#222923",
    color: "#FFFFFF",
    border: "1px solid #A8E10C",
    borderRadius: 9,
    height: 34,
    flex: 1,
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
  },
  tamanhoSelecionado: { backgroundColor: "#A8E10C", color: "#080D0A" },
  experimentar: {
    backgroundColor: "#A8E10C",
    color: "#080D0A",
    border: 0,
    borderRadius: 9,
    width: "100%",
    height: 44,
    fontSize: 14,
    fontWeight: 800,
    cursor: "pointer",
  },
};
