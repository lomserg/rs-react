import React from "react";
import axios from "axios";

const API_BASE_URL = "https://swapi.dev/api/people/";

interface SearchResult {
  count: number;
  next: string;
  previous: null;
  results: CharacterCard[];
}
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
async function GetPeopleApi(
  searchTerm: string = "Luke",
  page: number = 1
): Promise<SearchResult> {
  const response = await fetch(
    `${API_BASE_URL}?search=${searchTerm}&page=${page}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
export default GetPeopleApi;
