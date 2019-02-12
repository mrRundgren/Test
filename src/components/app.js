import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Excersises from "./Excersises";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Excersises />
        <Footer />
      </Fragment>
    );
  }
}
