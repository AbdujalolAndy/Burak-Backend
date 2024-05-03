import express from "express";
import memberController from "./controllers/member.controller";

const router = express.Router();

router.get('/', memberController.goHome)
router.get("/login", memberController.getLogIn)
router.get("/signup", memberController.getSignUp)


export default router;