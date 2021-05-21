var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Admin:Admin123@cluster0.xyswa.mongodb.net/mongo?retryWrites=true&w=majority',{
  keepAlive: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
mongoose.set('useFindAndModify', false);
console.log("mongodb connect...")
module.exports=mongoose;
