export interface Book {
  id : number
  title: string;
  author: string;
  imageUrl: string;
  genres: string[];
  ownerUsername: string;
  isbn: ISBN;
  thumbnail: string;
}

export interface ISBN {
  isbnValue: string;
}
