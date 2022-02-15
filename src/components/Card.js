import React from "react";
import html2canvas from "html2canvas"
import Header from "./Header";
import IdCardInfo from "./IdCardInfo"
import IdCardFooter  from "./IdCardFooter";


const Card = () => {
  const handleDownloadImage = async () => {
    const element = document.getElementById('id-card'),
    canvas = await html2canvas(element),
    data = canvas.toDataURL('image/png'),
    link = document.createElement('a');
 
    link.href = data;
    link.target = "_blank"
    link.download = 'id-card.png';
 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="app__card" id="id-card" >
      <Header />
      <div className="app__card-body">
        <div className="app__card-body_button">
          <button type="button" onClick={handleDownloadImage}>View Id Card</button>
        </div>
        <IdCardInfo 
            name = "Abid Adhikari"
            address = "Thimi, Bhaktapur"
            dob = "2058/10/12"
            level = "Bsc.Csit"
            roll = "CSIT/077/01"
            validDate = "31 December 2024"
        />
      </div>
      <div className="app__card-footer">
        <IdCardFooter />
      </div>
    </div>
    )
}

export default Card