import { Book } from "./Book";
import { Author } from "./Author";
import { db } from "../db";

/** @gqlType */
export class Query {
  /** @gqlField */
  hello(): string {
    return "Hello world!";
  }
  /** @gqlField */
  test(): string {
    return "what";
  }
  /** @gqlField */
  wow(): string {
    return "huh";
  }
  /** @gqlField */
  book(args: { id: string }): Book {
    return new Book(args.id);
  }
  /** @gqlField */
  author(args: { id: string }): Author {
    return new Author(args.id);
  }

  /** @gqlField */
  books(): Book[] {
    return db.books.map((book) => new Book(book.id));
  }

  /** @gqlField */
  authors(): Author[] {
    return db.authors.map((author) => new Author(author.id));
  }
}
