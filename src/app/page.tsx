import Hero from "@/Components/home/Hero";
import WebHostingPlan from "@/Components/home/WebHostingPlan";

function HomePage() {
  console.log("this is home ");
  return (
    <>
      <Hero />
      <h2 className="text-center mt-10 text-3xl font-bold">
        Choose Your Web Hosing Plan
      </h2>
      <div className="container m-auto flex justify-center items-center my-7 flex-wrap md:gap-7">
        <WebHostingPlan />
        <WebHostingPlan />
        <WebHostingPlan />
      </div>
    </>
  );
}
export default HomePage;
