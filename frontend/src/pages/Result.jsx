import React from "react";

const Result = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Interview Completed</h1>
      <p className="mb-2">Thank you for participating!</p>
      <p className="mb-4">Your responses have been submitted successfully.</p>
      <a href="/dashboard" className="text-blue-600 underline">Go to Dashboard</a>
    </div>
  );
};

export default Result;
