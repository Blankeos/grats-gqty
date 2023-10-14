/**
 * A fake database
 */

export const db = {
  authors: [
    {
      id: "author1",
      name: "Carlo Taleon",
      books: ["book1", "book2", "book3"],
    },
    {
      id: "author2",
      name: "Andrea V.",
      books: ["book4"],
    },
    {
      id: "author3",
      name: "Vicary",
      books: ["book5", "book6"],
    },
  ],
  books: [
    {
      id: "book1",
      title: "Why Dinosaurs are awesome.",
      authorId: "author1",
    },
    {
      id: "book2",
      title: "10 cent million offers!",
      authorId: "author1",
    },
    {
      id: "book3",
      title: "Top 100 Pokemon",
      authorId: "author1",
    },
    {
      id: "book4",
      title: "New Jeans Blue Jeans",
      authorId: "author2",
    },
    {
      id: "book5",
      title: "No-GQL Guidebook",
      authorId: "author3",
    },
    {
      id: "book5",
      title: "Atomic Hobbit",
      authorId: "author3",
    },
    {
      id: "book6",
      title: "Nice Book",
      authorId: "author3",
    },
  ],
};
