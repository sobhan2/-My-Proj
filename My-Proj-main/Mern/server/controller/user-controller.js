import user from "../model/User.js"


export const addUser = async(request, response) => {
    try{
       let exist = await user.findOne({ email: request.body.email})

       if(exist){
            response.status(200).json({message:"Email already exists!"}); 
            return;
       }

       const newUser =  new user(request.body);
       await  newUser.save();
       response.status(200).json(newUser);
    } catch{
        return  response.status(500).json(error.message);
    }
}

export const getUsers = async  (request ,response)=>{
    
    try{
       const users = await user.find({});
       return  response.status(200).json(users);
    } catch (error){
        return  response.status(500).send(error.message);
    }
    
}