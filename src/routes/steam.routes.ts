import express from "express";
import { retrieveSteamAppDetailsHandler } from "../controller/steam.controller";
import validateResource from "../middleware/validateResource";
import { retrieveDetailsSchema } from "../schema/steam.schema";

const router = express.Router();

router.get(
    "/steam",
    validateResource(retrieveDetailsSchema),
    retrieveSteamAppDetailsHandler
);

export default router;