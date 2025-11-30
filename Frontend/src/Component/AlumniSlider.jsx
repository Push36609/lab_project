import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const data = [
  {
    name: "Dr.Muniraj Gupta",
    url: "/Dr. Muniraj Gupta.jpg",
    about: "PhD Computer Science, JNU. M.Tech., NSUT, New Delhi"
  },
  {
    name: "Dr.Naveen Kumar Singh",
    url: "/Dr. Naveen Kumar Singh.jpg",
    about: "PhD Computer Science, JNU. MCA, JNU"
  },
  {
    name: "Ms. Goldy Pandey",
    url: "/Ms. Goldy Pandey.jpg",
    about: "PhD Computer Science, JNU. M.Tech CS&T, JNU"
  },
  {
    name: "Ms. Mankirat Kaur",
    url: "/Ms. Mankirat Kaur.jpg",
    about: "M.Tech Computer Science & Technology, JNU"
  },
  {
    name: "Mr. Jamaluddin",
    url: "/Mr. Jamaluddin.jpg",
    about: "PhD(CS) at AMU, Aligarh. M.Tech(CS) JNU. MCA & BSc(CS) from AMU"
  },
  {
    name: "Mr. Tirandij Pradhan",
    url: "/Mr. Tirandij Pradhan.jpg",
    about: "PhD(CS) at AMU, Aligarh. M.Tech(CS) JNU. MCA & BSc(CS) from AMU"
  },
  {
    name: "Mr. Raja Babu",
    url: "/Mr. Raja Babu.jpg",
    about: ""
  },
  {
    name: "Mr. Gulam Mazid",
    url: "/Mr. Gulam Mazid.jpg",
    about: ""
  },
  {
    name: "Mr. Saquib Warsi",
    url: "/Mr. Saquib Warsi.jpg",
    about: ""
  },
  {
    name: "Mr. Mritunjay Raj",
    url: "/Mr. Mritunjay Raj.jpg",
    about: ""
  },
  {
    name: "Mr. Sayantan Das",
    url: "/Mr. Sayantan Das.jpg",
    about: "Research Associate"
  }
]


function AlumniSlider() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-[90%] h-150 mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Alumni</h1>
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
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-blue-100 h-110 w-90 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 max-[380px]:w-75">
              <div className="flex flex-row items-center justify-center h-62 bg-gradient-to-br from-white to-green-50">
                <img
                  src={d.url}
                  alt={d.name}
                  className="h-60 w-60 rounded-full object-cover hover:scale-115 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-row items-center justify-center">
                <div className="p-4 text-center">
                  <h3 className="text-2xl font-semibold mb-2">{d.name}</h3>
                  <p className="text-gray-600">{d.about}</p>
                  <button
                    onClick={() => navigate("/Member/Alumni")}
                    className="mt-2.5 bg-purple-300 text-white text-lg px-4 py-1.5 rounded-xl border-none hover:bg-purple-400 hover:scale-105 transition-transform"
                  >
                    More
                  </button>
                  <Outlet />
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

    </motion.div>
  );
}

export default AlumniSlider;

