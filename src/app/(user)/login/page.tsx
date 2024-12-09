"Use Client";

export default function LoginPage() {
  return (
    <section className="fixed-height container m-auto px-7 flex items-center justify-center">
      <div className="m-auto bg-white rounded-lg p-5 w-full md:2/3">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">Login</h1>
        <form className="flex flex-col">
          <input
            className="mb-4 border rounded p-2 text-xl"
            type="email"
            placeholder="Enter your email"
          />
          <input
            className="mb-4 border rounded p-2 text-xl"
            type="password"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="text-2xl text-white bg-blue-800 rounded p-2 w-full"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
