import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <section className="fixed-height container m-auto px-7 flex items-center justify-center">
      <div className="m-auto bg-white rounded-lg p-5 w-full md:2/3">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">Login</h1>
        <LoginForm />
      </div>
    </section>
  );
}
