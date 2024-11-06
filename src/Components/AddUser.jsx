import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const user = {
    name: "",
    email: "",
    address: "",
  };
  const [users, setUsers] = useState(user);
  const navigate = useNavigate();
  const handleForm = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };

  const submitForm = async (e) => {
    console.log(users);
    e.preventDefault();
    await axios
      .post("http://localhost:3000/api/signup", users)
      .then(() => {
          console.log("User created successfully");
          toast.success("User created successfully", { position: "top-right" });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-200">
      <form
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md relative"
        onSubmit={submitForm}
      >
        <button
          type="button"
          className="absolute top-4 left-4 text-green-600 hover:text-green-800 font-semibold flex items-center space-x-1"
          onClick={() => window.history.back()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.707-10.707a1 1 0 10-1.414 1.414L10.586 10H7a1 1 0 100 2h3.586l-.293.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414l-3-3z"
              clipRule="evenodd"
            />
          </svg>
          <span>Back</span>
        </button>

        <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">
          Add New User
        </h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleForm}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleForm}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter email"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <textarea
            id="address"
            name="address"
            onChange={handleForm}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter address"
            rows="2"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition duration-200"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
