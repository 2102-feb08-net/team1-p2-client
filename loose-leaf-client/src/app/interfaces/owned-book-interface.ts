import { Book } from "./book";

export interface OwnedBook {
    id : number;
    ownerId : number;
    condition : string;
    availability : string;
    book : Book;
}