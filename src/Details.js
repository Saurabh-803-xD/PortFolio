// Enter all your detials in this file

// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import rn from "./assets/techstack/rn.svg"
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/ui/github.svg";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import nextjs from "./assets/techstack/NextJsCircle.png"
import express from "./assets/techstack/Express.png"
import mongodb from "./assets/techstack/MongoDB.svg"
import cgpt from "./assets/techstack/icons8-chatgpt-64.png"
import vercel from "./assets/techstack/Vercel.svg"
import kafka from "./assets/techstack/kafka3.png"
import postgre from "./assets/techstack/postgre.png"
import redis from "./assets/techstack/redis.png"
// Porject Images
import project1 from "./assets/projects/chainvault.png"
import project2 from "./assets/projects/encryption.png"
import project3 from "./assets/projects/music_player.png"
import project4 from "./assets/projects/incognito.png"


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
  express: express,
  mongodb: mongodb,
  vercel:vercel,
  cgpt:cgpt,
  kafka:kafka,
  postgre:postgre,
  redis:redis,
  rn:rn
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
    title: "Music Player App",
    image: project3,
    description: `A music player app built using React Native allows users to play, pause, skip, and manage their music library seamlessly across both iOS and Android platforms.`,
    techstack: "React Native",
    previewLink: "https://github.com/Saurabh-803-xD/Music_player_RN",
    githubLink: "https://github.com/Saurabh-803-xD/Music_player_RN",
  },
  {
    title: "Encryption Decryption",
    image: project2,
    description: `This C++ project implements a robust encryption and decryption system designed to securely encode and decode sensitive data.`,
    techstack: "C++ ",
    previewLink: "https://github.com/Saurabh-803-xD/Encryption-Decryption",
    githubLink: "https://github.com/Saurabh-803-xD/Encryption-Decryption",
  },
  {
    title: "Incognito Chat App",
    image: project4,
    description: `A real time messaging application designed for scalability. I used Kafka and Redis to ensure the application could handle large-scale traffic.`,
    techstack: "NextJS, Kafka, Redis, Tailwind CSS",
    previewLink: "https://incognito-chat-app.vercel.app/",
    githubLink: "https://incognito-chat-app.vercel.app/",
  }
];