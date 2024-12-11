import React, { useState, useRef } from "react";
import "./App.css";
import models from "./utils/constants"; // Assuming you have your models array in constants

const App = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const modelViewerRef = useRef(null);

  const handleARButtonClick = () => {
    const modelViewer = modelViewerRef?.current;
    if (modelViewer) {
      modelViewer?.activateAR(); // Activates AR mode
    } else {
      alert("AR is not supported on your device.");
    }
  };

  const handleItemClick = (model) => {
    setSelectedModel(model); // Set the selected model to view in AR
  };

  const handleButtonClick = (model) => {
    setSelectedModel(model); // Set the selected model to view in AR
  };

  return (
    <div style={{ textAlign: "center", padding: "30px", background: "lightgrey", minHeight: "100vh" }}>
      <h1>Product Viewer with AR</h1>

      {/* Display Cards if no model is selected */}
      {!selectedModel ? (
        <div className="product-list">
          {models.map((model, index) => (
            <div className="product-card" key={index} onClick={() => handleItemClick(model)}>
              <img src={model.image} alt={model.name} className="product-image" />
              <h3>{model.name}</h3>
              <p>{model.description}</p>
              <div className="product-price">
                <span className="price">{model.price}</span>
                <span className="discount">-{model.discount}</span>
              </div>
              <div className="product-rating">⭐ {model.rating}</div>
              <div className="btn">
                <button className="view-button" onClick={() => handleButtonClick(model)}>
                  View
                </button>
                <button className="addToCartButton">Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="ar-view">
          <h2>Viewing {selectedModel.name} in AR</h2>
          <model-viewer
            ref={modelViewerRef}
            src={selectedModel.src}
            alt={`A 3D model of ${selectedModel.name}`}
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            shadow-intensity="1"
            auto-rotate
            camera-mode="immersive-vr"
            camera-target="0 0 0"
            style={{ width: "100%", height: "500px", marginBottom: "20px" }}
          ></model-viewer>

          <button onClick={handleARButtonClick} className="ar-button">
            View in AR
          </button>

          <button onClick={() => setSelectedModel(null)} className="back-button">
            Back to Model List
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
