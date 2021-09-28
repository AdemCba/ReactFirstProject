import React, { Component } from "react";
import "./App.css";
import ButtonSettings from "./ButtonSettings";



class App extends Component {
  state = {
    visible: true,
    whichComponentToShow: "ButtonSettings"
  };

  render() {
    if (this.state.whichComponentToShow === "ButtonSettings") {
      return (
        <div className="App">
          <ButtonSettings />
         
        </div>
      );
          }}}
     

export default App;
