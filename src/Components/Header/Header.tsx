import Link from "next/link";
import { GrTechnology } from "react-icons/gr";

function Header() {
  return (
    <header className="h-[100px] flex items-center justify-between px-[20px] py-[40px] border-b-4 border-[rgb(144,144,144)] bg-[rgb(227,225,225)] relative">
      <nav className="flex items-center justify-between">
        <div>
          <Link href="/" className="flex items-center text-[24px] font-bold text-[rgb(176,15,176)]">
            CLOUD
            <GrTechnology />
            HOSTING
          </Link>
        </div>
        <ul className="ml-[30px]">
            <Link className="text-[20px] font-bold mx-[12px] hover:text-blue-800 transition" href="/">Home</Link>
            <Link className="text-[20px] font-bold mx-[12px] hover:text-blue-800 transition" href="/articles">Articles</Link>
            <Link className="text-[20px] font-bold mx-[12px] hover:text-blue-800 transition" href="/about">About</Link>
            <Link className="text-[20px] font-bold mx-[12px] hover:text-blue-800 transition" href="/admin">Admin</Link>
        </ul>
      </nav>
      <div className="flex items-center gap-5">
      <Link href="/login" className="bg-blue-700 text-white px-[10px] py-[10px] rounded-lg text-[21px] font-bold flex items-center hover:bg-blue-800">Login</Link>
      <Link href="/register" className="bg-blue-700 text-white px-[10px] py-[10px] rounded-lg text-[21px] font-bold flex items-center hover:bg-blue-800">Register</Link>
      </div>
    </header>
  );
}

export default Header;
