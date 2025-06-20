import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true}
}, 
{timestamps: true, 
    versionKey: false
}
)

const UserModel = mongoose.model("user", UserSchema, "users")
export default UserModel;