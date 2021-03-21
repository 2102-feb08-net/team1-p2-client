import { Book } from "./book-interface";

export interface OwnedBook {
    id : number;
    ownerId : number;
    condition : string;
    availability : string;
    book : Book;
}