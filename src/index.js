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
    exportLocalStorageAnnotations: true, // display annotation JSON export button
  },
  window: {
    defaultSideBarPanel: "annotations",
    sideBarOpenByDefault: true,
  },
  catalog: [
    {
      manifestId:
        "https://sad-leakey-4368a8.netlify.app/img/derivatives/iiif/DC_WN_01/manifest.json",
    },
    {
      manifestId:
        "https://sad-leakey-4368a8.netlify.app/img/derivatives/iiif/DC_WN_02/manifest.json",
    },
    {
      manifestId:
        "https://sad-leakey-4368a8.netlify.app/img/derivatives/iiif/DC_WN_03/manifest.json",
    },
    {
      manifestId:
        "https://sad-leakey-4368a8.netlify.app/img/derivatives/iiif/DC_WN_04/manifest.json",
    },
    {
      manifestId:
        "https://sad-leakey-4368a8.netlify.app/img/derivatives/iiif/DC_WN_05/manifest.json",
    },
  ],
  windows: [
    {
      loadedManifest:
        "https://sad-leakey-4368a8.netlify.app/img/derivatives/iiif/DC_WN_01/manifest.json",
    },
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <Mirador config={config} plugins={[...annotationPlugins]} />
  </React.StrictMode>,
  document.getElementById("root")
);
