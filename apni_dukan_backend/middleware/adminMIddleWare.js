import jsonwebToken from "jsonwebtoken";


const genToken = async(data)=>{
    const token = jsonwebToken.sign({data}, process.env.TOKEN_SECRET, {
        algorithm: "HS512",
    });

    return token;
}

const verifyToken  = (req, res, next)=>{
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(" ")[1];
        
        if(token)
        {
            jsonwebToken.verify(token , process.env.TOKEN_SECRET, async(err, tokenData)=>{
                if (err) {
                    return res.status(401).json({ message: "Invalid token", error: err });
                }
                
                if (tokenData) {
                    req.user = tokenData.data;
                    next();
                } else {
                    return res.status(403).json({ message: "Invalid token data" });
                }
            });
        }
    } catch (error) {
        return res.status(500).json({ message: "admin token error" });

    }
}

export {genToken , verifyToken};
