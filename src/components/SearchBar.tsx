import { Search } from "lucide-react";
import { useState , useMemo} from "react";
import debounce from "lodash.debounce"
import MovieData from "../data/mockdata.json";
import type { Movie } from "@/types";

export default function SearchBar() {
  const [shouldShowSearch, setShouldShowSearch] = useState(false);

  const debouncedSearch = useMemo(
    () =>
      debounce((query: string) => {
        if (!query.trim()) return;
        const results = MovieData.results.filter((movie: Movie) =>
          movie.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log("Search results:", results);
      }, 500),
    []
  );

  const handleBlur = () => setShouldShowSearch(false);

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const query = event.target.value;
    debouncedSearch(query); 
  };

  return (
    <div className="flex items-center gap-2 focus:outline-white">
      {shouldShowSearch && (
        <input
          className="bg-transparent text-white placeholder:text-white/90 text-sm focus:outline-none flex-1 font-normal py-4 px-4"
          type="text"
          placeholder="Titles, people, genres"
          aria-label="Search"
          onChange={handleSearchQueryChange}
          onBlur={handleBlur}
          autoFocus
        />
      )}
      <button onClick={() => setShouldShowSearch(true)}>
        <Search />
      </button>
    </div>
  );
}
