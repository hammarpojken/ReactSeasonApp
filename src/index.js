import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

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
  render() {
    if (this.state.errMsg && !this.state.latitude) {
      return <div>Error: {this.state.errMsg}</div>;
    }
    if (!this.state.errMsg && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }
    return <div>Loading</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
