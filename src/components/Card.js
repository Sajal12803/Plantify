// components/Card.js
// components/Card.js
// import React from "react";

// const Card = () => {
//   const cardWidth = "50rem"; // Adjust as needed
//   const cardHeight = "20rem"; // Adjust as needed

//   return (
//     <div className="flex flex-col items-center justify-center">
//       <p className="text-black text-4xl text-bold mb-6">Upload an Image</p>
//       <div className="bg-green-900 rounded-lg p-12 sm:w-full md:w-[50rem] md:h-[20rem] flex justify-center items-center flex-col">
//         <label className="text-white text-4xl font-bold mb-6 cursor-pointer">
//             Choose a file
//             <input type="file" className="hidden" />
//           </label>
//       </div>

//       <button className="bg-white border border-black hover:bg-gray-200 text-black font-bold py-2 px-4 rounded mt-4 sm:w-full md:w-auto">
//         Upload
//         </button>

//     </div>
//   );
// };

// export default Card;

import React, { useState } from "react";

const Card = () => {
  const cardWidth = "50rem"; // Adjust as needed
  const cardHeight = "20rem"; // Adjust as needed
  const paddingAroundImage = "2rem"; // Adjust padding around the image

  const [selectedFile, setSelectedFile] = useState(null);
  const [cameraActive, setCameraActive] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setCameraActive(false);
  };

  const handleRemove = () => {
    setSelectedFile(null);
  };

  const handleCameraCapture = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          const mediaStreamTrack = stream.getVideoTracks()[0];
          const imageCapture = new ImageCapture(mediaStreamTrack);
          return imageCapture.takePhoto();
        })
        .then((blob) => {
          const file = new File([blob], "photo.jpg", { type: "image/jpeg" });
          setSelectedFile(file);
          setCameraActive(false);
        })
        .catch((error) => {
          console.error("Error accessing camera:", error);
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-black text-4xl text-bold mb-6">Upload an Image</p>
      <div className="bg-green-900 rounded-lg p-12 sm:w-full md:w-[50rem] md:h-[20rem] relative">
        {selectedFile ? (
          <div className="absolute inset-0 flex justify-center items-center">
            {selectedFile.type && selectedFile.type.startsWith("image/") ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Selected"
                className="max-w-full max-h-full object-contain"
                style={{ padding: paddingAroundImage }}
              />
            ) : (
              <p className="text-white text-lg">{selectedFile.name}</p>
            )}
            <button
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              onClick={handleRemove}
            >
              Remove
            </button>
          </div>
        ) : (
          <>
            {cameraActive && (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleCameraCapture}
              >
                Capture
              </button>
            )}
            <label
              htmlFor="fileInput"
              className={`text-black text-2xl font-bold mb-6 cursor-pointer flex justify-center items-center sm:flex-row sm:justify-center bg-white rounded ${
                cameraActive ? "hidden" : ""
              }`}
              style={{ display: "inline-block" }}
            >
              Choose a file
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </>
        )}
      </div>
      <button
        className={`bg-white border border-black hover:bg-gray-200 text-black lg:hidden font-bold py-2 px-4 rounded mt-4 ${
          cameraActive || selectedFile ? "hidden" : ""
        }`}
        onClick={() => setCameraActive(true)}
      >
        Use Camera
      </button>
      <button className="bg-white border border-black hover:bg-gray-200 text-black font-bold py-2 px-4 rounded mt-4">
        Upload
      </button>
    </div>
  );
};

export default Card;

// components/Card.js
// components/Card.js
// components/Card.js
