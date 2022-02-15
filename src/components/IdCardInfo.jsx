import React from "react";
// import photo from "../assets/abid.jpg"

const IdCardInfo = ({name, address, dob, level, roll, validDate,image}) => {
  return (
    <div className="app__card-body_info">
      <div className="app__card-body_info-content">
        <div className="info-content info-content_name">
          <h3>Name</h3>
          <h3>:{name}</h3>
        </div>
        <div className="info-content info-content_address">
          <h3>Address</h3>
          <h3>:{address}</h3>
        </div>
        <div className="info-content info-content_dob">
          <h3>Date of Birth</h3>
          <h3>:{dob}</h3>
        </div>
        <div className="info-content info-content_level">
          <h3>Level</h3>
          <h3>:{level}</h3>
        </div>
        <div className="info-content info-content_roll">
          <h3>Roll No.</h3>
          <h3>:{roll}</h3>
        </div>
        <div className="info-content info__content_validDate">
          <h3>Valid Till</h3>
          <h3>:{validDate}</h3>
        </div>
      </div>
      <div className="app__card-body_info-img">
        <img src= {`/images/${image}.jpg`} alt="abid" />
      </div>
    </div>
  )
}

export default IdCardInfo;