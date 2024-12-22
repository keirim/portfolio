import { AnimeStatus } from "@/types/anime";

const statusColors: Record<AnimeStatus, string> = {
  complete: "bg-green-500",
  watching: "bg-blue-500",
  planning: "bg-yellow-500",
  dropped: "bg-red-500",
};

interface StatusBadgeProps {
  status: AnimeStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`${statusColors[status]} px-3 py-1 rounded-full
            text-primary text-sm font-medium capitalize`}
    >
      {status}
    </span>
  );
}
