import { ROLES } from "../models/Role";
import User from "../models/User";

export const checkRolesExisted = (req, res, next) => {
    if(req.body.roles){
        for(let i=0; i<req.body.roles; i++){
            if(!ROLES.includes(req.body.roles[i])){
                return res.status(404).json({message: 'Rol not found'});
            }
        }
    }
    next();
}

export const checkDuplicateUsernameOrEmail = async(req,res,next) => {
    const user = await User.findOne({username:req.body.username});
    if(user) return res.status(400).json({message: 'User already exist.'});

    const email = await User.findOne({email:req.body.email});
    if(email) return res.status(400).json({message: 'Email already exist.'});

    next();
}