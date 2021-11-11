var teacher = require('../models/teacher');
// List of all teachers
exports.teacher_list = async function (req, res) {
    try {
        theteacher = await teacher.find();
        res.send(theteacher);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific teacher.
exports.teacher_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: teacher detail: ' + req.params.id);
};
// Handle teacher create on POST.
exports.teacher_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: teacher create POST');
};
// Handle teacher delete form on DELETE.
exports.teacher_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: teacher delete DELETE ' + req.params.id);
};
// Handle teacher update form on PUT.
exports.teacher_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: teacher update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
// exports.teacher_view_all_Page = async function (req, res) {
//     try {
//         theteachers = await teacher.find();
//         res.render('teacher', { title: 'teacher Search Results', results: theteachers });
//     }
//     catch (err) {
//         res.status(500);
//         res.send(`{"error": ${err}}`);
//     }
// };

// Handle Costume create on POST.
exports.teacher_create_post = async function (req, res) {
    console.log(req.body)
    let document = new teacher();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Name = req.body.Name;
    document.Department = req.body.Department;
    document.Salary = req.body.Salary;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};