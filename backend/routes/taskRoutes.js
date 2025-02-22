const express = require('express');
const router = express.Router();
const { getTasks } = require('../controllers/taskController');

router.get('/', getTasks);

router.post('/', (req, res) => {
    res.status(200).json({ message: 'Create Task'});
})

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Task ${req.params.id} updated`});
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Task ${req.params.id} deleted`});
})

module.exports = router;