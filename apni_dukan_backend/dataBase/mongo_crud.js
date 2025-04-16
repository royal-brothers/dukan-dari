import mongoose from "mongoose";

const insertQuery = async(query_paraam)=>{
    
    const{modelName, data , queryType="insertOne"} = query_paraam;
   let  group;

    switch(queryType){
        case "insertMany":
            let insert_data="";
             group = await mongoose.model(modelName);
            insert_data = await group.insertMany(data);
            break;

         default :

         group = await mongoose.model(modelName);
         insert_data = await group.create(data);
         break;
    }
return insert_data;
    //todo --> delete get  make by grovo

}
//test

//sadaasd

export {insertQuery}