import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import mirador from "mirador";
import annotationPlugins from "mirador-annotations";
// import { LocalStorageAdapter } from "mirador-annotations/es/LocalStorageAdapter";
import LocalStorageAdapter from "./LocalStorageAdapter";

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

const config = {
  id: "mirador",
  annotation: {
    adapter: (canvasId) =>
      new LocalStorageAdapter(`localStorage://?canvasId${canvasId}`),
    exportLocalStorageAnnotations: false,
  },
  window: {
    defaultSideBarPanel: "annotations",
    sideBarOpenByDefault: true,
  },
  windows: [
    {
      loadedManifest:
        "https://iiif.harvardartmuseums.org/manifests/object/299843",
    },
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <Mirador config={config} plugins={[...annotationPlugins]} />
  </React.StrictMode>,
  document.getElementById("root")
);
