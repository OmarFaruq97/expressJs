const EmployeeModel = require("../models/employee.model");

const getAllEmployees = () => {
  return EmployeeModel.getAllEmployees();
};

const getEmployeeById = (id) => {
  return EmployeeModel.getEmployeeById(id);
};

const createEmployee = (employeeData) => {
  const { name, email, phone } = employeeData;
  return EmployeeModel.createEmployee(name, email, phone);
};

const updateEmployee = (id, employeeData) => {
  const { name, email, phone } = employeeData;
  return EmployeeModel.updateEmployee(id, name, email, phone);
};

const deleteEmployee = (id) => {
  return EmployeeModel.deleteEmployee(id);
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
