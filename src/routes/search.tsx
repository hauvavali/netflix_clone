import MovieCard from "@/components/MovieCard";
import { createFileRoute } from "@tanstack/react-router";

import useSearchStore from "@/store/searchStore";

type MovieSearch = {
  movie: string;
};

export const Route = createFileRoute("/search")({
  component: SearchComponent,
  validateSearch: (search: Record<string, unknown>): MovieSearch => {
    return {
      movie: (search.movie as string) || "",
    };
  },
});

function SearchComponent() {
  const { movie } = Route.useSearch();
  console.log("search query", movie);

  const results = useSearchStore((state) => state.results);
  console.log("search results from store: ", results);
  return (
    <div>
      {results.length > 0 ? (
        <div className="mt-8 p-8 grid grid-cols-fluid gap-6">
          {results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        "No results found"
      )}
    </div>
  );
}
