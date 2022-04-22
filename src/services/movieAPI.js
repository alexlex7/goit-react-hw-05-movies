export const getTrendingMovies = () => {
  return fetch(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=0a0eacc01c98f8ef04ac7ca82867ea4e'
  )
    .then(resp => resp.json())
    .then(({ results }) => {
      const movies = results.map(({ id, title }) => ({ id, title }));
      return movies;
    });
};

export const getMovieById = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=0a0eacc01c98f8ef04ac7ca82867ea4e&language=en-US`
  ).then(resp => resp.json());
};

export const getReviews = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=0a0eacc01c98f8ef04ac7ca82867ea4e&language=en-US&page=1`
  )
    .then(resp => resp.json())
    .then(data => {
      const reviews = data.results.map(({ id, author, content }) => ({
        id,
        author,
        content,
      }));
      return reviews;
    });
};

export const getCast = id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=0a0eacc01c98f8ef04ac7ca82867ea4e&language=en-US&page=1`
  )
    .then(resp => resp.json())
    .then(({ cast }) => {
      const credits = cast.map(({ character, name, profile_path, id }) => ({
        character,
        name,
        profile_path,
        id,
      }));
      return credits;
    });
};

export const getMoviesByName = searchQuery => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=0a0eacc01c98f8ef04ac7ca82867ea4e&language=en-US&page=1&include_adult=false&query=${searchQuery}`
  )
    .then(resp => resp.json())
    .then(({ results }) => {
      const movies = results.map(({ id, title }) => ({ id, title }));
      return movies;
    });
};
