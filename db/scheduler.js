const knex = require('./connection');

module.exports = {
    getProject: function (id) {
        return knex('project').where('projectName', projectName);
    },
    getEvents : function(projectName){
        //return knex('users').insert(user, 'id').then(ibs =>{
          //  return ibs[0];});
            return knex('scheduler').where('projectName', projectName);
    },
    addEvent : function(event){
        return knex('scheduler').insert(event).then(ibs =>{
          return ibs[0];
        });
    },
    removeEvent : function(projectName,id){
        return knew('scheduler').where("projectName",projectName, "id", id).del().then( (count) =>{
            console.log(count);
        })
    },

};