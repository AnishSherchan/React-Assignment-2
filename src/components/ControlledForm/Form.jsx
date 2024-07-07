import { useState } from "react";
import { PrimaryButton } from "../Buttons/Button";
import ComponentContainer from "../Container/ComponentContainer";
import PreviewContainer from "../Container/PreviewContainer";
import Input from "../InputField/Input";

const ControlledForm = ({ submitHandler }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submit = (e) => {
    e.preventDefault();
    submitHandler(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <ComponentContainer>
      <div className="title">
        <h1>Qn 3: Develop a form with controlled components.</h1>
        <p>
          - Create a form with multiple input fields (e.g., name, email, and
          message). Use state to manage the form data and demonstrate how to
          handle form submission by passing a submit handler function as a prop.
        </p>
      </div>
      <PreviewContainer>
        <h1 className=" text-center">Example of controlled Form</h1>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <div className="field flex flex-col gap-2">
            <label>Name </label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name."
              required={true}
            />
          </div>
          <div className="field flex flex-col gap-2">
            <label>Email </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="abc@gmail.com"
              required={true}
            />
          </div>
          <div className="field flex flex-col gap-2">
            <label>Message </label>
            <Input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required={true}
            />
          </div>
          <PrimaryButton title="Submit" type="Submit" />
        </form>
      </PreviewContainer>
    </ComponentContainer>
  );
};

export default ControlledForm;
