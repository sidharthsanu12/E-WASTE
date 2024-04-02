import { Router } from "express";
import loginRoute from "./login.routes"
import signinRoute from './login.routes'
import postRoute from './post.routes'

const router = Router()
router.use('/api/login',loginRoute);
router.use('/api/user',signinRoute);
router.use('/api/list',signinRoute);
router.use('/api/admin',signinRoute);
router.use('/api/adminNot',postRoute);
router.use('/api/userCom',postRoute);

export default router