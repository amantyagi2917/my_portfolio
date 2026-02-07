import HtmlLogo from '../assets/tech_logo/html.png'
import Bootstrap from '../assets/tech_logo/bootstrap.png'
import Express from '../assets/tech_logo/express.png';
import Github from '../assets/tech_logo/github.png';
import Javascript from '../assets/tech_logo/javascript.png';
import Momgodb from '../assets/tech_logo/mongodb.png';
import nodejs from '../assets/tech_logo/nodejs.png';
import postman from '../assets/tech_logo/postman.png';
import reactjs from '../assets/tech_logo/reactjs.png';
import tailwind from '../assets/tech_logo/tailwindcss.png';
import vscode from '../assets/tech_logo/vscode.png';
import css from '../assets/tech_logo/css.png'






export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', img: HtmlLogo },
      { name: 'CSS', img: css },
      { name: 'JavaScript', img: Javascript },
      { name: 'React JS', img: reactjs },
      { name: 'Tailwind CSS', img: tailwind },
      { name: 'Bootstrap', img: Bootstrap },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', img: nodejs },
      { name: 'Express JS', img: Express },
      { name: 'MongoDB', img: Momgodb },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', img: Javascript },
    ],
  },
  {
    title: 'Tools',
    skills: [

      { name: 'GitHub', img: Github },
      { name: 'VS Code', img: vscode },
      { name: 'Postman', img: postman },

    ],
  },
];


export const Education = [

  {
    school: "Future Finders — 6 Months",
    degree: "MERN Stack Developer Intern",
    desc: ` Completed intensive training in full-stack web development using MERN stack.
Learned MongoDB, Express.js, React.js, and Node.js for building full-stack applications.
 Built responsive web applications using React, Tailwind CSS, and JavaScript.
 Developed RESTful APIs using Node.js and Express.js.
 Worked with MongoDB for database design and CRUD operations.
 Implemented authentication and authorization using JWT.
 Used Git & GitHub for version control and project collaboration.`,
    grade: "",
    date: "22 August — 22 january"
  },

  {

    school: "shreee guru gobind singh ji government college paonta sahib",
    date: "Sept 2022 - April 2025",
    grade: "7.17 CGPA",
    desc: "I have completed my degree (BCA) in Bachelor of Computer Applications from digree college paonta Sahib,  During my time gdc , I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at digree college  has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Computer Applications - BCA",
  },
  {

    school: "SVN SR.SEC School Shyampur",
    date: "april 2021 - March 2022",
    grade: "71.6%",
    desc: "I completed my 12th from SVN SR.SEC School Shyampur ,under the hp board",
    degree: "Arts",
  },
  {

    school: "SVN SR.SEC School Shyampur",
    date: "April 2019 - March 2020",
    grade: "61%",
    desc: "I completed my class 10 education from SVN SR.SEC School Shyampur , under the hp board",
    degree:"metric"
  },
];
