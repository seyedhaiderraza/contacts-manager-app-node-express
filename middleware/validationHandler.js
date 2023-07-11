const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const validateToken = asyncHandler(async(req, resp, next)=>{
let authHeader = req.headers.Authorization || req.headers.authorization
if(authHeader && authHeader.startsWith("Bearer")){
    const token = authHeader.split(" ")[1]
    jwt.verify(token,process.env.SECRET,(err, decoded)=>{
        if(err){
            resp.status(401)
            throw new Error("invalid token")
        }
        console.log(decoded)
        req.user = decoded.user
        next()//since this is a middleware
    })
}else{
    resp.status(401)
    throw new Error("User is not authorized")
}
})

module.exports = validateToken