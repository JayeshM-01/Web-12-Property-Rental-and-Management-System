import express from "express";
import { createResidency, getAllResidencies, getResidency } from "../controller/residcontrol.js";
import jwtCheck from "../config/authcon.js";
const router = express.Router();

router.post("/create" , jwtCheck, createResidency )
router.get("/allresidency" , getAllResidencies )
router.get("/:id", getResidency)
export {router as residRoute}