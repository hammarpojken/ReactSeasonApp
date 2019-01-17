import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      errMsg: ""
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude
        });
      },
      err => {
        this.setState({
          errMsg: err.message
        });
      }
    );
  }
  render() {
    if (this.state.errMsg && !this.state.latitude) {
      return <div>Error: {this.state.errMsg}</div>;
    }
    if (!this.state.errMsg && this.state.latitude) {
      return <div>Latitude: {this.state.latitude}</div>;
    }
    return <div>Loading</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
