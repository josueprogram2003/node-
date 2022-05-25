import { Router } from "express";
const router = Router();

import * as RolesCtrl from "../controller/rol.controller";

router.get("/", RolesCtrl.getRol);
router.get("/:id", RolesCtrl.getRolId);
router.post("/", RolesCtrl.crearRol);
router.put("/:id", RolesCtrl.updateRol);
router.delete("/:id", RolesCtrl.deleteRol);

export default router;
