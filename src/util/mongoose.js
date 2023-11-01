
function mutilpleMongooseToObj(mongooseArr) {
    return mongooseArr.map(mongoose => mongoose.toObject());
}
function singleMongooseToObj(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
}


export { mutilpleMongooseToObj, singleMongooseToObj}
