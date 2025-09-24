import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card title="Solicitar Cotação" description="Crie uma nova solicitação" />
      <Card title="Histórico" description="Veja suas solicitações" />
    </div>
  );
}
