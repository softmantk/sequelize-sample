const User = require('../model/user');

function create() {
    User.create({
        firstName: "Nikhil",
        lastName: "CM",
        age: 15
    });
}

async function find() {
    const user = await User.findOne({
        where: {age: 15},
        // raw: true
    });
    console.log("user: ", user.dataValues)
}

find()



