import { NextRequest, NextResponse } from "next/server";
import { createArticleSchema } from "@/utils/validationSchemas";
import { CreateArticleDto } from "@/utils/dtos";
import { Article } from "@prisma/client";
import prisma from "@/utils/db";


/*
 * @method GET
 * @description Get all articles
 * @returns {Array} articles
 * @route ~/api/articles
 * @access Public
 */

export async function GET(request: NextRequest) {
  //   console.log(request);
  try {
    const articles = await prisma.article.findMany();
    // return the articles array as JSON
    return NextResponse.json(articles, { status: 200 });
  } catch (err) {
    // console.log(err);
    return NextResponse.json(
      {
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}

/*
 * @method POST
 * @description Create a new article
 * @returns {Object} message
 * @route ~/api/articles
 * @access Public
 */

export async function POST(request: NextRequest) {
  try {
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

    const newArticle: Article = await prisma.article.create({
      data: {
        title: body.title,
        description: body.description,
      },
    });

    return NextResponse.json(newArticle, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        message: "Server Error",
      },
      { status: 500 }
    );
  }
}
