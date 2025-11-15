import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { getMemberStatusOverrides } from './context/AdminContext';


function CurrentMember() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/members.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch members.json");
        return res.json();
      })
      .then((jsonData) => {
        const overrides = getMemberStatusOverrides();
        // Filter members based on admin overrides
        const currentMembers = jsonData.currentMembers.filter(member => {
          const override = overrides[String(member.id)];
          return override ? override === "current-members" : true;
        });
        setData(currentMembers);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-50 to-sky-100 w-full h-auto mt-16 pt-8">
      <h1 className="text-center mb-4 text-green-900 font-bold text-4xl">Current Members</h1>

      <div className="flex flex-wrap justify-evenly">
        {data.map((member) => (
          <div className="m-[2%] w-[45%] min-w-80 bg-gradient-to-r from-purple-100 via-blue-50 to-green-100
                        h-70 rounded-2xl flex flex-wrap flex-col justify-evenly shadow-[5px 5px 15px] 
                        border-2 border-black hover:scale-[1.03] hover:shadow-[0px 10px 24px rgba(142, 68, 173, 0.4)] hover:border-[#9b59b6]
                        max-[1024px]:w-[95%] max-[1024px]:h-70 max-[1024px]:flex max-[1024px]:flex-row max-[1024px]:justify-around max-[1024px]:items-center
                        max-[768px]:w-[95%] max-[768px]:h-60 max-[768px]:flex max-[768px]:flex-row max-[768px]:justify-around max-[768px]:items-center
                        max-[480px]:w-[95%] max-[480px]:h-50 max-[480px]:flex max-[480px]:flex-row max-[480px]:justify-around max-[480px]:items-center
                        max-[280px]:w-[95%] max-[280px]:h-70 max-[280px]:flex max-[280px]:flex-row max-[280px]:justify-around max-[280px]:items-center" key={member.name}>

            <div>
              <img src={`/${member.image}`} alt={member.name} className="w-52 h-60 object-cover flex flex-wrap align-center ml-5 rounded-[10%] border-2 border-purple-400
                                                               max-[1024px]:w-56 max-[1024px]:h-60 max-[1024px]:ml-0
                                                               max-[768px]:w-40 max-[768px]:h-48 
                                                               max-[480px]:w-32 max-[480px]:h-40
                                                               max-[280px]:w-24 max-[280px]:h-32"/>
            </div>
            <div className="flex flex-col gap-5 items-center flex-wrap w-100 max-w-70
                               max-[1025px]:flex max-[1025px]:flex-col max-[1025px]:items-center max-[1025px]:flex-wrap max-[1025px]:max-w-[350px]
                               max-[768px]:max-w-[260px]
                               max-[480px]:max-w-[200px]
                               max-[280px]:max-w-[150px]" key={member.name}>
              <h2 className="text-3xl font-bold text-black
                         max-[1024px]:text-4xl max-[1024px]:text-center
                         max-[768px]:text-3xl
                         max-[480px]:text-[1.2rem] max-[480px]:text-center
                         max-[280px]:text-xl max-[280px]:text-center">{member.name}</h2>

              <h2 className="text-xl text-gray-700
                         max-[1024px]:text-2xl max-[1024px]:text-center
                         max-[768px]:text-sm
                         max-[480px]:text-[1rem] max-[480px]:text-center
                         max-[280px]:text-xl max-[280px]:text-center">{member.role}</h2>

              <button className="bg-pink-300 text-gray-950 font-semibold border-none rounded-md px-2 py-2 cursor-pointer hover:bg-pink-500 hover:text-white"
                onClick={() => navigate(`/member/current-members/${member.id}`)}>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}



export default CurrentMember;
