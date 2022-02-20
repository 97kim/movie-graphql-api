import { getMovies } from "./db.js";

let resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating)
  }
};

export default resolvers;
