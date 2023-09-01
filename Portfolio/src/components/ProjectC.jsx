import "../styles/Project.css";
// eslint-disable-next-line react/prop-types
function ProjectC({ name, link, image, info, infor }) {
  return (
    <div className="cards_item">
      <div className="card-block">
        <div className="card_image">
          <img src={image} />
          <span className="card_price">
            <a href={link}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/126/126538.png"
                alt="GO"
              />
            </a>
          </span>
        </div>
        <div className="card_content">
          <h2 className="card_title">{name}</h2>
          <div className="card_text">
            <p>{info}</p>
            <hr />
            <p>{infor}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectC;
