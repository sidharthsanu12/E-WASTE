import { Router } from "express";
import { approvedate, deletepost, post, viewdate } from "../services/post.service"
import { view,addcom,viewcom,adddate } from "../services/post.service"
import verifyToken from "../helpers/jwt";

const router = Router()
router.post('/post',post)
router.get('/view',view)
router.post('/delete',deletepost)

router.use(verifyToken)
router.post('/date',adddate)
router.post('/addcom',addcom)
router.get('/viewcom',viewcom)
router.get('/viewdate',viewdate)
router.get('/approvedate',approvedate)

export default router;