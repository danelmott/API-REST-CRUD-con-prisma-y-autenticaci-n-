

export function checkRoles (...roles) {
    
    return (req, res, next) => {
        const user = req.user;
        
        console.log(roles)
        if(roles.includes(user.role)){
            return next()
        }
        else{
            return res.status(401).json({message: "unauthorized"})
        }
    }
}