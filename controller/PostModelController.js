import PostModel from "../model/PostModel.js"

// Read all
export const PostController = async(req, res)=>{
    let data = await PostModel.find()
    return res.status(200).json(data)
}

// Create

export const CreatePost = async (req, res) => {
    try {
        const post = await PostModel.create(req.body);
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Update

export const UpdatePost = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedPost = await PostModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Delete
export const DeletePost = async (req, res) => {
    try {
        const id = req.params.id;
        await PostModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}








