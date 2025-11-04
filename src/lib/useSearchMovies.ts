import useBaseMovieStore from "@/store/moviesStore";
import useSearchStore from "@/store/searchStore";
import { useState } from "react";
import performSearch from "./performSearch";

export function useSearchMovies() {
  const [shouldShowSearch, setShouldShowSearch] = useState(false);

  const baseMovies = useBaseMovieStore((state) => state.baseMovies);
  const setResults = useSearchStore((state) => state.setResults);

  const handleBlur = () => {
    setShouldShowSearch(false);
  };
  const handleSearchClick = () => {
    setShouldShowSearch(true);
  };

  const searchQuery = (query: string) => {
    const matchingTitles = performSearch(query, baseMovies);
    setResults(matchingTitles.data);
    console.log(matchingTitles.data);
  };

  return { handleBlur, handleSearchClick, searchQuery, shouldShowSearch };
}
