import React from "react";
import MyImage2 from "../image/back.png";
import MyImage3 from "../image/img.png";
import MyImage4 from "../image/one.png";
import Vector from "../image/Vector.png";
import vec1 from "../image/vec1.png";
import vec2 from "../image/vec2.png";
import vec3 from "../image/vec3.png";
import svg from "../image/svg.png";
import hand from "../image/hand.png";
import Button from "@mui/material/Button";
import you from "../image/you.png";
import val from "../image/val.png";
import ninty from "../image/ninty.png";
import twohun from "../image/twohun.png";

import "../Component/home.css";
import About from "./About";
function Home() {
  return (
    <>
      <div>
        <div className="home image-container">
          <img src={MyImage2} className="image-1" alt="img" />
          <div className="rat man image-2">
            <div className="con">
              <div className="man1">
                <img src={MyImage4} alt="img" className="rat1" />
                <h4 className="go">Google Rating</h4>
                <img src={MyImage3} alt="img" className="rat1" />
              </div>

              <div className="rat2">
                <div className="rat3">
                  <p className="go1">
                    Your trusted partner
                    <br />
                    for compliance business needs
                  </p>
                </div>
                <div></div>
                <p className="para">
                  An online business compliance platform that helps
                  entrepreneurs and <br />
                  other individuals with various,
                  <span className="re">registrations, tax filings, </span> and
                  other{" "}
                  <span className="lee">
                    legal <br />
                    matters.
                  </span>
                </p>
                <div className="cus">
                  <div>
                    <div >
                      <img src={Vector} alt />
                    </div>
                    <div >
                      <img src={vec1} alt />
                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={vec2} alt />
                    </div>
                    <div>
                      <img src={vec3} alt />
                    </div>
                  </div>

                  <div className="vec">
                    <img src={val} alt />
                    <div>Customer Rating</div>
                  </div>

                  <div></div>

                  <div>
                    <div className="svg">
                      <div className="svg1">
                        {" "}
                        <img src={svg} alt="img" />
                      </div>

                      <div>
                        <div>
                          <img src={ninty} alt="erwkjr" />
                        </div>
                        Clients
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="svg">
                      <div className="svg1">
                        <img src={hand} alt="img" />
                      </div>

                      {/* <div>
                  <img src={twohun} alt="ew"/>
                  </div>
                  <div>
                      Financial Stability
                      </div> */}

                      <div>
                        <div>
                          <img src={twohun} alt="erwkjr" />
                        </div>
                        Financial Stability
                      </div>
                    </div>
                  </div>
                </div>

              
            
              </div>
              <div className="footer1">
                  <div>
                  <Button
                    className="btn"
                    sx={{ backgroundColor: "#1C4670" }}
                    variant="contained"
                  >
                    Talk An Expert
                  </Button></div>
                  <div className="youtube">
                    <div className="www"> <img src={you} alt="ss" className="work" /></div>
                 <div className="see">See how it works</div> </div>
                </div>

            
            </div>
            
         


          </div>
          
        </div>
      </div>
     
    </>
  );
}

export default Home;
