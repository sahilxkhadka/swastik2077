import React from "react"
import Card from "./Card"

const App = () => {
  return (
    <div className="app__wrapper" >
      <h1 className="app__heading">Swastik Batch 2077</h1>
      <div className="app__cards" >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default App