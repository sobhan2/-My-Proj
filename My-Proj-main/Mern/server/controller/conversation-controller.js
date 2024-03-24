
import Conversation from "../model/Conversation.js";


export const newConversation = async (request, response) => {
    try{
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;
        
        const exist = await Conversation.findOne({"members": {$all:  [senderId, receiverId]}});

        if(exist){
            return response.status(200).json('conversation already exists');
        }

        const newConversation = new Conversation({
            members: [senderId, receiverId],
            // messages : []
        })
        await newConversation.save();
        return response.status(200).json("New Conversation created!");
    }catch(error){
        return response.status(500).json(error.message);

    }
}

export const getConversation = async (request, response) => {
    try{
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;
       
        let conversation = await Conversation.findOne({members: { $all: [receiverId, senderId]}})
        return response.status(200).json(conversation);
    }catch(error){
        return response.status(500).json(error.message);
    }
}