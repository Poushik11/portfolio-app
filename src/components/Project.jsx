import ProjectC from "./ProjectC";
import "../styles/Project.css";

//Added a test comment
function Project() {
  const ProjectsData = [
    {
      name: "Expand Cards",
      info: "lorem ipsum",
      infor:
        "Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipeto the cave-aged Swiss cheese, right down to the pickle. Theonly thing we didn't make on the premises is the toothpick (but we're looking into how to do that).",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYf767AtEqCxToSV_4QdqGqq4MEudroV6SKA&usqp=CAU",
      link: "ddkds",
      git: "google.com",
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
      name: "PassWord Generator",
      info: "HTML,JS,CSS",
      infor:
        "Welcome to our Password Generator Project! In this very Basic web application, with the help of HTML, CSS, and JavaScript to provide you with a convenient tool for generating strong and secure passwords. Whether you need a password for your email, social media, or any other online account, our password generator has got you covered.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpwQVbKIP3LNdMU0ut4tbfedLKmX-7ofnUoQ&usqp=CAU",
      link: "ddkds",
      git: "google.com",
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
      name: "Movie Watch",
      info: "lorem ipsum",
      infor:
        "Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipeto the cave-aged Swiss cheese, right down to the pickle. Theonly thing we didn't make on the premises is the toothpick (but we're looking into how to do that).Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipeto the cave-aged Swiss cheese, right down to the pickle. Theonly thing we didn't make on the premises is the toothpick (but we're looking into how to do that).",
      image:
        "https://beautifulpixels.com/wp-content/uploads/2017/06/watchlist-ss-12.png",
      link: "ddkds",
      git: "google.com",
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
