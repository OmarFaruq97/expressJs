const db = require("../config/db");

// Get all employees
const getAllEmployees = () => {
  return db.query("SELECT * FROM employees ORDER BY id ASC");
};

// Get employee by id
const getEmployeeById = (id) => {
  return db.query("SELECT * FROM employees WHERE id = $1", [id]);
};

// Create new employee
const createEmployee = (name, email, phone) => {
  return db.query(
    "INSERT INTO employees (name, email, phone) VALUES ($1, $2, $3) RETURNING *",
    [name, email, phone]
  );
};

// Update employee by id
const updateEmployee = (id, name, email, phone) => {
  return db.query(
    "UPDATE employees SET name = $1, email = $2, phone = $3 WHERE id = $4 RETURNING *",
    [name, email, phone, id]
  );
};

// Delete employee by id
const deleteEmployee = (id) => {
  return db.query("DELETE FROM employees WHERE id = $1", [id]);
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
