const Project = require("../models/project");

// ADD
exports.addProject = async (req, res) => {
 const project = await Project.create(req.body);

 res.json({
  success: true,
  message: "Project added successfully.",
  data: {
   title: project.title,
   completion: project.completion,
   description: project.description,
   id: project._id
  }
 });
};

// GET BY ID
exports.getProjectById = async (req, res) => {
 const project = await Project.findById(req.params.id);

 res.json({
  success: true,
  message: "Project retrieved successfully.",
  data: {
   title: project.title,
   completion: project.completion,
   description: project.description,
   id: project._id
  }
 });
};

// UPDATE
exports.updateProject = async (req, res) => {
 await Project.findByIdAndUpdate(req.params.id, req.body);

 res.json({
  success: true,
  message: "Project updated successfully."
 });
};

// DELETE
exports.deleteProject = async (req, res) => {
 await Project.findByIdAndDelete(req.params.id);

 res.json({
  success: true,
  message: "Project deleted successfully."
 });
};

// GET ALL
exports.getProjects = async (req, res) => {
    const projects = await Project.find();
   
    const data = projects.map(p => ({
     title: p.title,
     completion: p.completion,
     description: p.description,
     id: p._id
    }));
   
    res.json({
     success: true,
     message: "Projects list retrieved successfully.",
     data
    });
   };