import React from "react";
import logo from "../assets/swastiklogo.png"

const Header = () => {
  return (
    <div className="app__cards-header">
      <div className="app__cards-header_img">
      <img src= {logo} alt="swastik college" />
      </div>
      <div className="app__cards-header_content">
        <h3 className="header_content-heading">Swastik College</h3>
        <h4 className="header_content-heading">(Affiliated to Tribhuwan University)</h4>
        <h4 className="header_content-heading">Chardobato, Bhaktapur</h4>
      </div>
    </div>
  )
}

export default Header