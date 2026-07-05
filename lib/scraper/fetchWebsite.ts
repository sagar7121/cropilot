import axios from "axios";
import fs from "fs";
export async function fetchWebsite(url: string): Promise<string> {
  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      timeout: 30000,
    });

    fs.writeFileSync("debug-homepage.html", response.data);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch website:", error);

    throw new Error("Unable to fetch website.");
  }
}