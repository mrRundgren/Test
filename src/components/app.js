import React, { Component, Fragment } from "react";
import { Header, Footer } from "./layouts";
import Excersises from "./excersises";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Footer />
      </Fragment>
    );
  }
}
