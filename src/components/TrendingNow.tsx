import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import useSearchStore from "@/store/searchStore";

const TrendingNow = () => {
  const token = import.meta.env.VITE_TMDB_AUTH_TOKEN;
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("null");
  const [loading, setLoading] = useState(true);
  const setResults = useSearchStore((state) => state.setResults);

  const API_URL =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

  const fetchTrendingMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log("trending movies data :", data);
      setMovies(data.results);
      setError("null");
      setResults(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching trending Movies : ", error);
      setError("failed to fetch trending movies");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return (
    <div className="px-6 mt-6">
      <h3> Trending Now</h3>
      {error && <div className="text-red-500">{error}</div>}
      {loading && <div className="text-red-500">{loading}</div>}

      <div className="container mx-auto my-4">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default TrendingNow;
