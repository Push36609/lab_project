import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

function ReadMore() {
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const member = location.state;  


  if (!member) {
    return (
      <div className="flex flex-col min-h-screen">
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
      <div className="max-w-[90%] mx-auto space-y-8 flex flex-wrap text-left">
        <header className=" flex flex-row flex-wrap">
          <div>
           <img
            src={member.url}
            alt={member.name}
            className="w-48 h-48 rounded-full shadow-md object-cover" />
          </div>
          <div className="ml-5">
          <h1 className="text-3xl font-bold text-gray-900 mt-5">{member.name}</h1>
          <p className="mt-3 text-gray-700">{member.about}</p>
          <button
          onClick={() => navigate(-1)}
          className="  mx-auto mt-6 bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Back to Members
        </button>
        </div>
        
        <div className="flex justify-center">
          <p className="mt-3 text-gray-700 ">{" "} 
            Hello! I'm <span className="font-bold text-gray-600"> Kapil Dev</span>, a
            dedicated Ph.D. researcher at the
            <span className="font-bold text-gray-600">
              School of Computer and Systems Sciences, Jawaharlal Nehru
              University (JNU), New Delhi
            </span>
            . Currently pursuing advanced research in{" "}
            <span className="font-bold text-gray-600">Computer Science</span>, I am
            passionate about cutting-edge technologies, theoretical foundations,
            and real-world applications that solve meaningful problems.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed">
            My academic journey reflects a strong commitment to knowledge,
            innovation, and ethical research practices. I believe in bridging
            the gap between theoretical computer science and its transformative
            impact on society.
          </p>
          </div>
        </header>

        {/* Education and Research Interests */}
        <div className="flex gap-6 justify-between  ">
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-3"> Education</h2>
            <p className="font-medium">Ph.D. in Computer Science</p>
            <p className="text-gray-600 italic">
              Jawaharlal Nehru University (JNU), New Delhi
            </p>
            <p className="text-gray-500 mt-2">
               Field: Computer and Systems Sciences (SCS)
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-3">Research Interests</h2>
            <ul className="list-disc ml-5 space-y-1 text-gray-700">
              <li>Machine Learning & Deep Learning</li>
              <li>Computational Theory</li>
              <li>Artificial Intelligence</li>
              <li>Systems and Network Security</li>
              <li>Data Analysis and Modelling</li>
              <li>IoT and Smart Systems Integration</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-3"> Contact Information</h2>
          <p className="text-gray-700">
            <span className="font-semibold">Address:</span> Hostel, Jawaharlal
            Nehru University, New Delhi - 110067
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Mobile:</span> +91-9851534397
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Email:</span>{" "}
            [Add your academic or personal email here]
          </p>
        </div>

        {/* Social Links */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-3"> Connect With Me</h2>
          <ul className="space-y-2 text-blue-600">
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Google Scholar
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                ResearchGate
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Academic Work */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-3">
             Academic & Research Work
          </h2>
          <p className="text-gray-700">
            Currently enrolled in the{" "}
            <span className="font-semibold">Monsoon 2025 semester</span> and
            actively working on my doctoral thesis under the guidance of my
            advisor <span className="font-semibold">Dr. Saurabh Kumar Sharma</span>
            . My research focuses on emerging trends in computational
            intelligence and their scalable applications in real-time
            environments.
          </p>
        </div>
         
      </div>
    </div>
  );
}

export default ReadMore;
