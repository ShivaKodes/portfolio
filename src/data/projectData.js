import wordle from "../assets/wordle.png";
import split from "../assets/spliit.png";
import qr from "../assets/qr.png";
import pwd from "../assets/pwd.png";
import zepto from "../assets/zepto.png";

export const projectData = [
  {
    id: 1,
    name: "Spliit",
    description: "A bill splitting web app",
    image: split,
    github: "github.com/ShivaKodes/Split",
    live: "",
    color: "#8c8c8c",
    tech: [
      {
        id: 1,
        name: "HTML",
      },
      {
        id: 2,
        name: "Tailwind",
      },
      {
        id: 3,
        name: "Django",
      },
      {
        id: 4,
        name: "Sqlite",
      },
      {
        id: 1,
        name: "HTML",
      },
    ],
  },
  {
    id: 2,
    name: "Zepto URL",
    description: "A URL shortner site built using shrtcode API",
    image: zepto,
    github: "github.com/ShivaKodes/zepto-url",
    live: "zepto-url.netlify.app",

    color: "#000000",
    tech: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "Tailwind",
      },
      {
        id: 3,
        name: "shrtcode API",
      },
      {
        id: 4,
        name: "JavaScript",
      },
    ],
  },
  {
    id: 3,
    name: "Wordle Clone",
    description: "A wordle clone built using pure HTML, CSS and Javascript",
    image: wordle,
    github: "github.com/ShivaKodes/WordleGame",
    live: "",
    color: "#efe8d3",
    tech: [
      {
        id: 1,
        name: "HTML",
      },
      {
        id: 2,
        name: "CSS",
      },
      {
        id: 3,
        name: "JavaScript",
      },
    ],
  },
  {
    id: 4,
    name: "QR Code Generator",
    description: "A QR code generator built using react-qrcode package ",
    image: qr,
    github: "github.com/ShivaKodes/qr-code-generator",
    live: "generatesqrcode.netlify.app",
    color: "#706d63",
    tech: [
      {
        id: 1,
        name: "React",
      },
      {
        id: 2,
        name: "Tailwind",
      },
      {
        id: 3,
        name: "react-qrcode",
      },
    ],
  },
  {
    id: 5,
    name: "Password Generator",
    description: "A password generator using vanila JavaScript",
    image: pwd,
    github: "github.com/ShivaKodes/Password-Generator",
    live: "good-password.netlify.app",
    color: "#706d63",
    tech: [
      {
        id: 1,
        name: "HTML",
      },
      {
        id: 2,
        name: "Tailwind",
      },
      {
        id: 3,
        name: "JavaScript",
      },
    ],
  },
];
