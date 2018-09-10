const express  = require('express');
const router = express.Router();

const User = require('../db/user');
const Sche = require('../db/scheduler');
const Proj = require('../db/project');

// Route paths are prepended with /auth

router.post('/projChk',(req,res)=>{
    User
        .getEmail(req.body.email)
        .then( user =>{
            console.log('user', user.id);
        })
});

router.post('/addProj',(req,res)=>{
    User
        .getEmail(req.body.email)
        .then( user =>{
            console.log('user', user);
            event = {
                projectName : req.body.projectName,
                id : user.id
            };
            Proj
                .addParticipant(event)
                .then( res =>{
                    console.log(res)
                })

        })
});

router.get('/projchk', ()=>{
   Proj
       .getAllProjects()
       .then( res=>{
           console.log( res )
       })
});



module.exports = router;
