export type AnimeStatus = "complete" | "watching" | "planning" | "dropped";

export interface AnimeItem {
  title: string;
  rating: number;
  status: AnimeStatus;
  image: string;
}
