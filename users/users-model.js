const db = require('../database/dbConfig.js')

module.exports = {
    add,
    find,
    findBy,
    findById,
}

function find(){
    return db('users').select('id','username','password','department')
}

function findBy(filter){
    return db('users')
    .where(filter);
}

function findById(id){
    const users =  db('users')
    .where({id})
    .first();

    console.log('user added from user-model ',users)
    return users
}

async function add(user){

    const [id] = await db('users').insert(user)

    return findById(id);
}