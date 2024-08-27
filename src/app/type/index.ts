// Định nghĩa kiểu cho Category
interface Category {
  _id: string;
  title: string;
  slug: string;
  parentCategory: string | null;
  image: string;
  status: "ACTIVE" | "INACTIVE";
}

interface Tag {
  _id: string;
  title: string;
  slug: string;
  description: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: string;
  content: string;
  category: Category;
  tags: Tag[];
  excerpt: string;
  featuredImage: string;
  publishedDate: string;
  viewCount: number;
  commentsEnabled: boolean;
  metaDescription: string;
  metaKeywords: string[];
  visibility: "PUBLIC" | "PRIVATE";
}

export interface PostsResponse {
  data: Post[];
}
