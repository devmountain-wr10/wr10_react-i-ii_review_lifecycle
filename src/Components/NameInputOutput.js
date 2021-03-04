import { Component } from "react";

export default class NameInputOutput extends Component {
  constructor() {
    super();
    this.state = {
      secret: "I like pineapples on pizza",
      showSecret: false
    };
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps.name, this.props.name);

    if (prevProps.name !== this.props.name) {
      this.setState({ showSecret: !this.state.showSecret });
    }
  }

  componentWillUnmount() {
    // alert("buh bye");
  }

  render() {
    return (
      <section>
        <input onChange={this.props.grabInput} placeholder="enter name..." />
        <p>{this.props.name}</p>
        {this.state.showSecret ? (
          <p>{this.state.secret}</p>
        ) : (
          <p>I have no secrets!</p>
        )}
      </section>
    );
  }
}
