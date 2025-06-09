import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login",login)

router.post("/signup",signup)

router.post("/logout",logout)

router.get("/check", protectRoute, checkAuth)

router.put("/update-profile", protectRoute, updateProfile)

export default router;