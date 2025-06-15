
import ServiceModel from './../model/ServiceModel.js';

// CREATE
export const CreateService = async (req, res) => {
    try {
        let data = await ServiceModel.create(req.body);
        return res.status(201).json({ status: "success", data });
    } catch (err) {
        return res.status(500).json({ status: "fail", message: err.message });
    }
};

// READ
export const ReadService = async (req, res) => {
    try {
        let data = await ServiceModel.find();
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ status: "fail", message: err.message });
    }
};

// UPDATE
export const UpdateService = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await ServiceModel.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json({ status: "success", data });
    } catch (err) {
        return res.status(500).json({ status: "fail", message: err.message });
    }
};

// DELETE
export const DeleteService = async (req, res) => {
    try {
        let id = req.params.id;
        await ServiceModel.findByIdAndDelete(id);
        return res.status(200).json({ status: "success", message: "Deleted Successfully" });
    } catch (err) {
        return res.status(500).json({ status: "fail", message: err.message });
    }
};