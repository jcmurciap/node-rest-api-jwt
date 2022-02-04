import { ROLES } from "../models/Role";

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