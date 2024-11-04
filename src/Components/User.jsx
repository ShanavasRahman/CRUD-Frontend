import React, { useEffect, useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
import axios from "axios";

function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async function () {
      try {
        const response = await axios.get("http://localhost:3000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.log("error while fetching", error);
      }
    };
    fetchUsers();
  }, []);
    console.log(users);

  return (
    <div className="userTable m-10 my-28 flex justify-center">
      <table className="w-3/4 border border-black bg-white">
        <thead className="bg-green-600">
          <th className="px-4 py-2 border border-black">SI.NO</th>
          <th className="px-4 py-2 border border-black">Name</th>
          <th className="px-4 py-2 border border-black">Email</th>
          <th className="px-4 py-2 border border-black">Address</th>
          <th className="px-4 py-2 border border-black">Actions</th>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td className="px-4 py-2 border border-black text-center">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border border-black text-center">
                  {user.name}
                </td>
                <td className="px-4 py-2 border border-black text-center">
                  {user.email}
                </td>
                <td className="px-4 py-2 border border-black text-center">
                  {user.address}
                </td>
                <td className="px-4 py-2 border border-black align-middle">
                  <div className="flex space-x-4 justify-center">
                    <button className="flex items-center space-x-1 text-blue-500 hover:text-blue-700">
                      <PencilIcon className="h-5 w-5" />
                      <span>Edit</span>
                    </button>

                    <button className="flex items-center space-x-1 text-red-500 hover:text-red-700">
                      <TrashIcon className="h-5 w-5" />
                      <span>Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default User;
