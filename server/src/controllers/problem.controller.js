import { Problem } from "../models/problem.model.js"

// Create 
export const createProblem = async (req, res) => { 
    try { 
        const newProblem = await Problem.create(req.body) 
        res.status(201).json({ 
            success: true, problem: newProblem 
        }) 
    } 
    catch (error) { 
        res.status(500).json({
            success: false, message: error.message 
        }) 
    } 
}

// Read All 
export const getAllProblems = async (req, res) => { 
    try { 
        const problems = await Problem.find()
        .sort({ 
            createdAt: -1 
        }) 
        res.status(200).json({ 
            success: true, problems 
        }) 
    } 
    catch (error) { 
        res.status(500).json({ 
            success: false, message: error.message 
        }) 
    } 
}

// Read One 
export const getProblemById = async (req, res) => { 
    try { 
        const problem = await Problem.findById(req.params.id) 
        if (!problem) return res.status(404).json({ 
            success: false, message: "Problem not found" 
        }) 
        res.status(200).json({ 
            success: true, problem 
        }) 
    } 
    catch (error) { 
        res.status(500).json({ 
            success: false, message: error.message 
        }) 
    } 
}

// Update 
export const updateProblem = async (req, res) => { 
    try { 
        const updated = await Problem.findByIdAndUpdate(req.params.id, req.body, { 
            new: true 
        }) 
        res.status(200).json({ 
            success: true, problem: updated 
        }) 
    } 
    catch (error) { 
        res.status(500).json({ 
            success: false, message: error.message 
        }) 
    } 
}

// Delete 
export const deleteProblem = async (req, res) => { 
    try { 
        await Problem.findByIdAndDelete(req.params.id) 
        res.status(200).json({ 
            success: true, message: "Problem deleted" 
        }) 
    } 
    catch (error) { 
        res.status(500).json({ 
            success: false, message: error.message 
        }) 
    } 
}