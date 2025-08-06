const EmployeeService = require("../services/employee.service");

const getAllEmployees = async (req, res) => {
  try {
    const result = await EmployeeService.getAllEmployees();
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEmployeeById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await EmployeeService.getEmployeeById(id);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createEmployee = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const result = await EmployeeService.createEmployee({ name, email, phone });
    res.status(201).json({ message: "Employee created", employee: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;
  try {
    const existing = await EmployeeService.getEmployeeById(id);
    if (existing.rows.length === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }
    const result = await EmployeeService.updateEmployee(id, { name, email, phone });
    res.json({ message: "Employee updated", employee: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const existing = await EmployeeService.getEmployeeById(id);
    if (existing.rows.length === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }
    await EmployeeService.deleteEmployee(id);
    res.json({ message: "Employee deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
