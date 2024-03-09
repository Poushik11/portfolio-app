import "../styles/Task.css";

const Download = () => {
  const onButtonClick = () => {
    const pdfUrl =
      "https://drive.usercontent.google.com/download?id=1vIJIa9BV0C9aLuIMOy_CgqAF25UCPI9k&export=download";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume_.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <center>
      <button onClick={onButtonClick} className="resume">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAguRg3K5v-Fggp3DmZY3jhm3-c-DaRePlLA&usqp=CAU"
          alt="Download Resume"
          style={{ width: "50%", height: "50%" }}
        />
      </button>
    </center>
  );
};

export default Download;
