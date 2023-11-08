import mongoose from "mongoose";

const { Schema } = mongoose;
const BookHistorySchema = new Schema({
    title: String,
    author: String,
    summary: String
});
const BookHistory = mongoose.model("bookshistories", BookHistorySchema);
export default BookHistory;
