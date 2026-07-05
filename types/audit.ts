export interface SiteEvidence {
  homepage: HomepageEvidence;
  collections: CollectionEvidence[];
  products: ProductEvidence[];
  cart: CartEvidence | null;
}

export interface HomepageEvidence {
  title: string;
  metaDescription: string;
  heroHeading: string;
  primaryCTA: string;

  announcementBar: string;
  navigationLinks: string[];

  trustSignals: string[];
}

export interface CollectionEvidence {
  title: string;
  productCount: number;
}

export interface ProductEvidence {
  title: string;
  price: string;
  rating?: string;
  reviewCount?: string;
  primaryCTA: string;
}

export interface CartEvidence {
  hasFreeShippingBanner: boolean;
  hasTrustBadges: boolean;
}