import { NextRequest, NextResponse } from "next/server";
import { articles } from "@/utils/data";

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
