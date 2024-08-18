import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SeasonsAnimeData } from "../interfaces/seasons";
import { AnimeFullData } from "../interfaces/anime";
import { CharacterData } from "../interfaces/characters";

export const animeApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jikan.moe/v4/" }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAnimeSeasonsNow: builder.query<SeasonsAnimeData, number>({
      query: (page = 1) => `seasons/now?page=${page}`,
      //   keepUnusedDataFor: 10,
    }),
    getAnimeFull: builder.query<AnimeFullData, number>({
      query: (id: number) => `anime/${id}/full`,
    }),
    getAnimeCharacters: builder.query<CharacterData, number>({
      query: (id: number) => `anime/${id}/characters`,
    }),
    getAnimeCharacter: builder.query({
      query: (id: number | null) => `characters/${id}/full`,
    }),
    getAnimeEpisodes: builder.query({
      query: (id: number) => `anime/${id}/episodes`,
    }),
    getAnimeEpisodeById: builder.query({
      query: ({ animeId, id }) => `anime/${animeId}/episodes/${id}`,
    }),
  }),
});

export const {
  useGetAnimeSeasonsNowQuery,
  useGetAnimeFullQuery,
  useGetAnimeCharactersQuery,
  useGetAnimeCharacterQuery,
  useGetAnimeEpisodesQuery,
  useGetAnimeEpisodeByIdQuery,
} = animeApi;
