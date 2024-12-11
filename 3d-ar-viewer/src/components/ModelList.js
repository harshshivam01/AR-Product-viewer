import React from "react";
import { Link } from "react-router-dom";

const models = ["ch1.glb"]; // Example model files

function ModelList() {
  return (
    <div>
      <h1>3D Models</h1>
      <ul>
        {models.map((model) => (
          <li key={model}>
            <Link to={`/view/${model}`}>{model}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModelList;
