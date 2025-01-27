import React from "react";
import "../Component/video.css";
import firstDisplay from "../image/firstDisplay.png";
import secDisplay from "../image/secDisplay.png";
import youTube from "../image/youtube.png";
function Vedio() {
  return (
    <>
    <div className="videoman">
    <div className="video1">
      <div className="video">
        <div>
          <p className="intro">0ur Video Introductions</p>
          <p className="intropara">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna{" "}
            <br /> vulputate pellentesque a diam tincidunt apis dui.
          </p>
        </div>

       

        <div className="imgcon">
          <div className="diisimage">
            {" "}
            <img src={secDisplay} alt="ssss" />
          </div>
          <div>
            {" "}
            <p className="introsec">Explore ideas together</p>
            <p className="introsubpara">
              Engage audience segments and finally create actionable insights.
              <br /> Amplify vertical integration.
            </p>
          </div>
        </div>




        <div className="imgcon">
          <div className="diisimage">
            {" "}
            <img src={firstDisplay} alt="ssss" />
          </div>
          <div>
            {" "}
            <p className="introsec">Bring those ideas to life</p>
            <p className="introsubpara">
              Engage audience segments and finally create actionable insights.
              <br /> Amplify vertical integration.
            </p>
          </div>

         
        </div>





      </div>


      <div className="footer">
            <img src={youTube} alt="ssss" />
          </div>
          </div>
          </div>
    </>
  );
}

export default Vedio;
