import { db } from "../db";
import { Author } from "./Author";

/**
 * A Book that an author can own.
 * @gqlType
 */
export class Book {
  book: (typeof db.books)[number];

  __typename = "Book";
  constructor(
    /** @gqlField */
    id: string
  ) {
    this.id = id;
    const found = db.books.find((book) => book.id === this.id);

    if (!found) throw Error("Book not found by ID.");

    this.book = found;
  }

  /**
   * Unique identifier for the author
   * @gqlField
   */
  id: string;

  /**
   * @gqlField
   */
  title(): string {
    return this.book.title;
  }

  /**
   * The author associated with this book.
   * @gqlField
   */
  author(): Author {
    return new Author(this.book.authorId);
  }
}
