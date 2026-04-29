export default function Home() {
  const cursos = [
    { nome: "Marketing Digital", preco: "R$ 49,90" },
    { nome: "Edição de Vídeo", preco: "R$ 39,90" },
    { nome: "Informática Completa", preco: "R$ 29,90" },
    { nome: "Como Ganhar Dinheiro Online", preco: "R$ 59,90" },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: 20,
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "#38bdf8", textAlign: "center" }}>
        NextLevel Academy 🚀
      </h1>

      <p style={{ textAlign: "center" }}>
        Aprenda habilidades e evolua de nível
      </p>

      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        alt="Banner"
        style={{
          width: "100%",
          borderRadius: 20,
          marginTop: 20,
        }}
      />

      <h2 style={{ marginTop: 30 }}>Cursos em Destaque</h2>

      {cursos.map((curso, i) => (
        <div
          key={i}
          style={{
            background: "#1e293b",
            padding: 20,
            borderRadius: 20,
            marginTop: 20,
          }}
        >
          <h3>{curso.nome}</h3>
          <p style={{ color: "#38bdf8" }}>{curso.preco}</p>

          <button
            style={{
              background: "#38bdf8",
              border: "none",
              padding: 15,
              borderRadius: 12,
              fontWeight: "bold",
            }}
            onClick={() => alert("Pix: 81989883829\nDanylo Gabriel")}
          >
            Comprar Curso
          </button>
        </div>
      ))}
    </main>
  );
          }
