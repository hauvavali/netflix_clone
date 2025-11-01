import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MovieCard from "./components/MovieCard";
import TrendingNow from "./components/TrendingNow";
import useSearchStore from "./store/searchStore";

function App() {
  const results = useSearchStore((state) => state.results);
  console.log("search results :", results);

  return (
    <main>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header />
        {results.length > 0 ? (
          <div className="mt-8 p-8 grid grid-cols-fluid gap-6">
            {results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <>
            <Hero />
            <TrendingNow />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
