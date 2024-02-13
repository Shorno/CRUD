import mongoose from "mongoose";

const topicSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        info: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;


//MONGODB_URI=mongodb+srv://MrShorno:shorno.420@cluster0.bpej1qy.mongodb.net/crud-db