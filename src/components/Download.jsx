const Download = () => {
  const onButtonClick = () => {
    const pdfUrl =
      "https://drive.usercontent.google.com/download?id=1vIJIa9BV0C9aLuIMOy_CgqAF25UCPI9k&export=download";
    const link = document.createElement("a");
    link.href = pdfUrl;
    window.open(pdfUrl, "_blank");
    link.download = "Resume_.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <center>
        <button onClick={onButtonClick}>Resume Download</button>
      </center>
    </>
  );
};

export default Download;
