import { InfoCard } from "./InfoCard";

const cardData = [
  {
    title: "About Me",
    content:
      "I am a Full Stack Developer from the UK and my passion is creating high quality services people enjoy! I have experience in a variety of languages, frameworks, technologies, etc. My goals are a little obscure, since I'm still figuring out what I enjoy but at the moment I am mostly interested in just creating high quality open source projects that people find interesting!",
  },
  {
    title: "Experience",
    content:
      "Although most of my experience is in the JavaScript ecosystem, I have a passionate hatred for it. I enjoy writing software much more fun, especially in Rust and Go. I started my journey working with Python and V among others, but am attempting to learn more low level languages such as C, Rust and (unfortunately) C++ among a few others I have explored in my spare time",
  },
  {
    title: "Goals",
    content:
      "I aim to build scalable, performant applications in a variety of areas, and have experience building for not only the web but also native apps on many operating systems - even the CLI! I aim to bring nothing but the best that I can build to every single device capable of rendering UI... Well, almost. Swift is painful. I would like to work with IOS and MacOS soon!",
  },
];

export function InfoSection() {
    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl">
            {cardData.map((card, index) => (
                <InfoCard key={index} {...card} />
            ))}
        </div>
    );
}