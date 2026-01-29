

export default function meController(req,res){
    console.log(req.user)
    return res.status(200).json({
        user: req.user
    });
}