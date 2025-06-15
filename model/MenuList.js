import mongoose from "mongoose";
const dataSchema = new mongoose.Schema(
    {
        id:{type: String},
        name:{type: String}
},
{timestamps: true,
    versionKey: false
}
)
const MenuListModel = mongoose.model('MenuList', dataSchema, 'menulist')
export default MenuListModel;