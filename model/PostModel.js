import mongoose from "mongoose";
const dataSchema = new mongoose.Schema(
    {
        id:{type:String},
        img:{type:String},
        title:{type:String},
        shortDes:{type:String},
        description:{type: String}
},
{
    timestamps:true,
    versionKey:false
}
) 

const PostModel = mongoose.model('Post', dataSchema, 'posts')
export default PostModel;