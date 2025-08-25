import React, { useState } from 'react';
import axios from 'axios';

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await axios.post("http://localhost:5000/api/resume/upload", formData);
      setMessage(res.data.message);
    } catch (error) {
      setMessage("Error uploading file.");
    }
  };

  return (
    <div className="p-4 border rounded shadow w-[400px] mx-auto mt-8">
      <h2 className="text-xl mb-4 font-semibold">Upload Your Resume</h2>
      <input type="file" onChange={handleFileChange} className="mb-2" />
      <br />
      <button onClick={handleUpload} className="bg-blue-600 text-white px-4 py-2 rounded">
        Upload
      </button>
      <p className="mt-2 text-green-700">{message}</p>
    </div>
  );
};

export default ResumeUpload;
