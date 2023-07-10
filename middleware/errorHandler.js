const {constant} = require("../constants")
const errorHandler = (err,req, res, next) =>{
    const statusCode = res?.statusCode || 500
    let title 
    switch(statusCode){
      
        case  constant.UNAUTHORIZED:
            title='validation failed'
            break
        case  constant.VALIDATION_ERROR:
            title='fields are missing'
            break
        case constant.NOT_FOUND:
             title='resource not found'
            break
        case constant.FORBIDDEN:
             title='forbidden'
            break
        case constant.SERVER_ERROR:
             title='something wrong at server'
            break
        default:
            console.log("Error occured");
            break;
    }

    console.log(err)
    res.json({title:title, message:err.message})//, stackTrace:err.stackTrace })
}
module.exports= errorHandler