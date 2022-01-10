const API_KEY = process.env.API_KEY;

interface Data {
  [key: string]: {
    title: string;
    url: string;
  };

  fetchTrending: {
    title: string;
    url: string;
  };

  fetchTopRated: {
    title: string;
    url: string;
  };

  fetchActionMovies: {
    title: string;
    url: string;
  };

  fetchComedyMovies: {
    title: string;
    url: string;
  };

  fetchHorrorMovies: {
    title: string;
    url: string;
  };

  fetchRomanceMovies: {
    title: string;
    url: string;
  };

  fetchMystery: {
    title: string;
    url: string;
  };

  fetchSciFi: {
    title: string;
    url: string;
  };

  fetchWestern: {
    title: string;
    url: string;
  };

  fetchAnimation: {
    title: string;
    url: string;
  };

  fetchTV: {
    title: string;
    url: string;
  };
}

const data: Data = {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY as string}&language=en-US`,
  },

  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY as string}&language=en-US`,
  },

  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY as string}&with_genres=28`,
  },

  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY as string}&with_genres=35`,
  },

  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY as string}&with_genres=27`,
  },

  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY as string}&with_genres=10749`,
  },

  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY as string}&with_genres=9648`,
  },

  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY as string}&with_genres=878`,
  },

  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY as string}&with_genres=37`,
  },

  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY as string}&with_genres=16`,
  },

  fetchTV: {
    title: "TV Movie",
    url: `/discover/movie?api_key=${API_KEY as string}&with_genres=10770`,
  },
};

export default data;
