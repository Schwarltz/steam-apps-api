import express from "express";
import steam from "./steam.routes";

const router = express.Router();

router.use(steam);

export default router;