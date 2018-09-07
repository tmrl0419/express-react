const express  = require('express');
const bcrypt = require('bcrypt');
const  router = express.Router();

const User = require('../db/user');



// Route paths are prepended with /auth

router.get('/',(req,res)=>{
   res.json({
       message: 'LOCK'
   })
});


function validateUser(user){
    const validUserID = typeof user.user_id == 'string'  &&
                            user.user_id.trim() != '';
    const validPassword = typeof user.password == 'string' &&
                            user.password.trim() != '' &&
                            user.password.trim().length >= 6;

    return validUserID && validPassword;
}

router.post('/signup',(req,res, next)=>{
    if(validateUser(req.body)){
        User
            .getOne(req.body.user_id)
            .then(user =>{
                console.log('user', user);


                // if user not found
                if(!user){
                    bcrypt.hash(req.body.password , 10 )
                        .then((hash) => {
                            // Store hash in your password DB.
                            const user = {
                                user_id : req.body.user_id,
                                password : hash,
                                name : req.body.name,
                            };

                            User
                                .create(user)
                                .then( id =>{
                                    res.json({
                                        id,
                                        message:'CHECK'
                                    });
                                });

                        });
                } else{ // email in use!
                    next(new Error('Email in use'))
                }
            });
    } else{
        next(new Error('Invalid user'));
    }

});

module.exports = router;
