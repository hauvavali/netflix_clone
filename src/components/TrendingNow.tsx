import MovieList from "./MovieList";
import MovieData from "../data/mockdata.json";

const TrendingNow = () => {
  return (
    <div className="px-6 mt-6">
      <h3> Trending Now</h3>

      {MovieData?.results?.length > 0 ? (
        <MovieList movies={MovieData.results} />
      ) : (
        <div> No movies were found </div>
      )}
    </div>
  );
};

export default TrendingNow;
