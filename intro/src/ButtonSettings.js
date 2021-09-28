import React from "react";
import { Component } from "react";
export default class ButtonSettings extends Component {
  state = {
    images: [
      "https://i.resim.host/xgyrlU.PNG",
      "https://i.resim.host/pNcpbv.PNG",
      "https://i.resim.host/ztVwSN.PNG",
      "https://i.resim.host/1o6McN.PNG"
    ],
    sayac: 0,
    images1 : [
        "https://www.bilgiustam.com/resimler/2015/11/elma.jpg",
        "https://images.marul.com/thumbs/009/0097170_armut_320.jpeg",
        "https://www.entazem.com/Uploads/UrunResimleri/dilim-karpuz-15-kg--2-kg--8-ae35.jpg",
        "http://www.cagri.com/Uploads/UrunResimleri/buyuk/cilek-kg-86dd.jpg",

    ]
    

  };

  

  handleNext = () => {
    this.setState({
      sayac: this.state.sayac + 1
    });
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              sayac: this.state.sayac - 1
             
            });
          }}
        >
          GERİ
        </button>
        
        <img
          style={{
            width: 300,
            height: 200
          }}
          src={this.state.images[this.state.sayac]}
        /> 
        <img
        style={{
          width: 200,
          height: 200
        }}
        src={this.state.images1[this.state.sayac]}
      />

        <button onClick={this.handleNext}>
          İLERİ
          </button>
      </div>
    );
  }
}
