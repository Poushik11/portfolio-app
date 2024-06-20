import ProjectC from "./ProjectC";

import "../styles/Project.css";
import publmang from "../images/publication.png";
import housJun from "../images/home-junction.png";
import trendfeed from "../images/trendfeed.png";

function Project() {
  const ProjectsData = [
    {
      name: "Trend Feed",
      info: "Context,Redux,Api",
      infor:
        "TrendFeed is a dynamic news platform built using React and Context API, leveraging the NewsAPI for real-time updates. Users can browse and categorize news articles across various topics, as well as switch between multiple languages for a personalized reading experience. TrendFeed ensures a seamless and responsive interface, providing the latest news tailored to user preferences.",
      image: { trendfeed },
      // image:
      //   "https://private-user-images.githubusercontent.com/115363626/333496910-61ca1a67-8306-4cc0-917e-4e6c2831ab76.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgwMjQ1MzAsIm5iZiI6MTcxODAyNDIzMCwicGF0aCI6Ii8xMTUzNjM2MjYvMzMzNDk2OTEwLTYxY2ExYTY3LTgzMDYtNGNjMC05MTdlLTRlNmMyODMxYWI3Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYxMFQxMjU3MTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ZTg5Y2EzZDJjMTVkODBlN2Q0ZTY5NDk2MmJhNjUzMTNlYjc4ODYwODhhZDYxNzJiOTA5ZjQ2ZjVlYTI2MDNlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.--4LswoEMAg1k5XlBhZYjZFYG1zeaTWO8ojbyZpTPSM",
      link: "https://github.com/Poushik11/TrendFeed",
      git: "https://github.com/Poushik11/TrendFeed",
    },
    {
      name: "Drawing App",
      info: "Canvas,HTML,CSS,JS",
      infor:
        "Welcome to The Drawing App! This easy-to-use application, made in Canvas, lets you have fun creating and playing with different shapes and colors.you can create and manipulate various shapes to bring your creativity to life. It's a straightforward way to have some artistic fun!",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6ENxkxVCwtdpGgxauOQTUEOrm-5WoTkgkg&usqp=CAU",
      link: "https://draw11.netlify.app/",
      git: "google.com",
    },
    {
      name: "To-Do-React",
      info: "React",
      infor:
        "Please make sure to create a comprehensive to-do list for the day, outlining all the tasks and activities you need to complete.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNnbslAgzAHsoBoeXUPaB5vi2tR9k7OrxlA&usqp=CAU",
      link: "https://todo11psy.netlify.app/",
      git: "https://github.com/Poushik11/To-Do-React",
    },
    {
      name: "Home Junction",
      info: "Firebase, React , Slick",
      infor:
        "HomeJunction is a modern web app built with React and Firebase, designed for selling or renting properties. Leveraging geolocation APIs, it helps users find nearby listings with ease. Users can contact landlords directly, as well as update, delete, and manage property details seamlessly.",
      image: { housJun },
      // image:
      //   "https://private-user-images.githubusercontent.com/115363626/338192749-aaf61e57-51cc-4df4-be43-53400f113220.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgwMjQ2MzMsIm5iZiI6MTcxODAyNDMzMywicGF0aCI6Ii8xMTUzNjM2MjYvMzM4MTkyNzQ5LWFhZjYxZTU3LTUxY2MtNGRmNC1iZTQzLTUzNDAwZjExMzIyMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYxMFQxMjU4NTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00ODhlYzBlNmU5Y2I4OTkzMGE4ZTdhNzk0OThiYzUwZWVlZDJiZjVkMjQ2ODU3YmEwZjE5ZWQ4MDQzN2RjYzQ5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.RoPjk_bz6w2cftHd9ngWSYWO_7AArnEr-05b7tp8qow",
      link: "https://home-junction.netlify.app/",
      git: "https://github.com/Poushik11/HomeJunction",
    },
    {
      name: "Expense Tracker",
      info: "React(Hooks)",
      infor:
        "Introducing our Expense Tracker project, built with React and using state hooks. This application simplifies the process of tracking expenses among friends. Easily keep a record of who owes what, making it a handy tool for maintaining financial transparency and ensuring everyone's expenses are accounted for.",
      image:
        "https://blog.sheetgo.com/wp-content/uploads/2020/08/finance-processes-blog-images-05.png",
      link: "https://poushik-s-projects.web.app/",
      git: "google.com",
    },
    {
      name: "Publication Management",
      info: " NextJS,Context,Nodemailer,Tailwind ",
      infor:
        "This project proposes a user-friendly software solution that streamlines data entry, organization, and simplifies reporting by allowing selection of required columns. By providing role-based access and customizable reports, the system empowers faculty and administrators to efficiently manage publication data, ultimately showcasing the college's research achievements. element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipeto the cave-aged Swiss cheese, right down to the pickle. Theonly thing we didn't make on the premises is the toothpick (but we're looking into how to do that).Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipeto the cave-aged Swiss cheese, right down to the pickle. Theonly thing we didn't make on the premises is the toothpick (but we're looking into how to do that).",
      image: { publmang },
      // image:
      //   "https://private-user-images.githubusercontent.com/115363626/338200883-a47e4698-01e3-46dd-9e27-dba5ddd2783c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgwMjU2MTcsIm5iZiI6MTcxODAyNTMxNywicGF0aCI6Ii8xMTUzNjM2MjYvMzM4MjAwODgzLWE0N2U0Njk4LTAxZTMtNDZkZC05ZTI3LWRiYTVkZGQyNzgzYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYxMFQxMzE1MTdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00NjEzMzkyNTlhZjkzMTNlZWM4ZjU4NGE0ZDNjZjViYzkwMDI0MDQwYzI4OTUwMWY2ZTc3NDNkYzhkMjhkODM1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.FptaspSYtyqBVvsSoQ7JkyUTJ0BbWNEW9wAabUOStvk",
      link: "https://publication-management.vercel.app/",
      git: "/",
    },
    {
      name: "Realtime Chat Application",
      info: "Socker.io,React,NodeJS",
      infor:
        "This is a real-time chat app using Socket.IO and React.This app allows users to send and receive messages instantly. Socket.IO handles real-time WebSocket communication, while React provides the interactive user interface",
      // image:
      //   "https://private-user-images.githubusercontent.com/115363626/333496910-61ca1a67-8306-4cc0-917e-4e6c2831ab76.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgwMjQ1MzAsIm5iZiI6MTcxODAyNDIzMCwicGF0aCI6Ii8xMTUzNjM2MjYvMzMzNDk2OTEwLTYxY2ExYTY3LTgzMDYtNGNjMC05MTdlLTRlNmMyODMxYWI3Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYxMFQxMjU3MTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05ZTg5Y2EzZDJjMTVkODBlN2Q0ZTY5NDk2MmJhNjUzMTNlYjc4ODYwODhhZDYxNzJiOTA5ZjQ2ZjVlYTI2MDNlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.--4LswoEMAg1k5XlBhZYjZFYG1zeaTWO8ojbyZpTPSM",
      link: "https://github.com/Poushik11/RealTime-Chat-Application",
      git: "https://github.com/Poushik11/RealTime-Chat-Application",
    },
  ];
  return (
    <div>
      <p className="trans">Some Projects: </p>

      <div className="main" id="project">
        {ProjectsData.map((project, index) => (
          <ProjectC
            key={index}
            name={project.name}
            link={project.link}
            git={project.git}
            image={project.image}
            info={project.info}
            infor={project.infor}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
