import { Review } from "./Review";

// This might not be necessary as we have schema from the DB.
// Can extract types from the schema.

export type Road = {
  title: string;
  location: string;
  reviews: Review[];
  reviewAvgRating: number;
  roadLength: number;
  roadTime: number;
};
