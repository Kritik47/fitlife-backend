import mongoose from "mongoose";
const ConncetDb=async()=>{
    try{
        await mongoose.connect("mongodb+srv://KRITIKKUMAR:MUNDABENZ@cluster0.qyvjbzi.mongodb.net/MONGOCRUD?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoCrude Connected.....");
    }catch(e){
        console.log("Connection Error....")
    }
}
export default ConncetDb;