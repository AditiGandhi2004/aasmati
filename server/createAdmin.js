require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const connectDB = require("./config/db");
const Admin = require("./models/Admin");

const createAdmin = async () => {
  try {
    await connectDB();

    const existing = await Admin.findOne({
      email: "admin@asmati.com",
    });

    if (existing) {
      console.log("Admin already exists");
      process.exit();
    }

    const password = await bcrypt.hash("admin123", 10);

    await Admin.create({
      name: "Hotel Admin",
      email: "admin@asmati.com",
      password,
    });

    console.log("Admin Created Successfully");
    process.exit();

  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

createAdmin();