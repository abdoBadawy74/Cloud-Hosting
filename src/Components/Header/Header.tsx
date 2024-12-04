import Link from "next/link";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="h-[100px] flex items-center justify-between px-[20px] py-[40px] border-b-4 border-[rgb(144,144,144)] bg-[rgb(227,225,225)] relative">
      <Navbar />
      <div className="flex items-center gap-5">
        <Link
          href="/login"
          className="bg-blue-700 text-white px-[10px] py-[10px] rounded-lg text-[21px] font-bold flex items-center hover:bg-blue-800"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="bg-blue-700 text-white px-[10px] py-[10px] rounded-lg text-[21px] font-bold flex items-center hover:bg-blue-800"
        >
          Register
        </Link>
      </div>
    </header>
  );
}

export default Header;
