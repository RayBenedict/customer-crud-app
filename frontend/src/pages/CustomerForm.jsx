// filepath: e:\customer-crud-app\frontend\src\pages\CustomerForm.jsx
import { useEffect, useState } from "react";
import { createCustomer, getCustomer, updateCustomer } from "../api/customers";
import { useNavigate, useParams } from "react-router-dom";

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    contact_number: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) fetchCustomer();
  }, [id]);

  const fetchCustomer = async () => {
    const response = await getCustomer(id);
    setFormData(response.data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateCustomer(id, formData);
    } else {
      await createCustomer(formData);
    }
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">{id ? "Edit" : "Add"} Customer</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">First Name</label>
          <input type="text" className="form-control" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="contact_number" className="form-label">Contact Number</label>
          <input type="text" className="form-control" id="contact_number" name="contact_number" value={formData.contact_number} onChange={handleChange} placeholder="Contact Number" required />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default CustomerForm;