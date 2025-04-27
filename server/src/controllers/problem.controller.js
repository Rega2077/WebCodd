// Updated problem.controller.js with problemNumber support and tag filtering/search functionality

import { Problem } from "../models/problem.model.js";

// Create a new problem
export const createProblem = async (req, res) => {
    try {
        const { problemNumber, title, statement, difficulty, tags, sampleTestCases, testCases, starterCode } = req.body;

        if (!problemNumber || !title || !statement || !difficulty || !starterCode) {
            return res.status(400).json({ message: "Please provide all required fields." });
        }

        const existingProblem = await Problem.findOne({ problemNumber });
        if (existingProblem) {
            return res.status(400).json({ message: "Problem number already exists." });
        }

        const problem = await Problem.create({
            problemNumber,
            title,
            statement,
            difficulty,
            tags,
            sampleTestCases,
            testCases,
            starterCode,
        });

        res.status(201).json({ success: true, problem });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all problems with optional tag filtering and search
export const getAllProblems = async (req, res) => {
    try {
        const { tag, search, problemNumber } = req.query;
        let query = {};

        if (tag) {
            query.tags = tag;
        }

        if (search) {
            query.title = { $regex: search, $options: "i" };
        }

        if (problemNumber) {
            query.problemNumber = problemNumber;
        }

        const problems = await Problem.find(query).sort({ problemNumber: 1 });
        res.status(200).json({ success: true, problems });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get a single problem by problemNumber
export const getProblemByProblemNumber = async (req, res) => {
    try {
        const { problemNumber } = req.params;
        const problem = await Problem.findOne({ problemNumber });

        if (!problem) {
            return res.status(404).json({ success: false, message: "Problem not found." });
        }

        res.status(200).json({ success: true, problem });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update a problem by problemNumber
export const updateProblem = async (req, res) => {
    try {
        const { problemNumber } = req.params;
        const updates = req.body;

        const updatedProblem = await Problem.findOneAndUpdate({ problemNumber }, updates, { new: true });

        if (!updatedProblem) {
            return res.status(404).json({ success: false, message: "Problem not found." });
        }

        res.status(200).json({ success: true, updatedProblem });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete a problem by problemNumber
export const deleteProblem = async (req, res) => {
    try {
        const { problemNumber } = req.params;
        const deletedProblem = await Problem.findOneAndDelete({ problemNumber });

        if (!deletedProblem) {
            return res.status(404).json({ success: false, message: "Problem not found." });
        }

        res.status(200).json({ success: true, message: "Problem deleted successfully." });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
