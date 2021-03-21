export interface Book {
  title: string;
  author: string;
  imageUrl: string;
  genres: string[];
  ownerUsername: string;
  isbn: ISBN;
  thumbnail: string;
}

interface ISBN {
  isbnValue: string;
}
