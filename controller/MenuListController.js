import MenuListModel from "../model/MenuList.js"

export const MenuList = async(req, res)=>{
    try{
        
        let data = await MenuListModel.find()
        return res.status(200).json(data)
    }
    catch(err){
        return {status:"fail", message:err.message}
    }
}