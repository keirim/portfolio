import { motion } from "framer-motion";
import { ProfileHeader } from "@/components/ProfileHeader";
import { InfoSection } from "@/components/InfoSection";
import { Social } from "@/components/SocialIcon";
import { FaGithub, FaDiscord, FaYoutube, FaUserCircle } from "react-icons/fa";
import { IoCloudUpload } from "react-icons/io5";
import { Helmet } from "react-helmet-async";

function App() {
  <Helmet>
    <title>Home | My Portfolio</title>
    <meta name="description" content="Welcome to my personal portfolio" />
    <meta property="og:title" content="Home | Keiran" />
    <meta
      property="og:description"
      content="Welcome to my personal portfolio"
    />
    <link rel="canonical" href="/" />
  </Helmet>;

  return (
    <motion.div
      className="container mx-auto px-4 py-4 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ProfileHeader />
      </motion.div>

      <motion.div
        className="flex gap-4 mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Social
          icon={FaUserCircle}
          href="https://bio.keiran.cc"
          label="Personal Bio"
        />
        <Social
          icon={FaGithub}
          href="https://github.com/keirim"
          label="GitHub Profile"
        />
        <Social
          icon={FaDiscord}
          href="https://discord.com/users/1230319937155760131"
          label="Discord Profile"
        />
        <Social
          icon={FaYoutube}
          href="https://youtube.com/@keiranscript"
          label="YouTube Profile"
        />
        <Social
          icon={IoCloudUpload}
          href="https://keiran.cc"
          label="AnonHost Website"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <InfoSection />
      </motion.div>
    </motion.div>
  );
}

export default App;
