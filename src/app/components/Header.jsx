import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className="text-white p-4 shadow-md flex justify-between items-center"
      style={{ backgroundColor: "#001329" }}
    >

      <h1 className="text-3xl font-bold" style={{ color: "#FF5100" }}>
        CatoTech
      </h1>

      <Link href="/login">
      <FaUserCircle
        className="text-white text-3xl cursor-pointer hover:text-orange-500 transition-colors"
        title="Login"
      />
      </Link>
    </header>
  );
}
