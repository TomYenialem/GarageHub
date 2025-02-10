import React, { useState, useEffect } from "react";
import { Table, Button, Modal } from "react-bootstrap"; // Import Modal
import { MdOutlineDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import employeeService from "../../../../services/employee.service";

import toast from "react-hot-toast";
import { useAuth } from "../../../../Context/AuthContext";

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState(null);
  const { employee } = useAuth()
  const [showModal, setShowModal] = useState(false); // State to show/hide modal
  const [employeeToDelete, setEmployeeToDelete] = useState(null); // Store employee ID to delete

  let token = null;
  if (employee) {
    token = employee.employee_token;
  }

  const fetchEmployesData = () => {
    const allEmployees = employeeService.getAllemployess(token);
    allEmployees
      .then((res) => {
        if (!res.ok) {
          console.log(res.status);
          setApiError(true);
          if (res.status === 401) {
            setApiErrorMessage("Please login again");
          } else if (res.status === 403) {
            setApiErrorMessage("You are not authorized to view this page");
          } else {
            setApiErrorMessage("Please try again later");
          }
        }
        return res.json();
      })
      .then((data) => {
        if (data.data.length !== 0) {
          setEmployees(data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchEmployesData();
  }, []);

  const handleDeleteClick = (id) => {
    setEmployeeToDelete(id);
    setShowModal(true); 
  };

  const deleteEmployee = () => {
    if (employeeToDelete) {
      const employee = employeeService.deleteEmploye(employeeToDelete);
      employee.then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success(data.message);
          fetchEmployesData(); // Refresh employees list
        }
      });
      setShowModal(false); // Close modal after deletion
    }
  };

  return (
    <>
      {apiError ? (
        <section className="contact-section">
          <div className="auto-container">
            <div className="contact-title">
              <h2>{apiErrorMessage}</h2>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="contact-section">
            <div className="auto-container">
              <div className="contact-title">
                <h2>Employees</h2>
              </div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Active</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Added Date</th>
                    <th>Role</th>
                    <th>Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee.employee_id}>
                      <td>{employee.active_employee ? "Yes" : "No"}</td>
                      <td>{employee.employee_first_name}</td>
                      <td>{employee.employee_last_name}</td>
                      <td>{employee.employee_email}</td>
                      <td>{employee.employee_phone}</td>
                      <td>{new Date(employee.added_date).toLocaleString()}</td>
                      <td>{employee.company_role_name}</td>
                      <td>
                        <div className="edit-delete-icons">
                          <Link
                            to={`/admin/employee_edit/${employee.employee_id}`}
                          >
                            <span className="text-danger">
                              <FaRegEdit />
                            </span>
                          </Link>
                          <span className="text-primary">
                            <MdOutlineDelete
                              onClick={() =>
                                handleDeleteClick(employee.employee_id)
                              }
                            />
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </section>

          {/* Confirmation Modal */}
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete this employee?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={deleteEmployee}>
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};

export default EmployeesList;
