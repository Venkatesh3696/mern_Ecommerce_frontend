import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import "../../styles/AuthStyles.css";
// import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong");
    }
  };

  return (
    <div>
      <Layout>
        <div className="form-container">
          <h1>Reset Password</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                onChange={(e) => setAnswer(e.target.value)}
                value={answer}
                type="text"
                className="form-control"
                placeholder="Enter Your Secret Answer"
                required
              />
            </div>
            <div className="mb-3">
              <input
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
                type="password"
                className="form-control"
                placeholder="Enter Your Password"
                required
                autoComplete="true"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              RESET
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default ForgotPassword;
