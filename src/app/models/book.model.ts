export interface Book {
  _id?: string; // valfri, används för update/delete
  title: string;
  author: string;
  publishedYear: number;
  genre: string;
}
