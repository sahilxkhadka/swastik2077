import React from "react";
import Card from "./Card";
import jsonObj from "../idcard.json";
import facebookLogo from "../assets/facebook.svg"
import instaLogo from "../assets/instagram.png"
import twitterLogo from "../assets/twitter.png"

const App = () => {
  const names = ["Abid  Adhikari", "Amirdip Dhimal", "Amitabh Tamang", "Anish Dahal", "Anish Dhakal", "Anisha Dhakal", "Aruna Tamanag", "Ayush Tripathi", "Babi Khadka", "Bibek Budhathoki", "Bijaya Thapaliya", "Bikash Sah", "Binay Thakur", "Binita Tamang", "Bishal  Tamang", "Dukindra Shrestha", "Giriraj Thapa", "Hemant  Regmi", "Iraj Manandhar", "Karunesh Pandit", "Kebal Khadka", "Kumar  Basnet", "Muskan Rijal", "Pranav Thapa", "Pratikshya  Katwal", "Rakesh Joshi", "Rohan Sainju", "Rupesh Rai", "Sahil Khadka", "Samiksha  Ghimire", "Sandesh Thapa", "Sushil Chand", "Unishma  Dahal", "Utshav Khadka"];

  const namesForImage = ["Abid  Adhikari", "Amirdip Dhimal", "Amitabh Tamang", "suyog Dahal", "Anish Dhakal", "Anisha Dhakal", "Aruna Tamanag", "Ayush Tripathi", "Babi Khadka", "Bibek Budhathoki", "Bijaya Thapaliya", "Bikash Sah", "Binay Thakur", "Binita Tamang", "Bishal  Tamang", "Dukindra Shrestha", "Giriraj Thapa", "Hemant  Regmi", "Iraj Manandhar", "Karunesh Pandit", "Kebal Khadka", "Kumar  Basnet", "Muskan Rijal", "Pranav Thapa", "Pratikshya  Katwal", "Rakesh Joshi", "Rohan Sainju", "Rupesh Rai", "Sahil Khadka", "Samiksha  Ghimire", "Sandesh Thapa", "Sushil Chand", "Unishma  Dahal", "Utshav Khadka"];
  return (
    <>
    <div id="preloader">
      <div className="spinner">
        
      </div>
      <div className="loadingtxt">
        Loading ...
      </div>
    </div>
    <div className="app__wrapper" >
      <h1 className="app__heading">Swastik Batch 2077</h1>
      <div className="app__cards" >
        {jsonObj.map((e, i) => {
          const image = namesForImage[i].split(" ")[0].toLowerCase();
          return <Card
            key = {image}
            name={names[i]}
            address={e.address}
            dob={e.dob}
            roll={`CSIT/077/${i + 1}`}
            image={image}
          />
        })}
      </div>
      <footer>
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>

        </div>
        <div className="footer-content">
          <h3>Got your details wrong?</h3>
          <h2>Contact us here:</h2>
          <div className="social-icon">
           <a href="https://www.facebook.com/ssup.holmes" rel = "noreferrer" target= "_blank"><img src= {facebookLogo} alt = "facebook" /></a> 
            <a href="https://www.instagram.com/abid.adhikari/" rel = "noreferrer" target= "_blank"><img src = {instaLogo} alt = "instagram" /></a>
            <a href="https://twitter.com/sahilkhadka15" rel = "noreferrer" target= "_blank"><img src = {twitterLogo} alt= " twitter" /></a>
           </div>
          <p>Copyright © Swastik Batch 2077 | All Rights Reserved</p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App