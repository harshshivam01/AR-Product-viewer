import React from "react";
import { useParams } from "react-router-dom";

function ARViewer() {
  const { modelName } = useParams();

  React.useEffect(() => {
    // Logic to launch AR with WebXR or an AR library
    const arUrl = `/assets/${modelName}`;
    console.log(`AR launched with model: ${arUrl}`);
    // Placeholder for AR functionality
  }, [modelName]);

  return (
    <div>
      <h1>AR Viewer</h1>
      <p>Launching AR for {modelName}...</p>
    </div>
  );
}

export default ARViewer;
