import express from "express";
import * as MenuListController from "../controller/MenuListController.js";
import { CreatePost, DeletePost, PostController, UpdatePost} from "../controller/PostModelController.js";
import { CreateEmployee, DeleteEmployee, ReadEmployees, UpdateEmployee } from "../controller/EmployeeController.js"
import  { CreateService, DeleteService, ReadService, UpdateService } from "../controller/ServiceController.js"
import { LoginController, RegisterController } from "../controller/AuthController.js";
const router = express.Router()

router.get("/menulist", MenuListController.MenuList)

router.get("/postlist", PostController)
router.post("/createpost", CreatePost);
router.put("/updatepost/:id", UpdatePost);
router.delete("/deletepost/:id", DeletePost);



router.post("/employee", CreateEmployee);   
router.get("/employee", ReadEmployees);   
router.put("/employee/:id", UpdateEmployee); 
router.delete("/employee/:id", DeleteEmployee);


router.post("/service", CreateService);
router.get("/service", ReadService);
router.put("/service/:id", UpdateService);
router.delete("/service/:id", DeleteService);


router.post("/register", RegisterController)
router.post("/login", LoginController)






export default router;