const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Admin = require("../models/Admin");

const router = express.Router();


// ===============================
// ADMIN LOGIN
// ===============================

router.post("/login", async (req, res) => {

  try {

    const { username, password } = req.body;


    // Validate input
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password are required"
      });
    }


    // Find admin using username
    const admin = await Admin.findOne({ username });


    if (!admin) {

      return res.status(401).json({
        success: false,
        message: "Invalid Username"
      });

    }



    // Compare password
    const isMatch = await bcrypt.compare(
      password,
      admin.password
    );


    if (!isMatch) {

      return res.status(401).json({
        success:false,
        message:"Invalid Password"
      });

    }



    // Create JWT Token
    const token = jwt.sign(

      {
        id: admin._id,
        username: admin.username,
        role:"admin"
      },

      process.env.JWT_SECRET,

      {
        expiresIn:"7d"
      }

    );



    // Success Response
    res.status(200).json({

      success:true,

      message:"Login Successful",

      token,


      admin:{

        id:admin._id,

        name:admin.name,

        username:admin.username,

        email:admin.email

      }

    });



  } catch(error) {


    console.error("Admin Login Error:", error);


    res.status(500).json({

      success:false,

      message:"Server Error"

    });


  }


});


module.exports = router;