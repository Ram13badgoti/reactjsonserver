import React from "react";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import IconButton from "@mui/material/IconButton";
import { Checkbox } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Userdata(User) {
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3005/users/${id}`);
    window.alert("data is deleting...");
    window.location.reload();
  };

  return (
    <tbody className=" bg-white divide-y divide-gray-200 " id="tbody">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <Checkbox></Checkbox>
            <div className="flex-shrink-0 h-10 w-10">
              <img
                className="h-10 w-10  rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                alt=""
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {User.user.name}
              </div>
              <div className="text-sm text0gray-500">{User.user.email}</div>
            </div>
          </div>
        </td>
        <td className="px-1 py-4 whitespace-nowrap ">
          <ul className="list-disc inline-flex">
            {User.user.status === "active" ? (
              <li className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {" "}
                {User.user.status}
              </li>
            ) : (
              <li className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                {" "}
                {User.user.status}
              </li>
            )}
          </ul>
        </td>
        <td className="px-1 py-3 whitespace-nowrap">
          <span className="text-sm  font-medium text-gray-500">
            {User.user.role}
          </span>
        </td>
        <td className="px-1 py-3 whitespace-nowrap">
          <div className="text-sm font-medium text-gray-800">Jun,20 2022</div>
          <div className="text-sm text-gray-500">6:10PM</div>
        </td>
        <td className="px-1 py-center  ">
          <Link to={`/edituser/${User.user.id}`}>
            <IconButton>
              <EditOutlinedIcon fontSize="small"></EditOutlinedIcon>
            </IconButton>
          </Link>

          <Link onClick={() => deleteUser(User.user.id)}>
            <IconButton>
              <DeleteOutlinedIcon fontSize="small"></DeleteOutlinedIcon>
            </IconButton>
          </Link>
        </td>
      </tr>
    </tbody>
  );
}
