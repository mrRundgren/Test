import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Excersises from "./Excersises";
import { muscles, excersises } from "../store";

export default class extends Component {
  state = {
    excersises
  };

  getExcersisesByMuscle() {
    return Object.entries(
      this.state.excersises.reduce((excersises, excersise) => {
        const { muscles } = excersise;
        excersises[muscles] = excersises[muscles]
          ? [...excersises[muscles], excersise]
          : [excersises];

        return excersises;
      }, {})
    );
  }

  render() {
    const excersises = this.getExcersisesByMuscle();
    console.log(excersises);
    return (
      <Fragment>
        <Header />
        <Excersises excersises={excersises} />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}
