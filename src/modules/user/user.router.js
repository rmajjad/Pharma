import { Router } from "express";
import * as Controller from "./user.controller.js";
import { auth } from "../../middleware/auth.js";
import { endPoints } from "../user/user.role.js";
import { asyncHandler } from "../../utils/catchError.js";
import { valedation } from "../../middleware/valedation.js";
import * as schema from "./user.valedation.js";


const router = Router();

router.get('/allUsers',auth(endPoints.getUsers),asyncHandler(Controller.getAll));
router.get('/allAdmins',auth(endPoints.getAdmins),asyncHandler(Controller.getAllAdmins));
router.get('/userData',auth(endPoints.getUserData),asyncHandler(Controller.getDetails));
router.patch('/:id',auth(endPoints.update),valedation(schema.updateUserSchema),asyncHandler(Controller.update));
router.patch('/changeAdminStatus/:id',auth(endPoints.changeStatus),valedation(schema.updateAdminStatus),asyncHandler(Controller.updateAdminStatus));
router.delete('/:id',auth(endPoints.delete),valedation(schema.destroySchema),asyncHandler(Controller.destroy)); 
router.delete('/deleteAdmin/:id',auth(endPoints.deleteAdmins),valedation(schema.destroySchema),asyncHandler(Controller.destroyAdmin)); 



export default router;
