import * as cheerio from "cheerio";

export interface ShopifyStoreData {
  shopName: string;
  currency: string;
  description: string;
  products: any[];
}

export function extractShopifyData(html: string): ShopifyStoreData {
  const $ = cheerio.load(html);

  let shopName = "";
  let currency = "";
  let description = "";

  const products: any[] = [];

  $("script").each((_, script) => {
    const content = $(script).html() || "";

    // Shop name
    if (!shopName) {
      const match = content.match(/Shopify\.shop\s*=\s*"([^"]+)"/);

      if (match) {
        shopName = match[1];
      }
    }

    // Currency
    if (!currency) {
      const match = content.match(/Shopify\.currency\.active\s*=\s*"([^"]+)"/);

      if (match) {
        currency = match[1];
      }
    }

    // Product JSON
    if (
      content.includes('"title"') &&
      content.includes('"price"')
    ) {
      try {
        const json = JSON.parse(content);

        if (json.title) {
          products.push(json);
        }
      } catch {
        // Ignore
      }
    }
  });

  description =
    $('meta[name="description"]').attr("content") || "";

  return {
    shopName,
    currency,
    description,
    products,
  };
}