import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/img/banner.jpg')" }}
    >
      {/* O Header já está vindo do layout, não precisa importar */}

      {/* Conteúdo centralizado */}
      <div className="flex flex-1 justify-center items-center">
        <div className="bg-white/95 backdrop-blur-md p-8 rounded-lg shadow-xl w-full max-w-sm border border-gray-200">
          <h2 className="text-4xl font-bold mb-6 text-center" style={{ color: "#FF5100" }}>
            CatoTech
          </h2>

          <form className="grid gap-4">
            <TextField id="email" label="E-mail" variant="outlined" fullWidth required />
            <TextField id="password" label="Senha" type="password" variant="outlined" fullWidth required />

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-orange-500" />
                Lembrar-me
              </label>
              <a href="#" className="hover:underline">Esqueceu sua senha?</a>
            </div>

            <Button type="submit" variant="contained" style={{ backgroundColor: "#001329", color: "#FF5100" }}>
              Entrar
            </Button>
          </form>

          <p className="text-center text-sm mt-4 text-gray-600">
            Não tem conta?{" "}
            <a href="#" className="text-catotechOrange hover:underline">Cadastre-se</a>
          </p>

          <div className="flex justify-end mt-2">
            <p
              className="text-2xl mt-2"
              style={{
                background: "linear-gradient(90deg, #6B21A8, #EC4899, #F97316)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PandaCode
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
