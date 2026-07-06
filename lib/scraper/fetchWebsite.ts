import axios from "axios";

export async function fetchWebsite(url: string): Promise<string> {
  try {
    const response = await axios.get(url, {
      timeout: 60000,

      maxRedirects: 5,

      decompress: true,

      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",

        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",

        "Accept-Language": "en-US,en;q=0.9",

        "Accept-Encoding": "gzip, deflate, br",

        Connection: "keep-alive",

        "Upgrade-Insecure-Requests": "1",

        DNT: "1",

        Referer: "https://www.google.com/",
      },
    });


    return response.data;
  } catch (error) {
    console.error("Failed to fetch website:", error);

    throw new Error("Unable to fetch website.");
  }
}