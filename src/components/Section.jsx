import React from "react";
import "./Section.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Fade from 'react-reveal/Fade';


function Section({backimg, carname, order_one, order_two, keydown}) {
  return (
    <div
      className="wrap"
      style={{
        backgroundImage: `url(${backimg})`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
       <Fade left>
      <div className="innerText">
        <h1>{carname}</h1>
        <p>Order online for touchless delivery</p>
      </div>
      </Fade>
      <div className="buttongroup">

        <Fade right>
        <div className="buttonLeft">
          <h4>{order_one}</h4>
        </div>
        </Fade>
        <Fade left>
        {
          order_two && <div className="buttonRight">
          <h4>{order_two}</h4>
        </div>
        }
        </Fade>
       {
        keydown &&  <KeyboardArrowDownIcon style={{fontSize: "50px"}} className="downArrow"/>
       }
      </div>
    </div>
  );
}

export default Section;
