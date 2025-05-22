import { Router } from "express";
import notesRoutes from "./notesRoutes";

const router = Router();

router.use("/notes", notesRoutes);

export default router;
