import Header from "../components/Header";

export default function LoginPage() {
  return (
    <>

      <main className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center text-catotechBlue">
            Login
          </h2>

          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="E-mail"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="password"
              placeholder="Senha"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button
              type="submit"
              className="bg-catotechOrange text-white p-2 rounded hover:bg-orange-600 transition-colors"
            >
              Entrar
            </button>
          </form>

          <p className="text-center text-sm mt-4 text-gray-500">
            Não tem conta? <a href="#" className="text-orange-500 hover:underline">Cadastre-se</a>
          </p>
        </div>
      </main>
    </>
  );
}
