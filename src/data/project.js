import project1 from '../assets/images/project1.webp';
import project2 from "../assets/images/project2.webp";
import project3 from "../assets/images/project3.webp";


export const PROJECT_LIST = [
  {
    title: "E-commerce website",
    desc: "My first project, imitating real business-oriented transaction functionality. Built with React, React-router, React Redux and AWS.",
    imageSrc: project1,
    demoUrl: "https://d1gz61wtdrsgth.cloudfront.net",
    githubUrl: "https://github.com/ChiuYuan0214/ecommerce-website-practice",
    tags: [
      "React",
      "React-router",
      "Custom Hook",
      "AWS Cognito",
      "React-redux",
      "AWS API Gateway",
      "AWS DynamoDB",
      "AWS Cloudfront",
      "AWS S3",
    ],
  },
  {
    title: "Calender and Expenses",
    desc: "My second project, including calendar calculating function, drag and drop event and some ohter animation. Built with React and transition-group.",
    imageSrc: project2,
    demoUrl: "https://chiuyuan0214.github.io/calendar/",
    githubUrl: "https://github.com/ChiuYuan0214/calendar",
    tags: ["React", "React-transition-group", "TypeScript", "onDrag", "onDrop"],
  },
  {
    title: "Portfolio web page",
    desc: "My third project, for presentation purpose, dived a little bit deeper in DOM, such as scroll event and getBoundingClientRect. Afterall, learned a lot about layout arrangement during the process.",
    imageSrc: project3,
    demoUrl: "https://chiuyuan0214.github.io/portfolio-page/",
    githubUrl: "https://github.com/ChiuYuan0214/ecommerce-website-practice",
    tags: ["React", "React-transition-group", "onScroll"],
  },
];
