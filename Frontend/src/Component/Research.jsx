import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getStoredArray, STORAGE_KEYS } from './context/AdminContext';

const Research = () => {
  const [adminResearch, setAdminResearch] = useState([]);

  useEffect(() => {
    // Load admin-managed research work from localStorage
    const research = getStoredArray(STORAGE_KEYS.researchWork, []);
    setAdminResearch(research);
  }, []);

  return (
    <div className="p-8 bg-gradient-to-r from-blue-100 via-purple-100 to-sky-100 min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-20 text-3xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700 text-center">
        Research
      </motion.h1>

      {/* Admin-managed Research Work */}
      {adminResearch.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-700">
            Current Research Work
          </h2>
          <div className="space-y-6 max-w-5xl mx-auto">
            {adminResearch.map((research, index) => (
              <motion.div
                key={research.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="bg-white/90 p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold text-blue-800 mb-2">{research.title}</h3>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Researcher:</span> {research.researcher}
                </p>
                <p className="text-gray-900">{research.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="space-y-8 text-lg md:text-xl leading-8 text-gray-900 max-w-5xl mx-auto">
        <p className="bg-white/90 p-6 rounded-xl shadow-md">
          The main areas of interest of Prof. Singh’s lab are understanding the
          mechanisms of <span className="text-purple-700 font-semibold">carcinogenesis</span>{" "}
          development to find novel targets which could be affected by natural
          agents, to inhibit cancer progression and metastasis. The laboratory’s
          efforts have been largely devoted towards not only screening{" "}
          <span className="text-blue-700 font-semibold">natural compounds</span>  chemopreventive agents for their efficacy, but also providing
          mechanistic insights into their mode of action.
        </p>

        <p className="bg-white/90 p-6 rounded-xl shadow-md">
          Discovering and evaluating{" "}
          <span className="text-blue-800 font-semibold">anticancer</span>{" "}
          activities of small molecules (phytochemicals) and providing scientific
          basis (mechanisms) for their effectiveness in controlling carcinogenesis
          is a priority area of research. The goal is to develop mechanism-based{" "}
          <span className="text-green-700 font-semibold">non-toxic</span> anticancer
          agents for their potential use in cancer chemoprevention and treatment.
          The lab though in its early years of establishment has done significant
          work in studying natural compounds with anti-angiogenic efficacies. The
          laboratory has established good in vitro, in vivo and ex-vivo model
          systems to study modulation of tumor angiogenesis by these plant
          compounds.
        </p>

        <p className="bg-white/90 p-6 rounded-xl shadow-md">
          Evaluating these phytochemicals for potential{" "}
          <span className="text-purple-700 font-semibold">synergism</span> with
          existing chemo-and radiotherapy regimens is also a significant focus of
          the lab. Along with these studies, the lab also tries to understand
          biological processes, which get deregulated during cancer development
          including mitogenic, and cell survival signaling, apoptosis and DNA
          damage/repair due to exposure to environmental carcinogens, including
          insecticides, pesticides and UV radiation. The lab is actively exploring
          the molecular and biological effects of microgravity on cells and animal
          models.
        </p>

        <p className="bg-white/90 p-6 rounded-xl shadow-md">
          Other than mammalian cell-culture and rodent models, we have established
          other model systems, including{" "}
          <span className="text-blue-800 font-semibold">3D spheroid</span> and{" "}
          <span className="text-blue-800 font-semibold">organoid</span> models,
          which are easier for manipulation and would give us plausible
          explanations or cues that can be extrapolated to derive an understanding
          of the cancer development and therapeutics.
        </p>
      </motion.div>
    </div>
  );
};

export default Research;
