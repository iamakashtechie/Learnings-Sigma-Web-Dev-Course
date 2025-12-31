import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    // title: String,
    title: {
        type: String,
        required: true,
        default: "Untitled"
    },
    desc: String,
    isDone: Boolean,
    days: Number
    });

export const Todo = mongoose.model('Todo', todoSchema);