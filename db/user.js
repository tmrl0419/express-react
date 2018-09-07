const knex = require('./connection');

module.exports = {
    getOne: function (id) {
        return knex('users').where('user_id', id).first();
    },
    create : function(user){
        return knex('users').insert(user, 'id').then(ibs =>{
            return ibs[0];
        });
    }

}