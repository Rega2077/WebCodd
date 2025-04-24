import express from "express" 
import { createProblem, getAllProblems, getProblemById, updateProblem, deleteProblem, } from "../controllers/problem.controller.js"

const router = express.Router()

router.post("/", createProblem) 
router.get("/", getAllProblems) 
router.get("/:id", getProblemById) 
router.put("/:id", updateProblem) 
router.delete("/:id", deleteProblem)

export default router