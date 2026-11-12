import type { CategoriesType } from "@/entities/category";

export interface Inews {
  author: string;
  category: CategoriesType[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
}

export interface NewsApiResponse {
  news: Inews[];
  page: number;
  status: string;
}