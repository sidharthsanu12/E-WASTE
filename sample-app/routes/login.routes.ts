import { Router } from "express";
import { login, viewusers } from "../services/login.service"
import { signin } from '../services/signin.services'
import { adminlogin } from '../services/signin.services'
import {adminsignup} from '../services/signin.services'
import {userprofile} from '../services/login.service'
import {useredit} from '../services/login.service'
import verifyToken from "../helpers/jwt";
 
const router = Router()

router.post('/add',login)
router.post('/signin',signin)
router.post('/login',adminlogin)
router.post('/adminsignup',adminsignup)
router.use(verifyToken)
router.get('/viewusers',viewusers)
router.get("/userprofile",userprofile)
router.put('/useredit',useredit)

export default router;