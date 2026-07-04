import { NextRequest, NextResponse } from "next/server";

import { fetchWebsite } from "@/lib/scraper/fetchWebsite";
import { extractHomepage } from "@/lib/scraper/extractHomepage";

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();

    // Download website HTML
    const html = await fetchWebsite(url);
    console.log(html.substring(0, 1000));

    // Extract homepage information
    const homepage = extractHomepage(html);

    return NextResponse.json({
  success: true,
  homepage,
});

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to analyze website." },
      { status: 500 }
    );
  }
}