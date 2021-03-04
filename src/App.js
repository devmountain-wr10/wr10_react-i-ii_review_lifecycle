import { Component } from "react";
import NameInputOutput from "./Components/NameInputOutput";
import WhatIsMyPurpose from "./Components/WhatIsMyPurpose";
import "./styles.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      siteTitle: "",
      name: "",
      page: 1
    };
  }

  componentDidMount() {
    this.setState({ siteTitle: "My cool site" });
  }

  changeView = (e) => {
    this.setState({ page: e.target.name });
  };

  grabInput = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    const pageView = {
      1: <NameInputOutput name={this.state.name} grabInput={this.grabInput} />,
      2: <WhatIsMyPurpose />
    };

    return (
      <div className="App">
        <h1>{this.state.siteTitle}</h1>
        <button name="1" onClick={this.changeView}>
          View 1
        </button>
        <button name="2" onClick={this.changeView}>
          View 2
        </button>
        {pageView[this.state.page]}
      </div>
    );
  }
}
