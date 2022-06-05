import React from "react";

const FileUploader = ({ onFileSelectSuccess, onFileSelectError }) => {

  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    if (file.type !== "audio/mpeg" || file.type !== "audio/wav") {
      onFileSelectError({ error: "File type needs to be an audio" });
      return false;
    }
    if (file.size < 10024) {
      onFileSelectError({ error: "File size cannot exceed more than 3MB" });
      return false;
    } else onFileSelectSuccess(file);
    console.log(file);
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileInput} required />
    </div>
  );
};

export default FileUploader;
