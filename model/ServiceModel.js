import mongoose from "mongoose"
const dataSchema = new mongoose.Schema(
    {
        id:{type:String},
        icon:{type:String},
        title:{type:String},
        description:{type:String}
    },
    {
        timestamps:true,
        versionKey: false
    }
)

const ServiceModel = mongoose.model("service", dataSchema, "services")
export default ServiceModel;