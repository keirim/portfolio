import { AnimeItem } from "@/types/anime";

export const myAnime: AnimeItem[] = [
  {
    title: "Mushoku Tensei",
    rating: 5,
    status: "complete" as const,
    image: "/anime/Mushoku-Tensei-S2.jpg",
  },
  {
    title: "Re:Zero",
    rating: 4,
    status: "complete" as const,
    image: "/anime/Re-Zero.jpg",
  },
  {
    title: "Let This Grieving Soul Retire!",
    rating: 2,
    status: "watching" as const,
    image: "/anime/LetThisGrievingSoulRetire.jpg",
  },
];
