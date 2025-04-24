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
    },
});
  
const sampleTestCaseSchema = new mongoose.Schema(
    {
    input: { 
        type: String, 
        required: true 
    },
    output: { 
        type: String, 
        required: true 
    },
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
        default: [] 
    },

    sampleTestCases: [sampleTestCaseSchema], // ✅ shown to the user

    testCases: [testCaseSchema],             // ✅ used to test user code

    }, 
    { 
        timestamps: true 
    }
);

export const Problem = mongoose.model("Problem", problemSchema);
  