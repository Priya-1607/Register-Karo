import React from "react";
import Button from "@mui/material/Button";
import "../Component/choose.css";
import fristSymbol from "../image/Symbol.png";
import secondSymbol from "../image/Symbol2.png";
import thirdSymbol from "../image/Symbol3.png";
import fourSymbol from "../image/Symbol4.png";

function Choose() {
  return (
    <div>
      {" "}
      <div className="mainDiv">
        <div className="regis">
          <p className="regipara orangepara">WELCOME TO REGISTERKARO.IN </p>
          <p className="abotpara">Why Choose Register Karo </p>
          <p className="subpara">
            It is with consistent services and results that build trust with the
            people and that in
            <br />
            turn help us to serve the business better.
          </p>
          <div className="sec">
            <div className="blueDiv">
              <img src={secondSymbol} alt="ssss" />
              <p className="mainHead1">Guaranteed Satisfaction</p>
              <p className="subHead">
              We ensure that you stay 100%<br/>
satisfied with our offered services
              </p>
            </div>

          
          </div>
          <div></div>
        </div>

        <div className="gropDiv">
          <div className="grop">

        <div className="pinkDiv">
              <img src={thirdSymbol} alt="ssss" />
              <p className="mainHead1">Expert CA/CS Assistance</p>
              <p className="subHead">
              Prompt support from our in-house<br/>
expert professionals
              </p>
            </div>

            <div className="greenDiv">
              <img src={fourSymbol} alt="ssss" />
              <p className="mainHead1">No Hidden Fee</p>
              <p className="subHead">
                Everything is put before you with
                <br />
                no hidden charges or conditions
              </p>
            </div>

            </div>

<div className="grop2">
            <div className="redDiv">
              <img src={fourSymbol} alt="ssss" />
              <p className="mainHead1">Confidential & Safe</p>
              <p className="subHead">
                All your private information is safe
                <br />
                with us
              </p>
            </div>
            
            <div className="greenDiv">
              <img src={fourSymbol} alt="ssss" />
              <p className="mainHead1">No Hidden Fee</p>
              <p className="subHead">
             Everything is put before you with
no hidden charges or conditions
              </p>
            </div>
            </div>
         
          </div>

         
        </div>
      </div>
  
  );
}

export default Choose;
