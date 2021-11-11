var express = require('express');
var router = express.Router();

// Require controller modules
var api_controller = require('../controllers/api');
var teacher_controller = require('../controllers/teacher');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// teacher ROUTES ///
// POST request for creating a teacher.
router.post('/teacher', teacher_controller.teacher_create_post);
// DELETE request to delete teacher.
router.delete('/teachers/:id', teacher_controller.teacher_delete);
// PUT request to update teacher.
router.put('/teacher/:id', teacher_controller.teacher_update_put);
// GET request for one teacher.
router.get('/teacher/:id', teacher_controller.teacher_detail);
// GET request for list of all teacher items.
router.get('/teacher', teacher_controller.teacher_list);
/* GET detail teacher page */

module.exports = router;