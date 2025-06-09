import jwt from "jsonwebtoken"
export const generateToken = (userId,res) => {
    const token = jwt.sign({userId},process.env.JWT_TOKEN , {
        expiresIn:"7d"
    })
    res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000, // IN MILLISECONDS
        httpOnly:true, // PREVENT XSS ATTACKS - CROSS SITE SCRIPTING
        sameSite:"strict", // CROSS SITE REQUEST FORGERY
        secure:process.env.NODE_ENV !== "development"
    })
    return token;
};