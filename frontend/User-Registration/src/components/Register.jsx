import React, { useState } from "react";
import image from "../assets/form-background.jpg";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://192.168.29.23:8000/register", formData);
      setMessage(response.data.message);

      /*if want to clear the fields of form we can use this code

      setFormData({
        username: "",
        email: "",
        password: "",
        })*/
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
      <div
        className="w-screen h-screen flex justify-center items-center bg-black relative bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <form onSubmit={handleSubmit} className="relative w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] rounded-3xl bg-transparent border-2 border-gray-600">
          <div className="flex flex-col px-[5vw] py-[4vh] w-full h-full">
            <label
              className="text-white text-lg font-semibold mt-[1vh]"
              htmlFor="username"
            >
              Enter Username
            </label>
            <input
              type="text"
              className="bg-gray-800 text-white p-2 rounded-md"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />

            <label
              className="text-white mt-[3vh] text-lg font-semibold"
              htmlFor="email"
            >
              Enter Email
            </label>
            <input
              type="email"
              className="bg-gray-800 text-white p-2 rounded-md"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label
              className="text-white mt-[3vh] text-lg font-semibold"
              htmlFor="password"
            >
              Enter Password
            </label>
            <input
              type="password"
              className="bg-gray-800 text-white p-2 rounded-md"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <div className="flex items-start justify-center mt-[3vh]"> 
              <button type="submit" className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50  w-1/2">
                Register
              </button>
            </div>
              {message && <p className="text-white mt-3">{message }</p>}
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;

{
  /* <label className="text-white text-lg font-semibold mt-[3vh]">
  <input type="checkbox" className="mr-2" name="checkBox"/>
  Confirm
</label> */
}
