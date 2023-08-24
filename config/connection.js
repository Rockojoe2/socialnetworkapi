const { connect, connection } = require('mongoose');

connect('mongodb+srv://root:root@cluster0.7tlqvsu.mongodb.net/developersApplications');

module.exports = connection;
