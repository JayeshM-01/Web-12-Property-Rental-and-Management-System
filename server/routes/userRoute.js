import express from "express";
import { createUser, bookVisit , getAllBookings, cancelBooking, toFav, getAllFavorites} from "../controller/userControl.js";
import jwtCheck from "../config/authcon.js";
const router = express.Router();

router.post("/register" ,jwtCheck, createUser );
router.post("/bookVisit/:id",jwtCheck, bookVisit);
router.post("/allBookings",jwtCheck, getAllBookings);
router.post("/removeBooking/:id", jwtCheck, cancelBooking);
router.post("/toFav/:rid",jwtCheck,  toFav);
router.post("/allFav/",jwtCheck, getAllFavorites);

export {router as userRoute}