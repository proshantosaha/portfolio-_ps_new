import React, { useContext, useState } from "react";
import { ThemeContext } from "../context";

const ContactForm = () => {
  const { isDark } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    console.log(e);

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      // Handle form submission (e.g., send data to an API)
      console.log("Form data submitted:", formData);
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };
  return (
    // onSubmit={handleSubmit}
    <form
      onSubmit={handleSubmit}
      className={`w-96 flex flex-col border border-gray-300 rounded-lg shadow-md mt-12 ml-0 p-4 md:ml-10 md:mt-0 ${
        isDark ? "bg-dark" : "bg-light"
      }
`}
    >
      <div className="mb-4">
        <label
          className={`block text-gray-700 font-bold mb-2 ${
            isDark ? "text-light/75" : "text-dark/75"
          }`}
        >
          Your Name:
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border-b-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Your Email:
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border-b-2  border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Wright Your Message:
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 py-8 border-b-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
