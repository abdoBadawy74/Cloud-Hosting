import { NextRequest, NextResponse } from "next/server";
import { articles } from "@/utils/data";
import { UpdateArticleDto } from "@/utils/dtos";

interface Props {
  params: {
    id: string;
  };
}

/*
 * @method GET
 * @description Get single article by id
 * @returns {Object} article
 * @route ~/api/articles/:id
 * @access Public
 */

export function GET(request: NextRequest, { params }: Props) {
  const article = articles.find(
    (article) => article.id === parseInt(params.id)
  );

  if (!article) {
    return NextResponse.json({ message: "Article not found" }, { status: 404 });
  }

  return NextResponse.json(article, { status: 200 });
}

/*
 * @method PUT
 * @description Update single article by id
 * @returns {Object} article
 * @route ~/api/articles/:id
 * @access Public
 */

export async function PUT(request: NextRequest, { params }: Props) {
  const article = articles.find(
    (article) => article.id === parseInt(params.id)
  );

  const body = (await request.json()) as UpdateArticleDto;

  console.log(body);

  if (!article) {
    return NextResponse.json({ message: "Article not found" }, { status: 404 });
  }

  return NextResponse.json(
    {
      message: "Article updated successfully",
    },
    { status: 200 }
  );
}




/*
 * @method DELETE
 * @description Delete single article by id
 * @returns {Object} message
 * @route ~/api/articles/:id
 * @access Public
 */

export async function DELETE(request: NextRequest, { params }: Props) {
    const article = articles.find(
      (article) => article.id === parseInt(params.id)
    );
  
    if (!article) {
      return NextResponse.json({ message: "Article not found" }, { status: 404 });
    }
  
    return NextResponse.json(
      {
        message: "Article deleted successfully",
      },
      { status: 200 }
    );
  }
  