import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const {token} = req.headers
    if(!token) {
        return res.json({success:false, message:"Login Required"})
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userID = token_decode.id
        next()
    } catch (error) {
        console.log(error);
        return res.json({success:false, message:"Invalid Token"})
        
    }
}

export default authMiddleware