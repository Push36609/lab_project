import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getStoredArray, STORAGE_KEYS } from './context/AdminContext';

const Project = () => {
  const [adminProjects, setAdminProjects] = useState([]);

  useEffect(() => {
    // Load admin-managed projects from localStorage
    const projects = getStoredArray(STORAGE_KEYS.projects, []);
    setAdminProjects(projects);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-16 pt-10 bg-gradient-to-r from-blue-100 via-purple-100 to-sky-100 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-6 pb-10">

        {/* Admin-managed Projects */}
        {adminProjects.length > 0 && (
          <div className="mb-10">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-500 via-blue-700 to-purple-500 bg-clip-text text-transparent text-center">
              Admin-Managed Projects
            </h1>
            {adminProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-6"
              >
                <p className="leading-8 text-lg md:text-xl font-sans text-gray-900 bg-white/90 shadow-lg p-6 rounded-2xl">
                  <span className="text-blue-700 font-semibold">Title:</span> {project.title}
                  <br />
                  <span className="text-purple-700 font-semibold">Description:</span> {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Default Projects */}
        <h1 className="text-2xl md:text-4xl font-bold mb-6  bg-gradient-to-r from-blue-500 via-purple-700 to-cyan-500 bg-clip-text text-transparent text-center ">
          PROJECT 1
        </h1>

        {/* Content */}
        <p className="leading-8 text-lg md:text-xl font-sans text-gray-900 bg-white/90 shadow-lg p-6 rounded-2xl">
          <span className="text-blue-700 font-semibold">Title :</span> ‘ Machine
          learning-based approaches to profile breast cancer genomic alterations
          and target key identifications’
          <span className="text-purple-700 font-semibold"> <br /> About :</span>  under Dr. Saurabh Kumar Sharma, Assistant Professor , school of Computer and systems Sciences,Jawaharlal Nehru university-110067

          <br />
          <span className="text-green-600 font-semibold">Organization :</span>
          DHR/ICMR
          <br />
          <span className="text-indigo-600 font-semibold"> Date :</span> 2021 Dec to 2024 Dec <br />
        </p>


        {/* project2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-6xl mx-auto px-6 pb-10">
          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 via-purple-700 to-cyan-500 bg-clip-text text-transparent align-top-left"><br />
            PROJECT 2
          </h1>

          {/* Content */}
          <p className="leading-8 text-lg md:text-xl font-sans text-gray-900 bg-white/90 shadow-lg p-6 rounded-2xl">
            <span className="text-blue-700 font-semibold">Title :</span> Evolutionary genome Complexity of SARS-COV-2 Virus and search for therapeutic translational medicine.

            <span className="text-purple-700 font-semibold"><br /> About :</span>  under Dr. Saurabh Kumar Sharma, Assistant Professor , school of Computer and systems Sciences,Jawaharlal Nehru university-110067

            <br />
            <span className="text-green-600 font-semibold">Organization :</span>
            ICMR
            <br />
            <span className="text-indigo-600 font-semibold"> Date :</span> 2022 March to 2024 March <br />
          </p>


          {/* project3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-6xl mx-auto px-6 pb-10"
          >
            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 via-purple-700 to-cyan-500 bg-clip-text text-transparent align-top-left"><br />
              PROJECT 3
            </h1>

            {/* Content */}
            <p className="leading-8 text-lg md:text-xl font-sans text-gray-900 bg-white/90 shadow-lg p-6 rounded-2xl">
              <span className="text-blue-700 font-semibold">Title :</span> Stochastic Framework …….COVID19 India



              <span className="text-purple-700 font-semibold"><br /> About :</span>  under Dr. Saurabh Kumar Sharma, Assistant Professor , school of Computer and systems Sciences,Jawaharlal Nehru university-110067

              <br />
              <span className="text-green-600 font-semibold">Organization :</span>
              ICSSR
              <br />
              <span className="text-indigo-600 font-semibold"> Date :</span> 2022 March to 2024 March <br />
            </p>


            {/* project4*/}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-6xl mx-auto px-6 pb-10"
            >
              {/* Title */}
              <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 via-purple-700 to-cyan-500 bg-clip-text text-transparent align-top-left"><br />
                PROJECT 4
              </h1>

              {/* Content */}
              <p className="leading-8 text-lg md:text-xl font-sans text-gray-900 bg-white/90 shadow-lg p-6 rounded-2xl">
                <span className="text-blue-700 font-semibold">Title :</span> Traditional Knowledge Hybfon Indigenous Communities in India


                <span className="text-purple-700 font-semibold"><br /> About :</span>  under Dr. Saurabh Kumar Sharma, Assistant Professor , school of Computer and systems Sciences,Jawaharlal Nehru university-110067

                <br />
                <span className="text-green-600 font-semibold">Organization :</span>
                GISF HUB/IIT-B/DST


                <br />
                <span className="text-indigo-600 font-semibold"> Date :</span>2023 sep to 2025 sep

                <br />
              </p>

              {/* project5 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-6xl mx-auto px-6 pb-10"
              >
                {/* Title */}
                <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 via-purple-700 to-cyan-500 bg-clip-text text-transparent align-top-left"><br />
                  PROJECT 5
                </h1>

                {/* Content */}
                <p className="leading-8 text-lg md:text-xl font-sans text-gray-900 bg-white/90 shadow-lg p-6 rounded-2xl">
                  <span className="text-blue-700 font-semibold">Title :</span> Dr. Kushagra Project


                  <span className="text-purple-700 font-semibold"> <br />About :</span>  under Dr. Saurabh Kumar Sharma, Assistant Professor , school of Computer and systems Sciences,Jawaharlal Nehru university-110067

                  <br />
                  <span className="text-green-600 font-semibold">Organization :</span>
                  ICMA-RA

                  <br />
                  <span className="text-indigo-600 font-semibold"> Date :</span> 2023 Jan to July 2024

                  <br />
                </p>
                {/* project6*/}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="max-w-6xl mx-auto px-6 pb-10">
                  {/* Title */}
                  <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 via-purple-700 to-cyan-500 bg-clip-text text-transparent align-top-left"><br />
                    PROJECT 6
                  </h1>

                  {/* Content */}
                  <p className="leading-8 text-lg md:text-xl font-sans text-gray-900 bg-white/90 shadow-lg p-6 rounded-2xl">
                    <span className="text-blue-700 font-semibold">Title :</span> Dr. Neelam Dabar Sen - Ramalingaswami Fellow

                    <span className="text-purple-700 font-semibold"><br /> About :</span>  under Dr. Saurabh Kumar Sharma, Assistant Professor , school of Computer and systems Sciences,Jawaharlal Nehru university-110067

                    <br />
                    <span className="text-green-600 font-semibold">Organization :</span>
                    DBT
                    <br />
                    <span className="text-indigo-600 font-semibold"> Date :</span> 2024 July <br />
                  </p>
                  {/* project7 */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-6xl mx-auto px-6 pb-10"
                  >
                    {/* Title */}
                    <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-500 via-purple-700 to-cyan-500 bg-clip-text text-transparent align-top-left"><br />
                      PROJECT 7
                    </h1>

                    {/* Content */}
                    <p className="leading-8 text-lg md:text-xl font-sans text-gray-900 bg-white/90 shadow-lg p-6 rounded-2xl">
                      <span className="text-blue-700 font-semibold">Title :</span> “Unravelling the multi-targeted curative potential medicinal herbs and their phytochemicals against Friedreich Ataxia: an integrated approach”


                      <span className="text-purple-700 font-semibold"><br /> About :</span>  under Dr. Prachi Shripatrao Yadav, Senior Scientist, Room No. 49, Division of Genetics, ICAR-Indian Agriculture Research Institute, pusa CAmpus , New Delhi-110012.

                      <br />
                      <span className="text-green-600 font-semibold">Organization :</span>
                      ICMR
                      <br />
                      <span className="text-indigo-600 font-semibold"> Date :</span> 2025 March to 2028 March <br />
                    </p>




                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
