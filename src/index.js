import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import spinner from "./Spinner";
import Spinner from "./Spinner";

class App extends React.Component {
  state = {
    latitude: null,
    errMsg: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errMsg: err.message })
    );
  }
  contentRender() {
    if (this.state.errMsg && !this.state.latitude) {
      return <div>Error: {this.state.errMsg}</div>;
    }
    if (!this.state.errMsg && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }
    return <Spinner />;
  }
  render() {
    return <div className="border red">{this.contentRender()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
