import React from 'react'
// import styles from './Interns.module.css';
import { useNavigate } from "react-router-dom";

const data = [
  {
    name: `Mr. Ajay Gupta`,
    url: `../Mr. Ajay Gupta.jpg`,
    about: `BCA(AI) from LLDIMS`
  },
  {
    name: `Ms. Shruti`,
    url: `../Ms. Shruti.jpg`,
    about: `BCA(AI) from LLDIMS `
  },
  {
    name: `Ms. Shivangi `,
    url: `../Ms.Shivangi.jpg`,
    about: ` `
  },
  {
    name: `Ms. Priyanka`,
    url: `../Ms. Priyanka.jpg`,
    about: ` `
  },
  {
    name: `Mr. Pushpendra`,
    url: `../Mr. Pushpendra.jpg`,
    about: `BAC(AI) from LLDIMS`
  },
  {
    name: `Ms. Shravani Maity`,
    url: `../Ms. Shravani Maity.jpg`,
    about: `BCA(AI) from LLDIMS`
  },
  
  
  {
    name: `Mr. Sahil Pant`,
    url: `../Mr. Sahil Pant.jpg`,
    about: ` `
  },
  {
    name: `Mr. Ankush Rawat`,
    url: `../Mr. Ankush Rawat.jpg`,
    about: ` `
  },
  {
    name: `Mr. Rashid Reyaz`,
    url: `../Mr. Rashid Reyaz.jpg`,
    about: ``
  },

]


function Interns() {
  const navigate = useNavigate();
  return (

    <div className="bg-gradient-to-r from-blue-100 via-purple-50 to-cyan-100 w-full h-auto mt-16 pt-8">
          <h1 className="text-center mb-4 text-green-900 font-bold text-4xl">Our Interns</h1>

      <div className="flex flex-wrap justify-evenly">
        {data.map((intern, index) => (
          <div className="m-[2%] w-[45%] min-w-80 bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 h-70 rounded-2xl flex flex-col flex-wrap justify-evenly 
                          shadow-lg border-2 border-black
                          hover:scale-[(1.03)] hover:shadow-[0px_10px_24px_rgba(142,68,173,0.4)] hover:border-[#9b59b6]
                          max-[1024px]:w-[95%] max-[1024px]:h-70 max-[1024px]:flex max-[1024px]:flex-row max-[1024px]:justify-around max-[1024px]:items-center
                          max-[768px]:w-[95%] max-[768px]:h-62 max-[768px]:flex max-[768px]:flex-row max-[768px]:justify-around max-[768px]:items-center
                          max-[480px]:w-[95%] max-[480px]:h-50 max-[480px]:flex max-[480px]:flex-row max-[480px]:justify-around max-[480px]:items-center
                          max-[280px]:w-[95%] max-[280px]:h-70 max-[280px]:flex max-[280px]:flex-row max-[280px]:justify-around max-[280px]:items-center" key={index}>
            <div >
              <img src={intern.url} alt={intern.name} className="w-52 h-60 object-cover flex flex-wrap items-center ml-5 rounded-2xl border-2 border-[#9b59b6]
                                                                 max-[1024px]:w-56 max-[1024px]:h-60 max-[1024px]:ml-0
                                                                 max-[768px]:w-40 max-[768px]:h-48
                                                                 max-[480px]:w-32 max-[480px]:h-40
                                                                 max-[280px]:w-24 max-[280px]:h-32
                                                                 "/>
            </div>

              <div >
                <h1 className="text-4xl font-bold text-black
                              max-[1024px]:text-4xl max-[1024px]:text-center
                              max-[768px]:text-3xl max-[768px]:text-center
                              max-[480px]:text-xl max-[480px]:text-center
                              max-[280px]:text-xl max-[280px]:text-center">{intern.name}</h1>
                <h2 className="text-base text-gray-500
                               max-[1024px]:text-2xl max-[1024px]:text-center
                               max-[768px]:text-base max-[768px]:text-center
                               max-[480px]:text-base max-[480px]:text-center
                               max-[280px]:text-sm max-[280px]:text-center">{intern.about}</h2>
                <button className="mt-2.5 bg-purple-300 text-white text-lg px-1 py-2.5 rounded-xl border-none hover:bg-purple-400 hover:scale-105 transition-transform"
                onClick={() =>
                    navigate(`./ReadMore/${encodeURIComponent(intern.name)}`, {
                      state: { name: intern.name, url: intern.url },
                      }) }>Read More</button>
                </div>
              </div>
            
        ))}
        </div>
         
    </div>
  )
}
export default Interns;

      
    