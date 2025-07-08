// src/Upload.tsx
import React from 'react';

function Upload() {
  const [file, setFile] = React.useState<File | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      console.log('Selected file:', selectedFile);
  
      // Automatically upload after selecting
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      try {
        const response = await fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: formData,
        });
  
        const result = await response.json();
        alert(result.success || result.error);
      } catch (error) {
        console.error('Error uploading file:', error);
        alert('Error uploading file');
      }
    }
  };
  
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img src="/assets/hireez_logo.jpg" alt="Hireez Logo" />
      </div>
      <div className="profile-picture">
        <img src="/assets/me_picture.jpg" alt="Profile" />
      </div>
      <h1>Upload Page</h1>
      <div className="upload-container">
        <input
          type="file"
          accept=".txt"
          onChange={handleFileChange}
          ref={fileInputRef}
          // style={{ display: 'none' }} // Hide the file input
        />
        <div className="jobs-container">
          {/* Jobs will be listed here */}
        </div>
      </div>
    </div>
  );
}

export default Upload;
