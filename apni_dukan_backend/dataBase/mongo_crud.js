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

const deleteQuery = async (query_param) => {
    const { modelName, id, queryType = "deleteOne" } = query_param;
    let group;
    let delete_data = "";
  
    switch (queryType) {
      case "deleteMany":
        group = await mongoose.model(modelName);
        delete_data = await group.deleteMany(id);
        break;
  
      default:
        group = await mongoose.model(modelName);
        delete_data = await group.deleteOne(id);
        break;
    }
  
    return delete_data;
  };

//test

//sadaasd

export {
    insertQuery,
    deleteQuery
}