import mongoose from "mongoose";

const { Schema } = mongoose;
const bookAddSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    }
});
export default mongoose.model("bookshistory", bookAddSchema);