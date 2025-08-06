const express = require("express");
const router = express.Router();
const EmployeeController = require("../controllers/employee.controller");

router.get("/", EmployeeController.getAllEmployees);
router.get("/:id", EmployeeController.getEmployeeById);
router.post("/", EmployeeController.createEmployee);
router.put("/:id", EmployeeController.updateEmployee);
router.delete("/:id", EmployeeController.deleteEmployee);

module.exports = router;
