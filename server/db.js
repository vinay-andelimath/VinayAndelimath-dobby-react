const mongoose=require("mongoose");

module.exports=()=>{
const connectionParams={
useNewUrlParser:true,
useUnifiedTopology:true
};
try{
  mongoose.connect(process.env.DB,connectionParams)
  console.log ("Successfully connected to database");
} catch(error){
console.log("Could not connect..please check your connection");
}
}