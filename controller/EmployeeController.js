
import EmployeeModel from './../model/EmployeeModel.js';
// CREATE: Add new employee
export const CreateEmployee = async (req, res) => {
    try {
        const data = await EmployeeModel.create(req.body);
        res.status(201).json({ status: "success", data });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err.message });
    }
};

// READ: Get all employees
export const ReadEmployees = async (req, res) => {
    try {
        const data = await EmployeeModel.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ status: "fail", message: err.message });
    }
};

// UPDATE: Update employee by ID
export const UpdateEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await EmployeeModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ status: "success", data });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err.message });
    }
};

// DELETE: Delete employee by ID
export const DeleteEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        await EmployeeModel.findByIdAndDelete(id);
        res.status(200).json({ status: "success", message: "Deleted Successfully" });
    } catch (err) {
        res.status(500).json({ status: "fail", message: err.message });
    }
};










