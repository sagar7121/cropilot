import axios from "axios";

export async function fetchWebsite(url: string): Promise<string> {
  try {
    const response = await axios.get(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      timeout: 10000,
    });

    return response.data;
  } catch (error) {
    console.error("Failed to fetch website:", error);

    throw new Error("Unable to fetch website.");
  }
}