import mongoose from "mongoose"

const dataSchema = new mongoose.Schema({
    id:{type: String},
    name:{type: String},
    designation:{type: String},
    img:{type: String}
},
{
    timestamps:true,
    versionKey: false
}
) 

const EmployeeModel = mongoose.model("employee", dataSchema,"employees")
export default EmployeeModel;