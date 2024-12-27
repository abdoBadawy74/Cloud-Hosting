import { NextRequest, NextResponse } from "next/server";
import { articles } from "@/utils/data";
import { createArticleSchema } from "@/utils/validationSchemas";
import { CreateArticleDto } from "@/utils/dtos";


/* 
* @method GET
* @description Get all articles
* @returns {Array} articles
* @route ~/api/articles
* @access Public
*/

export function GET(request: NextRequest) {
  //   console.log(request);
  // return the articles array as JSON
  return NextResponse.json(articles, { status: 200 });
}


/*
 * @method POST
 * @description Create a new article
 * @returns {Object} message
 * @route ~/api/articles
 * @access Public
 */

export async function POST(request: NextRequest) {
  const body = (await request.json()) as CreateArticleDto;
  //   console.log(body);

  const vakidation = createArticleSchema.safeParse(body);
  if (!vakidation.success) {
    return NextResponse.json(
      {
        message: vakidation.error.errors[0].message,
      },
      { status: 400 }
    );
  }

  const newArticle = {
    id: articles.length + 1,
    userId: 101,
    ...body,
  };
  articles.push(newArticle);
  return NextResponse.json(newArticle, { status: 201 });
}
