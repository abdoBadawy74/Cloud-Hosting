import Link from "next/link"

function HomePage() {
  return (
    <>
      <div>Home Page</div>
      <p> Welcome to Next js </p>
      <div className="flex gap-2 text-blue-800">
      <Link href="/about" > Go To About Page </Link>
      <Link href="/admin" > Go To admin Page </Link>
      <Link href="/register" > Go To register Page </Link>
      <Link href="/login" > Go To login Page </Link>
      </div>
    </>
  )
}
export default HomePage