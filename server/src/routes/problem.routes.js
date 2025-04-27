import express from "express";
import { 
  createProblem, 
  getAllProblems, 
  getProblemByProblemNumber, 
  updateProblem, 
  deleteProblem 
} from "../controllers/problem.controller.js";

const router = express.Router();

// Create a new problem
router.route("/").post(createProblem);

// Get all problems with optional filters
router.route("/").get(getAllProblems);

// Get, update, delete a single problem by problemNumber
router.route("/:problemNumber")
  .get(getProblemByProblemNumber)
  .put(updateProblem)
  .delete(deleteProblem);

export default router;
