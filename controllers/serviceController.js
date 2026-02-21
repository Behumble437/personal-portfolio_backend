const Service = require("../models/service");

// ADD
exports.addService = async (req, res) => {
 const service = await Service.create(req.body);

 res.json({
  success: true,
  message: "Service added successfully.",
  data: {
   title: service.title,
   description: service.description,
   id: service._id
  }
 });
};


// GET BY ID
exports.getServiceById = async (req, res) => {
 const service = await Service.findById(req.params.id);

 res.json({
  success: true,
  message: "Service retrieved successfully.",
  data: {
   title: service.title,
   description: service.description,
   id: service._id
  }
 });
};

// UPDATE
exports.updateService = async (req, res) => {
 await Service.findByIdAndUpdate(req.params.id, req.body);

 res.json({
  success: true,
  message: "Service updated successfully."
 });
};

// DELETE
exports.deleteService = async (req, res) => {
 await Service.findByIdAndDelete(req.params.id);

 res.json({
  success: true,
  message: "Service deleted successfully."
 });
};

// GET ALL
exports.getServices = async (req, res) => {
    const services = await Service.find();
   
    const data = services.map(s => ({
     title: s.title,
     description: s.description,
     id: s._id
    }));
   
    res.json({
     success: true,
     message: "Services list retrieved successfully.",
     data
    });
   };