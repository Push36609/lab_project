import React, { useState } from "react";
import { motion } from "framer-motion";
import  {useNavigate } from "react-router-dom";

export default function ForgotPass() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to: ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200/60 via-purple-200/50 to-pink-200/60 backdrop-blur-lg relative overflow-hidden">
      
      {/* Watercolor background blobs */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-purple-300/40 rounded-full blur-3xl top-[-100px] left-[-100px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl bottom-[-120px] right-[-120px]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Forgot Password Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md p-8 rounded-2xl bg-white/70 shadow-xl backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">
          Forgot Password
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your email and we’ll send you a reset link.
        </p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Email input */}
          <motion.input
            whileFocus={{ scale: 1.05, borderColor: "#3b82f6" }}
            transition={{ duration: 0.3 }}
            className="p-3 rounded-xl border border-gray-300 bg-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Submit button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#9333ea" }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 p-3 rounded-xl bg-purple-500 text-white font-semibold shadow-lg"
            type="submit"
          >
            Send Reset Link
          </motion.button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Remembered your password?{" "}
          <span className="text-purple-600 cursor-pointer hover:underline"
           onClick={() => navigate(-1)}>
            Login
          </span>
        </p>
      </motion.div>
    </div>
  );
}
