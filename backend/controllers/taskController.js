const getTasks = (req, res) => {
    res.status(200).json({ message: 'Get All Tasks'});
}

module.exports = { getTasks };