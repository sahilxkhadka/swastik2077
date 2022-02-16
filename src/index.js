import React from "react"
import  ReactDOM  from "react-dom"
import App from "./components/App"
window.addEventListener("load",()=>{
  document.getElementById("preloader").style.display="none";
})

ReactDOM.render(<App />, document.getElementById("root"))