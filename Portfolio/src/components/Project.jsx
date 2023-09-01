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
    },
    {
      name: "Drawing App",
      info: "lorem ipsum",
      infor:
        "Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipeto the cave-aged Swiss cheese, right down to the pickle. Theonly thing we didn't make on the premises is the toothpick (but we're looking into how to do that).Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipeto the cave-aged Swiss cheese, right down to the pickle. Theonly thing we didn't make on the premises is the toothpick (but we're looking into how to do that).",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6ENxkxVCwtdpGgxauOQTUEOrm-5WoTkgkg&usqp=CAU",
      link: "https://draw11.netlify.app/",
    },
    {
      name: "To-Do-React",
      info: "lorem ipsum",
      infor:
        "Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipeto the cave-aged Swiss cheese, right down to the pickle. Theonly thing we didn't make on the premises is the toothpick (but we're looking into how to do that).Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipeto the cave-aged Swiss cheese, right down to the pickle. Theonly thing we didn't make on the premises is the toothpick (but we're looking into how to do that).",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNnbslAgzAHsoBoeXUPaB5vi2tR9k7OrxlA&usqp=CAU",
      link: "https://todo11psy.netlify.app/",
    },
    {
      name: "PassWord Generator",
      info: "lorem ipsum",
      infor:
        "Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipeto the cave-aged Swiss cheese, right down to the pickle. Theonly thing we didn't make on the premises is the toothpick (but we're looking into how to do that).Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipeto the cave-aged Swiss cheese, right down to the pickle. Theonly thing we didn't make on the premises is the toothpick (but we're looking into how to do that).",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpwQVbKIP3LNdMU0ut4tbfedLKmX-7ofnUoQ&usqp=CAU",
      link: "ddkds",
    },
    {
      name: "PassWord Generator",
      info: "lorem ipsum",
      infor:
        "Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipeto the cave-aged Swiss cheese, right down to the pickle. Theonly thing we didn't make on the premises is the toothpick (but we're looking into how to do that).Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipeto the cave-aged Swiss cheese, right down to the pickle. Theonly thing we didn't make on the premises is the toothpick (but we're looking into how to do that).",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpwQVbKIP3LNdMU0ut4tbfedLKmX-7ofnUoQ&usqp=CAU",
      link: "ddkds",
    },
    {
      name: "PassWord Generator",
      info: "lorem ipsum",
      infor:
        "Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipeto the cave-aged Swiss cheese, right down to the pickle. Theonly thing we didn't make on the premises is the toothpick (but we're looking into how to do that).Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye bread baked from our secret recipeto the cave-aged Swiss cheese, right down to the pickle. Theonly thing we didn't make on the premises is the toothpick (but we're looking into how to do that).",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpwQVbKIP3LNdMU0ut4tbfedLKmX-7ofnUoQ&usqp=CAU",
      link: "ddkds",
    },
  ];
  return (
    <div>
      <p className="Project-title">Some Projects: </p>
      <div className="main">
        {ProjectsData.map((project, index) => (
          <ProjectC
            key={index}
            name={project.name}
            link={project.link}
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
