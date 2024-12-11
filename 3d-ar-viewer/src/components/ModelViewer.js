import React from "react";
import { useParams, Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function ModelViewer() {
  const { modelName } = useParams();

  if (!modelName) {
    return <p>Invalid model path!</p>;
  }

  return (
    <div>
      <h1>Model Viewer</h1>
      <Canvas>
        <Stage>
          <Model modelPath={`/assets/${modelName}`} />
        </Stage>
        <OrbitControls />
      </Canvas>
      <div>
        <Link to={`/ar/${modelName}`}>
          <button>View in AR</button>
        </Link>
      </div>
    </div>
  );
}

function Model({ modelPath }) {
  const [model, setModel] = React.useState();

  React.useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(modelPath, setModel, undefined, console.error);
  }, [modelPath]);

  return model ? <primitive object={model.scene} /> : <p>Loading model...</p>;
}

export default ModelViewer;
