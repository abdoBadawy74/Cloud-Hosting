interface searchArticlesPageProps {
  searchParams: { search: string };
}

export default function SearchArticlesPage({
  searchParams,
}: searchArticlesPageProps) {
  console.log(searchParams);
  return (
    <section className="container m-auto px-5 fixed-height">
      <h1 className="text-3xl font-bold text-center my-5">
        Search results for:{" "}
        <span className="text-blue-500">{searchParams.search}</span>
      </h1>
    </section>
  );
}
