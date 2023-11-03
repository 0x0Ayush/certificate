import React, { useState } from 'react';

const GetDocument = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
    event.target.value = null; // Clear the file input to allow selecting the same file again
  };

  const handleDeselectFile = (file) => {
    const updatedFiles = selectedFiles.filter((selectedFile) => selectedFile !== file);
    setSelectedFiles(updatedFiles);
  };

  return (
    <div className='a1'>
      <div className='main-containerr'>
        <h3>Upload Document</h3>
        <input
          type="file"
          onChange={handleFileChange}
          multiple // Allow multiple file selection
        />

        {selectedFiles.length > 0 && (
          <div>
            <h3>Selected Files:</h3>
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>
                  {file.name}
                  <button onClick={() => handleDeselectFile(file)}>Deselect</button>
                </li>
              ))}
            </ul>
            <h1>Your documents are safe with us. Just sit back and relax!! 😊</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default GetDocument;
