import React, { useState, useEffect } from "react";

import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";
import { Button, Checkbox } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

import User from "./User";
import axios from "axios";
export default function Data() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };


  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get(
        `http://localhost:3005/users?_page=${page}&_limit=5`
      );

      setUsers(res.data);
    };
    fetchApi();
  }, [page]);
  const [totaluser,setTotalUser] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get(
        `http://localhost:3005/users`
      );
setTotalUser(res.data);
     
    };
    fetchApi();
  }, []);

  return (
    <div
      className="container  mx-auto h-100 w-100"
      style={{ marginTop: "20px" }}
    >
      <div className="flex flex-row justify-between">
        <div className="left w-50 ">
          <div className="flex flex-row">
            {" "}
            <h2 className="text-center text-2xl font-bold">User</h2>
            <p className="font-medium mx-3 text-green-600  rounded-full bg-green-50 w-20 text-center">
              {totaluser.length} users
            </p>
          </div>
          <div>
            <p className="font-normal my-2">
              Manage your team members and their account permissions here.
            </p>
          </div>
        </div>
        <div className="right w-50 mx-4 ">
          <Button
            variant="outlined"
            style={{
              textTransform: "none",
              marginLeft: "10px",
              borderRadius: "5px",
            }}
          >
            <CloudDownloadIcon></CloudDownloadIcon>Download CSV
          </Button>
          <Link to={"/newuser"}>
            {" "}
            <Button
              variant="contained"
              style={{
                textTransform: "none",
                marginLeft: "10px",
                borderRadius: "px",
              }}
            >
              <AddIcon></AddIcon>Add user
            </Button>
          </Link>
        </div>
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 ">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {" "}
              <Checkbox></Checkbox>Employee
            </th>
            <th className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              role
            </th>
            <th className="px-1 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Login
            </th>
          </tr>
        </thead>

        <User users={users}></User>
      </table>
      <div
        className=" bottom-0 flex items-center  justify-center mb-3 absolute"
        style={{ display: "flex", marginLeft: "30%" }}
      >
        <Pagination
          count={11}
          defaultPage={1}
          boundaryCount={2}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
