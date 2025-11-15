import React, { useState  } from "react";
import { motion } from "framer-motion";
import { Link  } from "react-router-dom";
import {useNavigate } from "react-router-dom";


export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${form.name}! Your account has been created.`);
    setForm({ name: "", email: "", number: "", password: "" });
  };
    
    const navigate = useNavigate();


  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-200/60 via-purple-200/50 to-pink-200/60 backdrop-blur-lg">
      {/* Watercolor background effect */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-purple-300/40 rounded-full blur-3xl top-[-100px] left-[-100px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl bottom-[120px] right-[120px]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-white/70 shadow-xl backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">
          Create Account
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Name */}
          <motion.input
            whileFocus={{ scale: 1.05, borderColor: "#a855f7" }}
            transition={{ duration: 0.3 }}
            className="p-3 rounded-xl border border-gray-300 bg-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400"
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <motion.input
            whileFocus={{ scale: 1.05, borderColor: "#3b82f6" }}
            transition={{ duration: 0.3 }}
            className="p-3 rounded-xl border border-gray-300 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          {/* Phone Number */}
          <motion.input
            whileFocus={{ scale: 1.05, borderColor: "#ec4899" }}
            transition={{ duration: 0.3 }}
            className="p-3 rounded-xl border border-gray-300 bg-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
            type="tel"
            name="number"
            placeholder="Phone Number"
            value={form.number}
            onChange={handleChange}
            required
          />

          {/* Password */}
          <motion.input
            whileFocus={{ scale: 1.05, borderColor: "#10b981" }}
            transition={{ duration: 0.3 }}
            className="p-3 rounded-xl border border-gray-300 bg-white/60 focus:outline-none focus:ring-2 focus:ring-green-400"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#9333ea" }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 p-3 rounded-xl bg-purple-500 text-white font-semibold shadow-lg"
            type="submit"
          >
            Sign Up
          </motion.button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link  onClick={() => navigate(-1)}
          className="text-purple-600 cursor-pointer hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
