import { Router } from "express";
import DataControllers from "../controllers/DataControllers";
import ValidationReqControllers from "../controllers/ValidationReqControllers";
const router = Router()


router.get('/citizens', ValidationReqControllers.requestLogger, DataControllers.getCitizens)
router.post('/citizens', ValidationReqControllers.requestLogger, DataControllers.setCitizen)


export default router