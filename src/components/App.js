import React from "react";
import Card from "./Card";
import jsonObj from "../idcard.json";

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
          <ul className="social_icon">
            <li><a href="https://www.facebook.com/ssup.holmes"><ion-icon name="logo-facebook"></ion-icon></a></li>
            <li><a href="https://www.instagram.com/abid.adhikari/"><ion-icon name="logo-instagram"></ion-icon></a></li>
            <li><a href="https://twitter.com/sahilkhadka15"><ion-icon name="logo-twitter"></ion-icon></a></li>
          </ul>
          <p>Copyright © Swastik Batch 2077 | All Rights Reserved</p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App