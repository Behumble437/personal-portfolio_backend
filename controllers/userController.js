const User = require("../models/user");

// ADD
exports.addUser = async (req, res) => {
 const user = await User.create(req.body);

 res.json({
  success: true,
  message: "User added successfully.",
  data: {
   firstname: user.firstname,
   lastname: user.lastname,
   email: user.email,
   password: user.password,
   created: user.created,
   updated: user.updated,
   id: user._id
  }
 });
};

// GET BY ID
exports.getUserById = async (req, res) => {
 const user = await User.findById(req.params.id);

 res.json({
  success: true,
  message: "User retrieved successfully.",
  data: {
   firstname: user.firstname,
   lastname: user.lastname,
   email: user.email,
   id: user._id
  }
 });
};

// UPDATE
exports.updateUser = async (req, res) => {
 await User.findByIdAndUpdate(req.params.id, req.body);

 res.json({
  success: true,
  message: "User updated successfully."
 });
};

// DELETE
exports.deleteUser = async (req, res) => {
 await User.findByIdAndDelete(req.params.id);

 res.json({
  success: true,
  message: "User deleted successfully."
 });
};

// GET ALL
exports.getUsers = async (req, res) => {
    const users = await User.find();
   
    const data = users.map(u => ({
     firstname: u.firstname,
     lastname: u.lastname,
     email: u.email,
     id: u._id
    }));
   
    res.json({
     success: true,
     message: "Users list retrieved successfully.",
     data
    });
   };