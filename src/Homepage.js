import React, { useState } from "react";
import PDFViewer from "pdf-viewer-reactjs";
import "./Homepage.css";

function Homepage() {
  const [file, setFile] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleClick = () => {
    setFile("");
    setSuccess(true);
  };

  return (
    <div className="homepage">
      <div className="homepage__img">
        {file ? (
          <PDFViewer
            document={{
              url: URL.createObjectURL(file),
            }}
          />
        ) : (
          <div className="id_instructions">
            {success ? (
              <div>
                <h1
                  style={{
                    color: "white",
                    margin: "15px",
                    position: "absolute",
                    top: "30px",
                    left: "auto",
                    right: "auto",
                  }}
                >
                  Uploaded Successfully
                </h1>
                <img src="success.svg" alt="id" />
              </div>
            ) : (
              <div>
                <h3 style={{ color: "white", margin: "5px" }}>
                  Please upload a pdf file of your Id Card
                </h3>
                <img src="idcard.svg" alt="id" />
              </div>
            )}
          </div>
        )}
      </div>

      <div className="homepage__btns">
        <div className="btns">
          <input
            className="ip"
            onChange={handleChange}
            type="file"
            accept="application/pdf"
          />
          <button onClick={handleClick} className="upload__btn">
            Upload File
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
