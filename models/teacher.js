const mongoose = require("mongoose")
const teacherSchema = mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Name of Teacher can not be blank"]
    },
    Department: {
        type: String,
        required: [true, "Teacher Department can not be blank"]
    },
    Salary: {
        type: Number,
        required: [true, "Salary of the Teacher is required"],
    }
})

module.exports = mongoose.model("Teacher", teacherSchema)