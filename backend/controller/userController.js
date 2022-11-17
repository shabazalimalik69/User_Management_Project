const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

const access_key = process.env.access_secret_key;
const refresh_key = process.env.refresh_secret_key;




const SignUp = async(req,res)=>{
   const {name,email,password} = req.body;
   try{
      const user = await User.findOne({email});
      if(user){
        return res.status(403).send("User Already Exists");
      }
      const hashedPassword = await bcrypt.hash(password,10)
      const newUser = await User.create({name,email,password:hashedPassword});
      newUser.save();
      return res.status(200).send({message:"SignUp Successfully"});
   }catch(err){
    res.status(500).send(err.message)
   }
};



const SignIn = async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user)
      return res.status(404).send("User Doesn't Exist");
    try{
        const match = await bcrypt.compareSync(password, user.password);
        if (!match){
         return res.status(400).send({ message: "Invalid Password" });
        
      }
      const accessToken = jwt.sign({id:user._id},access_key,{expiresIn:"5m"});
      const refreshToken = jwt.sign({id:user._id},refresh_key,{expiresIn:"7d"});
      return res.status(200).send({message:"Logged Successfully",accessToken,refreshToken,email})
    }catch(err){
        res.status(500).send(err.message)
    }
 };


 const SignOut = async (request, response) => {
    const token = request.body.token;
    await Token.deleteOne({ token: token });

    response.status(204).send({ message: 'Logout Success' });
}


 module.exports = {SignUp,SignIn,SignOut};