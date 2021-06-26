import rainIcon from "./icons/rain.png";
import coldIcon from "./icons/cold.png";
import sunIcon from "./icons/sun.png";

export const infos = {
  sun: {
    slug: "sun",
    title: "Temps ensoleillé",
    text: "Il fait beau aujourd'hui !",
    icon: sunIcon,
    temperature: 34.8,
    rain: 0,
    spotify: "7ijDwIGYwRMJ1BewVy0t6i",
    deezer: "3241145486",
  },
  rain: {
    slug: "rain",
    title: "Temps pluvieux",
    text: "Attention ! Prenez un parapluie ;)",
    icon: rainIcon,
    temperature: 13.4,
    rain: 1,
    spotify: "7oBDof2NS65O6RziUBgeRC",
    deezer: "2789833548",
  },
  cold: {
    slug: "cold",
    title: "Temps froid",
    text: "Brrrrrr, il fait froid...",
    icon: coldIcon,
    temperature: 6.2,
    rain: 0,
    spotify: "0no6AhEKdlfBy2TdFz4s9p",
    deezer: "2789798548",
  },
};
