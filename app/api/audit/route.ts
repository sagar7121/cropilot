import { NextRequest, NextResponse } from "next/server";
import { fetchWebsite } from "@/lib/scraper/fetchWebsite";

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    const html = await fetchWebsite(url);

    return NextResponse.json({
      success: true,
      htmlLength: html.length,
      preview: html.substring(0, 500),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch website.",
      },
      { status: 500 }
    );
  }
}