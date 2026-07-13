require("dotenv").config();

const bcrypt = require("bcryptjs");

const connectDB = require("./config/db");
const Admin = require("./models/Admin");


const createAdmin = async () => {

  try {

    await connectDB();


    const existing = await Admin.findOne({
      username: "admin"
    });


    if (existing) {

      console.log("Admin already exists");
      process.exit();

    }


    const hashedPassword = await bcrypt.hash(
      "admin123",
      10
    );


    await Admin.create({

      name: "Hotel Admin",

      username: "admin",

      email: "admin@asmati.com",

      password: hashedPassword

    });


    console.log("Admin Created Successfully");

    console.log("Username: admin");
    console.log("Password: admin123");


    process.exit();


  } catch(err) {


    console.log(err);

    process.exit(1);


  }

};
createAdmin();


