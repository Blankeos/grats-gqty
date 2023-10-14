/**
 * GQty AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  Boolean: true,
  String: true,
};
export const generatedSchema = {
  Author: {
    __typename: { __type: "String!" },
    books: { __type: "[Book!]" },
    id: { __type: "String" },
    name: { __type: "String" },
  },
  Book: {
    __typename: { __type: "String!" },
    author: { __type: "Author" },
    id: { __type: "String" },
    title: { __type: "String" },
  },
  mutation: {},
  query: {
    __typename: { __type: "String!" },
    author: { __type: "Author", __args: { id: "String!" } },
    authors: { __type: "[Author!]" },
    book: { __type: "Book", __args: { id: "String!" } },
    books: { __type: "[Book!]" },
    hello: { __type: "String" },
    test: { __type: "String" },
    wow: { __type: "String" },
  },
  subscription: {},
} as const;

/**
 * An author that owns books.
 */
export interface Author {
  __typename?: "Author";
  books?: Maybe<Array<Book>>;
  id?: Maybe<ScalarsEnums["String"]>;
  name?: Maybe<ScalarsEnums["String"]>;
}

/**
 * A Book that an author can own.
 */
export interface Book {
  __typename?: "Book";
  /**
   * The author associated with this book.
   */
  author?: Maybe<Author>;
  /**
   * Unique identifier for the author
   */
  id?: Maybe<ScalarsEnums["String"]>;
  title?: Maybe<ScalarsEnums["String"]>;
}

export interface Mutation {
  __typename?: "Mutation";
}

export interface Query {
  __typename?: "Query";
  author: (args: { id: Scalars["String"] }) => Maybe<Author>;
  authors?: Maybe<Array<Author>>;
  book: (args: { id: Scalars["String"] }) => Maybe<Book>;
  books?: Maybe<Array<Book>>;
  hello?: Maybe<ScalarsEnums["String"]>;
  test?: Maybe<ScalarsEnums["String"]>;
  wow?: Maybe<ScalarsEnums["String"]>;
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
