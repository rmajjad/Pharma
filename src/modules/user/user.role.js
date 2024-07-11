import { roles } from "../../middleware/auth.js";


export const endPoints = {
    getUsers: [roles.Admin,roles.User],
    getAdmins:[roles.SuperAdmin],
    getUserData: [roles.Admin, roles.User],
    update: [roles.Admin],
    changeStatus: [roles.SuperAdmin],
    delete: [roles.Admin],
    deleteAdmins: [roles.SuperAdmin],

}