const knex = require('./connection');

module.exports = {
    getAllProjects: function () {
        return knex.select('*').from('project');
    },
    getProject: function (projectName) {
        return knex('project').where('projectName', projectName);
    },
    addParticipant: function (index) {
        return knex('project').insert(index).then(ibs => {
            return ibs;
        });
    },
    removeParticpant: function(id){
        return knex('project').where('id',id).del().then( (count) =>{
            console.log(count);
        });
    }
};