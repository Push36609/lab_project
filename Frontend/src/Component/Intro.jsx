import React from 'react'
import { motion } from "framer-motion";

const Intro = () => {
  return (
     <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }} 
     className="  w-full h-auto mt-2 pt-2">
          

      <motion.div className="flex flex-wrap justify-evenly">
        
          <motion.div  
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
          className="m-[2%] w-[95%] min-w-70 bg-gradient-to-t from-blue-50 to-sky-50 h-70 rounded-2xl flex flex-col flex-wrap justify-evenly 
                          shadow-lg border-2 border-black
                          hover:scale-[(1.03)] hover:shadow-[0px_10px_24px_rgba(144, 194, 247, 1)] hover:border-[#90c2f7]
                          max-[1024px]:w-[95%] max-[1024px]:h-auto max-[1024px]:flex max-[1024px]:flex-row max-[1024px]:justify-around max-[1024px]:items-center
                          max-[768px]:w-[95%] max-[768px]:h-auto max-[768px]:flex max-[768px]:flex-row max-[768px]:justify-around max-[768px]:items-center
                          max-[480px]:w-[95%] max-[480px]:h-auto max-[480px]:flex max-[480px]:flex-row max-[480px]:justify-around max-[480px]:items-center
                          max-[280px]:w-[95%] max-[280px]:h-90 max-[280px]:flex max-[280px]:flex-row max-[280px]:justify-around max-[280px]:items-center"  >
            <motion.div  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}>
              <motion.img 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src="Dr.Saurabh kumar.png" alt="Dr.Saurabh kumar.png" className="w-52 h-60 object-cover flex flex-wrap items-center ml-5 my-2 rounded-2xl  
                                                                 max-[1024px]:w-56 max-[1024px]:h-60 max-[1024px]:ml-0
                                                                 max-[768px]:w-40 max-[768px]:h-48
                                                                 max-[480px]:w-32 max-[480px]:h-40 
                                                                 max-[280px]:w-24 max-[280px]:h-32
                                                                 "/>
            </motion.div>

              <div className='ml-5 w-[70%]' >
                <h1 className="text-4xl text-black w-[70%]
                              max-[1024px]:text-4xl max-[1024px]:text-center
                              max-[768px]:text-3xl max-[768px]:text-center
                              max-[480px]:text-2xl max-[480px]:text-left
                              max-[280px]:text-xl max-[280px]:text-left"> <strong>Dr.Saurabh kumar Sharma</strong></h1>
                <h2 className="text-3xl text-black mb-2 w-[70%]
                               max-[1024px]:text-3xl max-[1024px]:text-center
                               max-[768px]:text-2xl max-[768px]:text-center
                               max-[480px]:text-2xl max-[480px]:text-left
                               max-[280px]:text-base max-[280px]:text-left">Assistant Professor</h2>
                <p className="text-base text-gray-800 mb-3 mx-2 w-[70%]
                               max-[1024px]:text-2xl max-[1024px]:text-center max-[1024px]:w-[95%]
                               max-[768px]:text-xl max-[768px]:text-center 
                               max-[480px]:text-base max-[480px]:text-left
                               max-[280px]:text-sm max-[280px]:text-left">School of Computer & Systems Sciences
                                Jawaharlal Nehru University, New Delhi, INDIA
                                Ph.D. (Computational Neuroscience), Jawaharlal Nehru University, New Delhi, 2019.
                                M.Tech. (Computational & Systems Biology), Jawaharlal Nehru University, New Delhi, 2014.
                                B.Tech. (Computer Science and Engineering), Lovely Professional University, Punjab, 2012.</p>
                </div>
              </motion.div>
     
        </motion.div>
         <div className='mx-2'> 
    <p className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-black rounded-2xl py-5 px-6 my-8 mx-auto max-w-300 font-sans text-base leading-6 text-gray-900 shadow-[0px 4px 12px rgba(142, 68, 173, 0.2)] transition-transform duration-300 ease-in-out
                    hover:scale-105 hover:shadow-lg hover:border-blue-300">
        <strong className='inline-block text-black text-base font-bold py-1.5 px-3 rounded-[6px 6px 6px 0] mb-3'>Bio-computational Lab</strong> is an interdisciplinary research hub at Jawaharlal Nehru University (JNU) 
        led by Dr. Saurabh Kumar Sharma. The lab is dedicated to exploring the frontiers of Machine Learning (ML)
        and Artificial Intelligence (AI) in understanding complex biological and neurological systems.
        By integrating computational modeling, neural networks, and data-driven approaches, the lab focuses on decoding
        brain functions, neural communication, and systems biology. With a strong emphasis on mathematical modeling,
        network theory, and big data analytics, the lab aims to bridge the gap between biology and computation.
        Research at the Bio-computational Lab supports the development of predictive tools and intelligent systems 
        for solving real-world biological challenges, fostering innovation in computational biology, neuroscience, and AI-driven diagnostics.
      </p>
      </div>
    </motion.div>
    
  )
}
    
export default Intro;