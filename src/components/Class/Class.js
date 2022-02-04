import React, { useState } from "react";
import { Link } from "react-router-dom";
//import axios from "axios";

import { StyledClass } from "../../styled-comps/index";

const Class = (props) => {
  const { fitnessClass } = props;
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <StyledClass>
      <h3>{fitnessClass.class_name}</h3>

      {open ? (
        <div className="infoDiv">
          <p>Start Time: {fitnessClass.start_time}</p>

          <p> Intensity: {fitnessClass.intensity_level}</p>

          <p>Location: {fitnessClass.location}</p>

          <p>Duration: {fitnessClass.duration}</p>

          <p>Class Size: {fitnessClass.max_class_size}</p>

          <button onClick={handleToggle}>Close</button>
          <button>Register</button>
        </div>
      ) : (
        <div>
          <button className="infoButton" onClick={handleToggle}>
            More Info
          </button>
          <Link to={`edit-class/${fitnessClass.class_id}`}>Edit</Link>
        </div>
      )}
    </StyledClass>
  );
};

//More info route to new page, or stay in class List?

export default Class;
