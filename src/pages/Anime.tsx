import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader } from "@/components/Card";
import { StarRating } from "@/components/StarRating";
import { StatusBadge } from "@/components/StatusBadge";
import { myAnime } from "@/lib/anime";
import type { AnimeItem } from "@/types/anime";

export function Anime() {
  <Helmet>
    <title>Anime | Keiran</title>
    <meta name="description" content="Anime I've been watching" />
    <meta property="og:title" content="Anime | Keiran" />
    <meta
      property="og:description"
      content="Anime I've been watching"
    />
    <link rel="canonical" href="/" />
  </Helmet>;

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {myAnime.map((anime: AnimeItem, index) => (
          <motion.div
            key={anime.title}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card variant="hover" className="h-full">
              <motion.img
                src={anime.image}
                alt={anime.title}
                className="w-full h-48 object-cover rounded-t-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <CardHeader>
                <h2 className="text-xl font-semibold">{anime.title}</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <StarRating rating={anime.rating} />
                <StatusBadge status={anime.status} />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
