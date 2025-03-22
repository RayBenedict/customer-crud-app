import { useEffect, useState } from "react";
import { getCustomers, deleteCustomer } from "../api/customers";
import { useNavigate } from "react-router-dom";

const CustomersList = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await getCustomers();
      setCustomers(response.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await deleteCustomer(id);
      fetchCustomers();
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Customer List</h1>
      <button className="btn btn-primary mb-3" onClick={() => navigate("/customer")}>Add New Customer</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.first_name}</td>
              <td>{customer.last_name}</td>
              <td>{customer.email}</td>
              <td>{customer.contact_number}</td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => navigate(`/customer/${customer.id}`)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(customer.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersList;