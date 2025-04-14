import mongoose, {Schema} from "mongoose";

const testCaseSchema = new mongoose.Schema(
    {
    input: { 
        type: String, 
        required: true 
    }, 
    output: { 
        type: String, 
        required: true 
    }
  });

const problemSchema = new Schema(
    {
        title: {
            type: String, 
            required: true
        },
        statement: {
            type: String, 
            required: true
        },
        difficulty: { 
            type: String, 
            enum: ["easy", "medium", "hard"], 
            required: true 
        },
        tags: {
            type: [String], 
            default: [],
        },
        testCases: [testCaseSchema],
    }, 
    {
        timestamps: true
    }
)


export const Problem = mongoose.model("Problem", problemSchema)