export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  tags: string[];
  author: Author;
  publishDate: string;
  readTime: string;
  featured: boolean;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  relatedProducts: string[];
  relatedPosts: string[];
}

export interface Author {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export type BlogCategory =
  | "guides"
  | "comparisons"
  | "design-tips"
  | "industry-insights"
  | "case-studies"
  | "production-process";

export interface BlogCategoryInfo {
  name: string;
  slug: BlogCategory;
  description: string;
  icon: string;
}
