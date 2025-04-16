import mongoose from "mongoose";

const insertQuery = async (query_paraam) => {
  const { modelName, data, queryType = "insertOne" } = query_paraam;
  const groupModel = mongoose.model(modelName);
  let insert_data = "";
  switch (queryType) {
    case "insertMany":
      insert_data = await groupModel.insertMany(data);
      break;

    default:
      insert_data = await groupModel.create(data);
      break;
  }
  return insert_data;
};

const deleteQuery = async (query_param) => {
  const { modelName, where, queryType = "default" } = query_param;
  const groupModel = mongoose.model(modelName);
  let delete_data = "";

  switch (queryType) {
    case "deleteOne":
      delete_data = await groupModel.deleteOne(where);
      break;

    default:
      group = await mongoose.model(modelName);
      delete_data = await groupModel.deleteMany(where);
      break;
  }

  return delete_data;
};

const distinctQury = async (query_param) => {
  const { modelName, distinct_name, where } = query_param;
  const groupModel = mongoose.model(modelName);
  const distinct_data = await groupModel.distinct(distinct_name, where);
  return distinct_data;
};

const find_all = async (query_param) => {
  const {
    modelName,
    where = {},
    select = {},
    sort = {},
    limit = 0,
    skip = 0,
    populateData,
  } = query_param;

  const groupModel = mongoose.model(modelName);
  return await groupModel
    .find(where, select)
    .sort(sort)
    .limit(limit)
    .skip(skip)
    .populate(populateData)
    .lean();
};

const find_one = async(query_param)=>{
  const {
    modelName,
    where = {},
    select = {},
    sort = {},
    limit = 0,
    skip = 0,
  } = query_param;
  const groupModel = mongoose.model(modelName);
return await groupModel
.findOne(where , select)
.sort(sort)
.limit(limit)
.skip(skip);
};

const updateQuery = async(query_param)=>{
  const {modelName , where , updateData , queryType}=query_param;
  const groupModel = mongoose.model(modelName);
  let update = "";

  switch(queryType) {
    case "updateOne":
      update = await groupModel.updateOne(where , updateData);
      break;
      case "updateMany":
        update= await groupModel.updateMany(where, updateData);
        break;
        
        default :
        update = await groupModel.findOneAndUpdate(where , updateData , {
          upsert:true,
          new : true
        });
        break;
  }
  return update;

}

const count_records = async(query_paraam)=>{
  const {modelName , condition={}}= query_paraam;
  const groupModel = mongoose.model(modelName);
  return await groupModel.countDocuments(condition);

}

const find_distinct = async (query_param) => {
  const { modelName, distinct_key, where = {} } = query_param;
  return await mongoose.model(modelName).distinct(distinct_key, where);
};

export { insertQuery, deleteQuery, distinctQury , find_all, find_one, updateQuery, distinctQury, find_distinct, count_records};
