// Enter all your detials in this file

// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/ui/github.svg";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import nextjs from "./assets/techstack/NextJsCircle.png"
import express from "./assets/techstack/Express.png"
import mongodb from "./assets/techstack/MongoDB.svg"
import c from "./assets/techstack/c++.png"
import java from "./assets/techstack/java.png"
import cgpt from "./assets/techstack/icons8-chatgpt-64.png"
import vercel from "./assets/techstack/Vercel.svg"
import kafka from "./assets/techstack/kafka3.png"
import postgre from "./assets/techstack/postgre.png"
import redis from "./assets/techstack/redis.png"
// Porject Images
import project1 from "./assets/projects/chainvault.png"
import project2 from "./assets/projects/ecommerce.png"
import project3 from "./assets/projects/passwordGen.png"
import project4 from "./assets/projects/weatherapp.png"


// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Master in Computer Applications",
    Company: "NIT Jamshedpur",
    Location: "Jamshedpur",
    Type: "Regular",
    Duration: "Aug 2022 - Present",
  },
  {
    Position: "Bachelor in Computer Applications",
    Company: "Jagran Institute",
    Location: "Kanpur",
    Type: "Regular",
    Duration: "Aug 2018 - 2021",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  nextjs : nextjs,
  c:c,
  java:java,
  express: express,
  mongodb: mongodb,
  vercel:vercel,
  cgpt:cgpt,
  kafka:kafka,
  postgre:postgre,
  redis:redis
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "ChainVault",
    image: project1,
    description: `ChainVault is a blockchain-based document storage and verification platform. Users can securely store and 
    authenticate documents on the blockchain. `,
    techstack: "ReactJS, ExpressJS, IPFS, BlockChain",
    previewLink: "https://chain-vault-five.vercel.app/",
    githubLink: "https://github.com",
  },
  {
    title: "UrbanFlow",
    image: project2,
    description: `UrbanFlow is a frontend e-commerce project featuring a user-friendly interface,
     personalized products, responsive design, and a diverse product catalog.`,
    techstack: "ReactJS, Tailwind CSS",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Saurabh-803-xD/Ecommerce-UrbanFlow",
  },
  {
    title: "Password Generator",
    image: project3,
    description: `Password Generator Project where users can input the desired password length, and receive 
    a randomly generated password containing letters, numbers, and special characters. `,
    techstack: "JavaScript, Tailwind ",
    previewLink: "https://password-generator-803.netlify.app/",
    githubLink: "https://github.com/Saurabh-803-xD/Password_Generator",
  },
  {
    title: "Weather App",
    image: project4,
    description: `This weather app displays current weather information based on user input (like city or zip code). It fetches data from a weather API.`,
    techstack: "JavaScript, API",
    previewLink: "https://main--weather-app-803.netlify.app/",
    githubLink: "https://github.com/Saurabh-803-xD/Weather_App",
  },
];