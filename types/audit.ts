export interface SiteEvidence {
  homepage: HomepageEvidence;
  collections: CollectionEvidence[];
  products: ProductEvidence[];
  cart: CartEvidence | null;
  footer: FooterEvidence | null;
  newsletter: NewsletterEvidence | null;
}

export interface HomepageEvidence {
  title: string;
  metaDescription: string;

  heroHeading: string;
  heroSubHeading: string;

  primaryCTA: string;
  secondaryCTA: string;

  announcementBar: string;

  navigationLinks: string[];

  trustSignals: string[];
}

export interface CollectionEvidence {
  title: string;
  productCount: number;

  url?: string;

  image?: string;
}

export interface ProductEvidence {
  title: string;

  price: string;

  compareAtPrice?: string;

  rating?: string;

  reviewCount?: string;

  availability?: string;

  primaryCTA: string;

  image?: string;
}

export interface CartEvidence {
  hasFreeShippingBanner: boolean;

  hasTrustBadges: boolean;

  hasExpressCheckout: boolean;

  paymentMethods: string[];
}

export interface FooterEvidence {
  links: string[];

  hasFAQ: boolean;

  hasReturns: boolean;

  hasPrivacyPolicy: boolean;

  hasContact: boolean;
}

export interface NewsletterEvidence {
  exists: boolean;

  cta: string;
}