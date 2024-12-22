import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface SocialProps {
  icon: IconType;
  href: string;
  label: string;
}

export function Social({ icon: Icon, href, label }: SocialProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="text-primary hover:text-primary/80 transition-colors duration-200"
    >
      <Icon className="w-6 h-6" />
    </motion.a>
  );
}
