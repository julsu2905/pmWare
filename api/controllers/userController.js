const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");

const Project = require("../models/projectModel");
``;
const User = require("../models/userModel");

//Create User
exports.createUser = factory.createOne(User);

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};
exports.getUser = factory.getOne(User, "myProjects userTasks");

exports.updateMe = catchAsync(async (req, res, next) => {
  const decoded = await promisify(jwt.verify)(
    req.cookies.jwt,
    process.env.JWT_SECRET
  );
  console.log(decoded);

  //2) Filterer out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(req.body, "email");
  const updateUser = await User.findByIdAndUpdate(decoded.id, filteredBody, {
    new: true,
    runValidators: true,
  });
  res.status(200).redirect(updateUser._id, {
    data: {
      user: updateUser,
    },
  });
});
exports.deleteMe = catchAsync(async (req, res, next) => {
  const decoded = await promisify(jwt.verify)(
    req.cookies.jwt,
    process.env.JWT_SECRET
  );

  await User.findByIdAndRemove(decoded.id);
  res.status(200).json({
    status: "success",
    data: null,
  });
});
exports.getUserProjects = catchAsync(async (req, res, next) => {
  try {
    const token = req.body.jwt;
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    var user = await User.findById(decoded.id, "myProjects userTasks").populate(
      "myProjects userTasks"
    );

    res.status(200).json({
      status: "success",
      user,
    });
  } catch (err) {
    res.json(err);
  }
});
exports.getUsername = catchAsync(async (req, res, next) => {
  try {
    const token = req.body.jwt;
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    var user = await User.findById(decoded.id, "username");

    res.status(200).json({
      status: "success",
      user,
    });
  } catch (err) {
    res.json(err);
  }
});

//Get All User
exports.getAllUsers = factory.getAll(User, "myProjects userTasks");
