const Reference = require("../models/reference");

// ADD
exports.addReference = async (req, res) => {
 const reference = await Reference.create(req.body);

 res.json({
  success: true,
  message: "Reference added successfully.",
  data: {
   firstname: reference.firstname,
   lastname: reference.lastname,
   email: reference.email,
   position: reference.position,
   company: reference.company,
   id: reference._id
  }
 });
};

// GET BY ID
exports.getReferenceById = async (req, res) => {
 const r = await Reference.findById(req.params.id);

 res.json({
  success: true,
  message: "Reference retrieved successfully.",
  data: {
   firstname: r.firstname,
   lastname: r.lastname,
   email: r.email,
   position: r.position,
   company: r.company,
   id: r._id
  }
 });
};

// UPDATE
exports.updateReference = async (req, res) => {
 await Reference.findByIdAndUpdate(req.params.id, req.body);

 res.json({
  success: true,
  message: "Reference updated successfully."
 });
};

// DELETE
exports.deleteReference = async (req, res) => {
 await Reference.findByIdAndDelete(req.params.id);

 res.json({
  success: true,
  message: "Reference deleted successfully."
 });
};

// GET ALL
exports.getReferences = async (req, res) => {
    const references = await Reference.find();
   
    const data = references.map(r => ({
     firstname: r.firstname,
     lastname: r.lastname,
     email: r.email,
     position: r.position,
     company: r.company,
     id: r._id
    }));
   
    res.json({
     success: true,
     message: "References list retrieved successfully.",
     data
    });
   };