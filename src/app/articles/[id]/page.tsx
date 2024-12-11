import AddCommentForm from "@/Components/Comments/AddCommentsForm";
import CommentItem from "@/Components/Comments/CommentItem";
import { Article } from "@/utils/types";

interface SingleArticlePageProps {
  params: {
    id: string;
  };
}

const SingleArticlePage = async (props: SingleArticlePageProps) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  
  const { id } = await props.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch article from the server");
  }
  const article: Article = await res.json();

  return (
    <section className="fixed-height container m-auto w-full px-5 pt-8 md:w-3/4">
      <div className="bg-white p-7 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-700 mb-2">
          {article.title}
        </h1>
        <div className="text-gray-500">1/7/2024</div>
        <p className="text-gray-800 text-xl mt-5">{article.body}</p>
      </div>
      <AddCommentForm />
      <h4 className="text-xl text-gray-800 ps-1 font-semibold mb-2 mt-7">
        Comments
      </h4>
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </section>
  );
};

export default SingleArticlePage;
