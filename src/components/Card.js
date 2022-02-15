import React from "react";
import html2canvas from "html2canvas"
import Header from "./Header";
import IdCardInfo from "./IdCardInfo"
import IdCardFooter  from "./IdCardFooter";


const Card = (props) => {
  const handleDownloadImage = async () => {
    const element = document.getElementById(props.name)
    const canvas = await html2canvas(element),
    data = canvas.toDataURL('image/png'),
    link = document.createElement('a');
 
    link.href = data;
    link.target = "_blank"
    link.download = `id-card-${props.image}`;
 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); 
  };
  return (
    <div className="app__card" id= {props.name} >
      <Header />
      <div className="app__card-body">
        <div className="app__card-body_button">
          <button type="button" onClick={handleDownloadImage}>Id Card</button>
        </div>
        <IdCardInfo 
            key={props.name}
            name = {props.name}
            address = {props.address}
            dob = {props.dob}
            level = "B.Sc.CSIT"
            roll ={props.roll}
            validDate = "31 Chaitra 2082"
            image={props.image}
        />
      </div>
      <div className="app__card-footer">
        <IdCardFooter />
      </div>
    </div>
    )
}

export default Card