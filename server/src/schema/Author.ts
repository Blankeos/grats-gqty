import { db } from "../db";
import { Book } from "./Book";

/**
 * An author that owns books.
 * @gqlType
 */
export class Author {
  author: (typeof db.authors)[number];

  /**
   * Unique identifier for the author
   * @gqlField
   */
  constructor(id: string) {
    this.id = id;
    const found = db.authors.find((author) => author.id === this.id);
    if (!found) throw Error("Author not found.");

    this.author = found;
  }

  /** @gqlField */
  id: string;

  /** @gqlField */
  name(): string {
    return this.author.name;
  }

  /** @gqlField */
  books(): Book[] {
    return this.author.books.map((bookId) => new Book(bookId));
  }
}
