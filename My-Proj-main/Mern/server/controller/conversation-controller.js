
import conversation from "../model/Conversation.js";


export const newConversation = async (request, response) => {
    try{
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;

        const exist = await conversation.findOne({"members": {$all:  [senderId, receiverId]}});

        if(exist){
            return response.status(200).json('conversation already exists');
        }

        const newConversation = new conversation({
            members: [senderId, receiverId],
            // messages : []
        })
        await newConversation.save();
        return response.status(200).json("New Conversation created!");
    }catch(error){
        return response.status(500).json(error.message);

    }
}