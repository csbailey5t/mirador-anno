import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import mirador from "mirador";

class Mirador extends Component {
  componentDidMount() {
    const { config, plugins } = this.props;
    mirador.viewer(config, plugins);
  }
  render() {
    const { config } = this.props;
    return <div id={config.id} />;
  }
}

export default Mirador;

ReactDOM.render(
  <React.StrictMode>
    <Mirador config={{ id: "mirador" }} plugins={[]} />
  </React.StrictMode>,
  document.getElementById("root")
);
