import { Router } from "express";
import DataControllers from "../controllers/DataControllers";
import ValidationReqControllers from "../controllers/ValidationReqControllers";
const router = Router()


router.get('/citizens', ValidationReqControllers.requestLogger, DataControllers.getCitizens)
router.post('/citizens', ValidationReqControllers.requestLogger, DataControllers.setCitizen)
router.post('/citizens/create', ValidationReqControllers.requestLogger, DataControllers.setCitizens)

router.get('/city', ValidationReqControllers.requestLogger, DataControllers.getCity)
router.post('/city', ValidationReqControllers.requestLogger, DataControllers.setCity)


export default router