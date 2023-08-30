import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "app/hook";
import { addContact } from "app/contacts/contactSlice";

const inputStyle =
  "bg-white ml-2 border border-slate-300 py-2 px-2 shadow-sm focus:outline-none focus:border-aliceblue focus:black focus:ring-2";
const radioStyle =
  "checked:bg-blue-500 indeterminate:bg-gray-300 default:ring-2 required:border-red-500 valid:border-green-500 invalid:border-red-500";

const ContactForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    isActive: true,
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRadioChange = (e: { target: { value: any } }) => {
    const { value } = e.target;
    setFormData((prevData) => ({ ...prevData, isActive: value === "active" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fName && formData.lName) {
      dispatch(addContact({ id: Date.now().toString(), ...formData }));
      setFormData({ fName: "", lName: "", isActive: true });
      // Navigate to the ContactsPage
      navigate("/contacts");
    }
  };

  return (
    <div className="bg-darkseagreen p-8 drop-shadow-lg max-w-screen-sm max-h-80">
      <form
        action="/contacts"
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4"
      >
        <h2 className="self-center text-2xl font-cursive text-white">
          Add Contect
        </h2>
        <div>
          <label htmlFor="fName">First Name:</label>
          <input
            id="fName"
            type="text"
            name="fName"
            placeholder="Enter your first name!"
            value={formData.fName}
            onChange={handleInputChange}
            className={inputStyle}
            maxLength={15}
          />
        </div>
        <div>
          <label htmlFor="lName">Last Name:</label>
          <input
            id="lName"
            type="text"
            name="lName"
            placeholder="Enter your last name!"
            value={formData.lName}
            onChange={handleInputChange}
            className={inputStyle}
            maxLength={15}
          />
        </div>
        <div className="flex gap-3 justify-evenly">
          <label>Status:</label>
          <label>
            <input
              type="radio"
              name="status"
              value="active"
              checked={formData.isActive}
              onChange={handleRadioChange}
              className={radioStyle}
            />
            Active
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="inactive"
              checked={!formData.isActive}
              onChange={handleRadioChange}
              className={radioStyle}
            />
            Inactive
          </label>
        </div>
        <button
          type="submit"
          className="w-3/4 bg-black text-white p-2 self-center"
        >
          Save Number
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
