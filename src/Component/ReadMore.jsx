import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

function ReadMore() {
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const member = location.state;  

  if (!member) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">No member data found</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-purple-50 to-cyan-100 py-6 px-4 mt-16">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">{member.name}</h1>
          <p className="mt-3 text-gray-700">{member.about}</p>
        </header>
        <div className="flex justify-center">
          <img
            src={member.url}
            alt={member.name}
            className="w-48 h-48 rounded-full shadow-md"
          />
        </div>
        <button
          onClick={() => navigate(-1)}
          className="block mx-auto mt-6 bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Back to Members
        </button>
      </div>
    </div>
  );
}

export default ReadMore;
