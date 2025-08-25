import React, { useEffect, useState } from "react";
import axios from "axios";

const Interview = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [responses, setResponses] = useState([]);

  const userId = localStorage.getItem("userId"); // You should store this after login

  useEffect(() => {
    axios.get("http://localhost:5000/api/interview/questions")
      .then(res => setQuestions(res.data.questions))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = async () => {
    const currentQuestion = questions[currentIndex];

    const updatedResponses = [
      ...responses,
      { question: currentQuestion, answer }
    ];
    setResponses(updatedResponses);

    if (currentIndex === questions.length - 1) {
      // Final submission to backend
      try {
        await axios.post("http://localhost:5000/api/interview/submit", {
          userId,
          responses: updatedResponses
        });
        alert("Interview submitted successfully!");
        window.location.href = "/result"; // Redirect to result page
      } catch (err) {
        console.error("Error submitting:", err);
      }
    } else {
      setCurrentIndex(currentIndex + 1);
      setAnswer("");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">AI Interview in Progress...</h2>

      {questions.length > 0 && (
        <>
          <div className="border p-4 mb-4 rounded shadow">
            <p className="text-lg">Q: {questions[currentIndex]}</p>
          </div>

          <textarea
            placeholder="Type your answer here..."
            className="w-full border rounded p-2 mb-4"
            rows="4"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            {currentIndex === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </>
      )}
    </div>
  );
};

export default Interview;
