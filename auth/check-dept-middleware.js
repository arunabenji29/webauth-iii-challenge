module.exports = role => {
    return function(req,res,next){
        if(req.user.department && req.user.department.includes(role)){
            next()
        }
        else {
            res.status(403).json({message: 'you are not assigned any dept'});
        }
    };
};