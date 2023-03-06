import PG from "../assets/screenshots/password.jpg";
import qr from "../assets/screenshots/qrcode.jpg";
import RPS from "../assets/screenshots/rps.jpg";
import split from "../assets/screenshots/split.jpg";
import wordle from "../assets/screenshots/wordle.jpg";
import url from "../assets/screenshots/zepto-url.jpg";

const cardData = [
  {
    id: 1,
    title: "Spliit",
    image: split,
    githubLink: "https://github.com/ShivaKodes/Split",
    deployedLink: "",
    description:
      "A bill splitting web app built using HTML, CSS, JS, Django and Sqlite",
  },

  {
    id: 2,
    title: "Password Generator",
    image: PG,
    githubLink: "https://github.com/ShivaKodes/Password-Generator",
    deployedLink: "https://good-password.netlify.app",
    description: "A custom password generator built using React and Tailwind",
  },
  {
    id: 3,
    title: "Rock Paper Scissor",
    image: RPS,
    githubLink: "https://github.com/ShivaKodes/rock-paper-scissor",
    deployedLink: "https://rock-pap-scissor.netlify.app",
    description: "Rock Paper Scissor game built using HTML, CSS and JS",
  },
  {
    id: 4,
    title: "QR Code Generator",
    image: qr,
    githubLink: "https://github.com/ShivaKodes/qr-code-generator",
    deployedLink: "https://generatesqrcode.netlify.app",
    description:
      "A simple site to generate QR code built using React, Tailwind and React-reveal",
  },

  {
    id: 5,
    title: "Wordle Clone",
    image: wordle,
    githubLink: "https://github.com/ShivaKodes/WordleGame",
    deployedLink: "",
    description:
      "A wordle clone with limited words built using HTML, CSS and JS",
  },
  {
    id: 6,
    title: "Zepto URL",
    image: url,
    githubLink: "https://github.com/ShivaKodes/zepto-url",
    deployedLink: "https://zepto-url.netlify.app",
    description: "A URL shortner built using React, Shrtcode API and Tailwind",
  },
];

export default cardData;
