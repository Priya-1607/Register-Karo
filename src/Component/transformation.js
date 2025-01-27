import React from "react";
import "../Component/transform.css";
import image from "../image/Image.png";
import arrow from "../image/IconWrap.png";
import Button from "@mui/material/Button";
import image1 from "../image/Image1.png";
import image2 from "../image/Image2.png";
import image3 from "../image/Image3.png";
import image4 from "../image/Image4.png";
import image5 from "../image/Image5.png";

function Transformation() {
  return (
    <>
      <div className="trans">
        <p className='orangepara'>EXPLORE OUR BLOGS</p>
        <p className='mainHeading'> Accelerate Digital Transformation</p>
      </div>
      <div className="trans1">
        <div>
          <img src={image} alt="djkhh" />
          <p className="date">Prabhash Mishra • 1 Jan 2023 • Today</p>
          <div className="arrow">
            <div>
              <p className='mainsubpara'>
              Small business & Startup{" "}</p>
              <p className="seqpar">
                Like to know the secrets of transforming a 2-14 team <br /> into
                a 3x Super Bowl winning Dynasty?
              </p>
              <div className="btgrp">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(249, 245, 255, 1)",
                    color: "rgba(105, 65, 198, 1)",
                    borderRadius: "30px",
                    fontSize: "10px",
                  }}
                >
                  Tax & Audit
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(248, 249, 252, 1)",
                    color: "rgba(54, 63, 114, 1)",
                    borderRadius: "30px",
                    fontSize: "10px",
                  }}
                >
                  Management
                </Button>
              </div>
            </div>
            <div></div>
            <div>
              <img src={arrow} alt="ee" className="arricon" />
            </div>
          </div>
        </div>


        <div>
          <img src={image1} alt="djkhh" />
          <p className="date">Mahesh Kumar • 1 Jan 2023</p>
          <div className="arrow">
            <div>
              <p className='mainsubpara'>
              Scale-Up Company Offer{" "}</p>
              <p>
                Mental models are simple expressions of complex <br /> processes
                or relationships.
              </p>
              <div className="btgrp">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(240, 249, 255, 1)",
                    color: "rgba(2, 106, 162, 1)",
                    borderRadius: "30px",
                    fontSize: "10px",
                  }}
                >
                  Tax
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(238, 244, 255, 1)",
                    color: "rgba(53, 56, 205, 1)",
                    borderRadius: "30px",
                    fontSize: "10px",
                  }}
                >
                  Research
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(255, 246, 237, 1)",
                    color: "rgba(196, 50, 10, 1)",
                    borderRadius: "30px",
                    fontSize: "10px",
                  }}
                >
                  Complience
                </Button>
              </div>
            </div>
            <div></div>
            <div>
              <img src={arrow} alt="ee" className="arricon"/>
            </div>
          </div>
        </div>


        <div>
          <img src={image} alt="djkhh" />
          <p className="date">Rakhi Verma • 1 Jan 2023</p>
          <div className="arrow">
            <div>
            <p className='mainsubpara'>  Growing Business Package</p>
              <p>
                Introduction to Wireframing and its Principles.
                <br /> Learn from the best in the industry.
              </p>
              <div className="btgrp">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(249, 245, 255, 1)",
                    color: "rgba(105, 65, 198, 1)",
                    borderRadius: "30px",
                    fontSize: "10px",
                  }}
                >
                  Audit
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(238, 244, 255, 1)",
                    color: "rgba(53, 56, 205, 1)",
                    borderRadius: "30px",
                    fontSize: "10px",
                  }}
                >
                  Money Back
                </Button>
              </div>
            </div>
            <div>

            </div>
            <div>
              <img className="arricon" src={arrow} alt="ee" />
            </div>
          </div>
        </div>


      </div>
      <div className="trans1">
        <div>
          <img src={image3} alt="djkhh" />
          <p className="date">Karan Kumar • 1 Jan 2023</p>
          <div className="arrow">
            <div>
            <p className='mainsubpara'>   Scale-Up Company Offer{" "}</p>
              <p>
              Collaboration can make our teams stronger, and our <br/> individual designs better.
              </p>
              <div className="btgrp">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(249, 245, 255, 1)",
                    color: "rgba(105, 65, 198, 1)",
                    borderRadius: "30px",
                    fontSize: "10px",
                  }}
                >
                Money
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(238, 244, 255, 1)",
                    color: "rgba(54, 63, 114, 1)",
                    borderRadius: "30px",
                    fontSize: "10px",
                  }}
                >
                  Management
                </Button>
              </div>
            </div>
            <div></div>
            <div>
              <img src={arrow} alt="ee" className="arricon" />
            </div>
          </div>
        </div>


        <div>
          <img src={image4} alt="djkhh" />
          <p className="date">Richa Singh • 1 Jan 2023</p>
          <div className="arrow">
            <div>
            <p className='mainsubpara'>  Scale-Up Company Offer{" "}</p>
              <p>
              JavaScript frameworks make development easy with <br/> extensive features and functionalities.
              </p>
              <div className="btgrp">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(236, 253, 243, 1)",
                    color: "rgba(2, 122, 72, 1)",
                    borderRadius: "30px",
                    fontSize: "10px",
                  }}
                >
                 Tax Return
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(253, 242, 250, 1)",
                    color: "rgba(193, 21, 116, 1)",
                    borderRadius: "30px",
                    fontSize: "10px",
                  }}
                >
                 News
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(255, 241, 243, 1)",
                    color: "rgba(192, 16, 72, 1)",
                    borderRadius: "30px",
                    fontSize: "10px",
                  }}
                >
                Audit
                </Button>
              </div>
            </div>
            <div></div>
            <div>
              <img className="arricon" src={arrow} alt="ee" />
            </div>
          </div>
        </div>


        <div>
          <img src={image5} alt="djkhh" />
          <p className="date">Miss Nora• 1 Jan 2023</p>
          <div className="arrow">
            <div>
            <p className='mainsubpara'>   Growing Business Package</p>
              <p>
              Starting a community doesn’t need to be complicated,<br/>but how do you get started?
              </p>
              <div className="btgrp">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(249, 245, 255, 1)",
                    color: "rgba(105, 65, 198, 1)",
                    borderRadius: "30px",
                    fontSize: "10px",
                  }}
                >
                  Private Limited Company
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(238, 244, 255, 1)",
                    color: "rgba(53, 56, 205, 1)",
                    borderRadius: "30px",
                    fontSize: "10px",
                  }}
                >
                 Customer Success
                </Button>
              </div>
            </div>
            <div>
                
            </div>
            <div className="arricon">
              <img className="arricon" src={arrow} alt="ee" />
            </div>
          </div>
        </div>
       

      </div>
      {/* <div className="nsjw"> <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "rgba(28, 70, 112, 1)",
                    color: "rgba(255, 255, 255, 1)",
                    borderRadius: "30px",
                    fontSize: "10px",
                  }}
                >
                Show more blogs
                </Button></div> */}
    </>
  );
}

export default Transformation;
