import React, { useEffect, useState } from "react";
import axios from 'axios';

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    _id: '',
    customer_name: '',
    phone_number: '',
    email: ''
  });

  useEffect(() => {
    axios.get('http://localhost:8000/customer')
      .then(res => {
        // Exclude the _id and __v fields from the columns
        const filteredColumns = Object.keys(res.data[0]).filter(column => column !== '__v' && column !== '_id');
        setColumns(filteredColumns);
        setRecords(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response;
      if (formData._id) {
        response = await axios.put(`http://localhost:8000/customer/updateCustomer/${formData._id}`, formData);
      } else {
        const { _id, ...newCustomerData } = formData;
        response = await axios.post('http://localhost:8000/customer', newCustomerData);
      }

      if (response.status === 200 || response.status === 201) {
        console.log("Customer added/updated successfully");
        window.alert("Customer added/updated successfully");

        setFormData({
          _id: '',
          customer_name: '',
          phone_number: '',
          email: ''
        });

        if (formData._id) {
          const updatedRecords = records.map(record => {
            if (record._id === formData._id) {
              return { ...record, ...formData };
            }
            return record;
          });
          setRecords(updatedRecords);
        } else {
          axios.get('http://localhost:8000/customer')
            .then(res => {
              setRecords(res.data);
            })
            .catch(error => console.log(error));
        }
      }
    } catch (error) {
      console.error('Error adding/updating customer:', error);
      window.alert("Error adding/updating customer");
    }
  };

  const handleEdit = async (customerId) => {
    try {
      const response = await axios.get(`http://localhost:8000/customer/${customerId}`);
      const { _id, customer_name, phone_number, email } = response.data;
      setFormData({
        _id,
        customer_name,
        phone_number,
        email
      });
    } catch (error) {
      console.error('Error fetching customer details:', error);
    }
  };

  const handleDelete = async (customerId) => {
    try {
      await axios.delete(`http://localhost:8000/customer/deleteCustomer/${customerId}`);
      setRecords(prevRecords => prevRecords.filter(record => record._id !== customerId));
      console.log("Customer deleted successfully");
      window.alert("Customer deleted successfully");
    } catch (error) {
      console.error('Error deleting customer:', error);
      window.alert("Error deleting customer");
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Customer Name</label>
          <input type="text" className="form-control" name="customer_name" value={formData.customer_name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="text" className="form-control" name="phone_number" value={formData.phone_number} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <div className="mt-5">
        <h2>Customer Records</h2>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th key={index}>{column}</th>
                ))}
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  {columns.map((column, columnIndex) => (
                    <td key={columnIndex}>{record[column]}</td>
                  ))}
                  <td>
                    <button className="btn btn-primary" onClick={() => handleEdit(record._id)}>Edit</button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() => handleDelete(record._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
