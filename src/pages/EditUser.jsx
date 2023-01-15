import "./Newuser.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const { id } = useParams();
  console.log(id);
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
    status: "",
    logindate: "",
    logintime: "",
  });

  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const { name, email, role, status, logindate, logintime } = user;
  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3005/users/${id}`, user);
    window.alert("user is updated...");
    navigate("/");
  };
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3005/users/${id}`);
    setUser(result.data);
  };
  return (
    <>
      <main id="site-main">
        <div className="container">
          <div className="box-nav d-flex justify-between">
            <div className="filter">
              <a href="/" className="backbtn">
                <i className="fas fa-angle-double-left"></i> All Users
              </a>
            </div>
          </div>
          <div className="form-title text-center">
            <h2 className="text-dark">Update User</h2>
            <span className="text-light">
              Use the below form to update a new account
            </span>
          </div>
          <form onSubmit={(e) => onSubmit(e)} id="add_user">
            <div className="new_user">
              <div className="form-group">
                <label className="text-light">Name</label>

                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                  placeholder="Enter your name..."
                />
              </div>
              <div className="form-group">
                <label className="text-light">Email</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label className="text-light">Role</label>
                <input
                  type="text"
                  name="role"
                  value={role}
                  onChange={(e) => onInputChange(e)}
                  placeholder="Role of employee"
                />
              </div>

              <div className="form-group">
                <label className="text-light">Status</label>
                <div className="radio inline">
                  <input
                    type="radio"
                    name="status"
                    onChange={(e) => onInputChange(e)}
                    value={status}
                  />
                  <label className="radio-label">Active</label>
                </div>
                <div className="radio inline">
                  <input
                    type="radio"
                    id="radio-5"
                    name="status"
                    onChange={(e) => onInputChange(e)}
                    value={status}
                  />
                  <label className="radio-label">Inactive</label>
                </div>
              </div>

              <div className="form-group">
                <label> Last Login</label>

                <input
                  type="date"
                  name="logindate"
                  value={logindate}
                  onChange={(e) => onInputChange(e)}
                  className="mx-4 py-3 h-10 border foucs:ouline-none rounded"
                />
                <input
                  type="time"
                  name="logintime"
                  value={logintime}
                  onChange={(e) => onInputChange(e)}
                  className="mx-4 py-3  h-10 border foucs:ouline-none rounded"
                />
              </div>

              <div className="form-group">
                <button type="submit" className="btn text-dark update">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
