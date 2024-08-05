const API_BASE_URL = "https://swapi.dev/api/people/";
interface CharacterCard {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}
interface SearchResult {
  count: number;
  next: string;
  previous: null;
  results: CharacterCard[];
}

export const fetchItems = async (
  searchTerm: string = "",
  page: number = 1
): Promise<SearchResult> => {
  const response = await fetch(
    `${API_BASE_URL}?search=${searchTerm}&page=${page}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
