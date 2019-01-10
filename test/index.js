const db = require('../models');
async function create() {
    try {
        await db.User.create({
            name :"nikhil",
            age: 15,
            email: 'rose12nikhil@gmail.com',
            // gender:'male'
        });
    }catch (e) {
        console.error("ERROR: ", e);
        if(e.name ==='SequelizeUniqueConstraintError'){
            console.error("\nValue is not unique.\n", {data : e.errors[0]})
        }
    }
}

async function find() {
    const user = await User.findOne({
        where: {age: 15},
        // raw: true
    });
    console.log("user: ", user.dataValues)
}


create({
    name : 'NEW',
    email :'NNNQ'
})
/*create({
    name : 'Q2',
    email :'so2me'
})
create({
    name : 'Q3',
    email :'so3me'
})
create({
    name : 'Q4',
    email :'so4me'
})*/
console.log("executed...!")
