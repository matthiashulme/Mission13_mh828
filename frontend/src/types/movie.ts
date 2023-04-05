// Gathering and exporting the data from the api as specific data types with names to pull from

export type Movie = {
  movieId: number;
  category: string;
  title: string;
  year: number;
  director: string;
  rating: string;
  edited: string;
  lentTo: string;
  notes: string;
};
