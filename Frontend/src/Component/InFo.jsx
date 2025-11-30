import React from "react";
// import styles from "./InFo.module.css";
import { motion } from "framer-motion";
import { Award, GraduationCap, Briefcase, ScrollText, Users } from "lucide-react";

function Info() {
  const sections = [
    {
      title: "Administrative Positions/Activities",
      items: [
        (
          <div className="flex flex-row gap-4 items-start p-2">
            <div className="p-2 bg-yellow-100 rounded-full shrink-0">
              <Briefcase className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold font-sans text-black align-left">Co-coordinator</h2>
              <p className="text-lg text-gray-600 font-medium">Atal Incubation Centre, JNUFI</p>
              <p className="text-lg text-gray-500 italic">Present</p>
              <p className="text-sm text-gray-500 mt-1">Fostering innovation and entrepreneurship ecosystem.</p>
            </div>
          </div>
        ),
        (
          <div className="flex flex-row gap-4 items-start p-2">
            <div className="p-2 bg-yellow-100 rounded-full shrink-0">
              <Briefcase className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold font-sans text-black align-left">Committee Member</h2>
              <p className="text-lg text-gray-600 font-medium">JNU-PAIR Network Implementation Committee</p>
              <p className="text-lg text-gray-500 italic">July 2025 (Ongoing)</p>
              <p className="text-sm text-gray-500 mt-1">Member of Molecular and Synthetic Biology theme.</p>
            </div>
          </div>
        ),
        (
          <div className="flex flex-row gap-4 items-start p-2">
            <div className="p-2 bg-yellow-100 rounded-full shrink-0">
              <Briefcase className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold font-sans text-black align-left">Principal Investigator</h2>
              <p className="text-lg text-gray-600 font-medium">Multiple Projects (ICMR, DST, UGC)</p>
              <p className="text-lg text-gray-500 italic">2021 - Present</p>
              <p className="text-sm text-gray-500 mt-1">Leading major research projects funded by national agencies.</p>
            </div>
          </div>
        )
      ]
    },
    {
      title: "Awards/Honors",
      items: [
        (
          <div className="flex flex-row gap-4 items-start p-2">
            <div className="p-2 bg-yellow-100 rounded-full shrink-0">
              <Award className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold font-sans text-black align-left">Junior Research Fellowship (Project)</h2>
              <p className="text-lg text-gray-600 font-medium">Department of Science and Technology (DST)</p>
              <p className="text-lg text-gray-500 italic">2015 - 2017</p>
              <p className="text-sm text-gray-500 mt-1">Awarded for outstanding research contribution in the field of Computer Science.</p>
            </div>
          </div>
        ),
        (
          <div className="flex flex-row gap-4 items-start p-2">
            <div className="p-2 bg-yellow-100 rounded-full shrink-0">
              <Award className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold font-sans text-black align-left">Junior Research Fellowship (Project)</h2>
              <p className="text-lg text-gray-600 font-medium">Department of Biotechnology (DBT)</p>
              <p className="text-lg text-gray-500 italic">2014 - 2015</p>
              <p className="text-lg text-gray-500 mt-1">Recognized for innovative project proposal and execution.</p>
            </div>
          </div>
        ),
        (
          <div className="flex flex-row gap-4 items-start p-2">
            <div className="p-2 bg-yellow-100 rounded-full shrink-0">
              <Award className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold font-sans text-black align-left">Young Scientist Award</h2>
              <p className="text-lg text-gray-600 font-medium">86th Society of Biological Chemists of India</p>
              <p className="text-lg text-gray-500 italic">2017</p>
              <p className="text-sm text-gray-500 mt-1">Honored for significant contributions to biological computing.</p>
            </div>
          </div>
        ),
      ]
    },
    {
      title: "Academic Career/ Member",
      items: [
        (
          <div className="flex flex-row gap-4 items-start p-2">
            <div className="p-2 bg-yellow-100 rounded-full shrink-0">
              <GraduationCap className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold font-sans text-black align-left">Member, International Advisory Committee</h2>
              <p className="text-md text-gray-600 font-medium">China-BRICS Science and Innovation Incubation Park for the New Era</p>
              <p className="text-md text-gray-500 italic">Nov 2024 - Present</p>
              <p className="text-sm text-gray-500 mt-1">Appointed as a Member of the International Advisory Committee.</p>
            </div>
          </div>
        ),
        (
          <div className="flex flex-row gap-4 items-start p-2">
            <div className="p-2 bg-yellow-100 rounded-full shrink-0">
              <GraduationCap className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold font-sans text-black align-left">Member, Institutional Ethical Committee</h2>
              <p className="text-md text-gray-600 font-medium">International Centre for Genetic Engineering and Biotechnology, New Delhi</p>
              <p className="text-md text-gray-500 italic">Present</p>
              <p className="text-sm text-gray-500 mt-1">Serving as a member of the Institutional Ethical Committee.</p>
            </div>
          </div>
        ),
        (
          <div className="flex flex-row gap-4 items-start p-2">
            <div className="p-2 bg-yellow-100 rounded-full shrink-0">
              <GraduationCap className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold font-sans text-black align-left">Professor</h2>
              <p className="text-lg text-gray-600 font-medium">Jawaharlal Nehru University (JNU)</p>
              <p className="text-lg text-gray-500 italic">2010 - Present</p>
              <p className="text-sm text-gray-500 mt-1">Professor in the School of Computer and Systems Sciences.</p>
            </div>
          </div>
        ),
      ]
    },
    {
      title: "Other Professional Activities",
      items: [
        (
          <div className="flex flex-row gap-4 items-start p-2">
            <div className="p-2 bg-yellow-100 rounded-full shrink-0">
              <ScrollText className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold font-sans text-black align-left">Patents Filed</h2>
              <p className="text-lg text-gray-600 font-medium">Intellectual Property India</p>
              <p className="text-lg text-gray-500 italic">2021, 2023</p>
              <p className="text-sm text-gray-500 mt-1">Recombinant SARS-CoV2 vaccine & "travelsafe" app.</p>
            </div>
          </div>
        ),
        (
          <div className="flex flex-row gap-4 items-start p-2">
            <div className="p-2 bg-yellow-100 rounded-full shrink-0">
              <Users className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold font-sans text-black align-left">Research Supervisor</h2>
              <p className="text-lg text-gray-600 font-medium">Jawaharlal Nehru University</p>
              <p className="text-lg text-gray-500 italic">Ongoing</p>
              <p className="text-sm text-gray-500 mt-1">Guiding 5 PhD & 2 M.Tech scholars; Guided 5 PhD & 19 M.Tech.</p>
            </div>
          </div>
        ),
        (
          <div className="flex flex-row gap-4 items-start p-2">
            <div className="p-2 bg-yellow-100 rounded-full shrink-0">
              <Briefcase className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-bold font-sans text-black align-left">Research Associate</h2>
              <p className="text-lg text-gray-600 font-medium">JNU (Computational Neuroscience)</p>
              <p className="text-lg text-gray-500 italic">2019</p>
              <p className="text-sm text-gray-500 mt-1">Worked on mathematical modelling of complex biological systems.</p>
            </div>
          </div>
        )
      ]
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
      className="w-[98%] h-auto flex flex-col gap-8 ">
      {sections.map((section, index) => (
        <div className="w-full flex flex-col gap-4" key={index}>
          <h1 className="w-[70%] ml-8 text-3xl font-sans text-blue-400 shadow-[2px 2px 4px rgba(57, 225, 65, 0.7)]">{section.title}</h1>
          <div className="w-full h-full gap-4 flex flex-wrap flex-row items-center justify-evenly m-auto">
            {section.items.map((item, idx) => (
              <div key={idx} className="max-w-[30%] min-w-80 w-150 bg-blue-50 h-62 rounded-xl flex items-start justify-start border border-black shadow-[5px_5px_15px_rgba(0,0,0,0.2)]
         transition-[transform,box-shadow,border-color] duration-200 ease-in-out
         hover:scale-[1.03] hover:shadow-[0px_10px_24px_rgba(142,68,173,0.4)]
         hover:border-[#9b59b6] p-4 text-left">
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default Info;
