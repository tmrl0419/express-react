const  express  = require('express');
const  router = express.Router();

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
        res.json({
            message:'CHECK'
        })
    } else{
        next(new Error('Invalid user'));
    }

});

module.exports = router;
