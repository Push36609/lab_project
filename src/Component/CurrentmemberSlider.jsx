import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate, Outlet } from "react-router-dom";

const data = [
  { name: `Mr. Kapil Dev`, url: "../Mr. Kapil Dev.jpg", about: `PhD Scholar` ,
    profile: {
    intro: "Hello! I'm Kapil Dev, a dedicated Ph.D. researcher at the School of Computer and Systems Sciences, Jawaharlal Nehru University (JNU), New Delhi. Currently pursuing advanced research in Computer Science, I am passionate about cutting-edge technologies, theoretical foundations, and real-world applications that solve meaningful problems.",
    bio: "My academic journey reflects a strong commitment to knowledge, innovation, and ethical research practices. I believe in bridging the gap between theoretical computer science and its transformative impact on society."
  },
  education: {
    degree: "Ph.D. in Computer Science",
    institution: "Jawaharlal Nehru University (JNU), New Delhi",
    field: "Computer and Systems Sciences (SCS)"
  },
  research_interests: [
    "Machine Learning & Deep Learning",
    "Computational Theory",
    "Artificial Intelligence",
    "Systems and Network Security",
    "Data Analysis and Modelling",
    "IoT and Smart Systems Integration"
  ],
  contact: {
    "address": "Hostel, Jawaharlal Nehru University, New Delhi - 110067",
    "mobile": "+91-9851534397",
    "email": "[Add your academic or personal email here]"
  },
  social_links: {
    "LinkedIn": "#",
    "Google Scholar": "#",
    "ResearchGate": "#",
    "GitHub": "#"
  },
  academic_work: {
    "semester": "Monsoon 2025",
    "advisor": "Dr. Saurabh Kumar Sharma",
    "focus": "Emerging trends in computational intelligence and their scalable applications in real-time environments"
  }},
  { name: `Ms. Anupma Gadhwal`, url: "../Ms. Anupma Gadhwal.jpg", about: `PhD Scholar` },
  { name: `Mr. Saurabh Kumar`, url: "../Mr. Saurabh Kumar.jpg", about: `PhD Scholar` },
  { name: `Mrs. Pooja Tiwari`, url: "../Mrs. Pooja Tiwari.jpg", about: `PhD Scholar` },
  { name: `Mr. Sayantan Das`, url: "../Mr. Sayantan Das.jpg", about: `Research Associate` },
  { name: `Mr. Anil Kumar`, url: "../Mr. Anil Kumar.jpg", about: `PhD Scholar` },
  
];

function CurrentMemberSlider() {
  const navigate = useNavigate();
  return (
    <div className="max-w-[90%] h-150 mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Current Members</h1>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}  
        breakpoints={{
          0: {
            slidesPerView: 1,
            pagination: false,  
          },
          768: {
            slidesPerView: 2,
            pagination: { clickable: true },  
          },
          1024: {
            slidesPerView: 3,
            pagination: { clickable: true },  
          },
        }}
        className="rounded-2xl"
      >
        {data.map((d, index) => (
          <SwiperSlide key={index}>
            <div className="bg-blue-100 h-110 w-90 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 
                            max-[380px]:w-75">

              <div className=" flex flex-row items-center justify-center h-70 bg-gradient-to-br from-white to-green-50">
                <img
                  src={d.url}
                  alt={d.name}
                  className=" h-60 w-60 rounded-full object-cover hover:scale-115 transition-transform duration-300" />
              </div>

              <div className="flex flex-row items-center justify-center ">
                <div className="p-4 text-center">
                  <h3 className="text-2xl font-semibold mb-2">{d.name}</h3>
                  <p className="text-gray-600">{d.about}</p>
                   <button onClick={() => navigate("/Member/Current Member")}
                    className="mt-2.5 bg-purple-300 text-white text-lg px-4 py-1.5 rounded-xl border-none hover:bg-purple-400 hover:scale-105 transition-transform"
                  > More
                  </button>
                  <Outlet />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CurrentMemberSlider;