import { GrTechnology } from "react-icons/gr";
import Link from "next/link";

function Navbar() {
  return (
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
  )
}

export default Navbar