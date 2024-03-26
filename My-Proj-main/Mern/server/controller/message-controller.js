import message from "../model/Message.js";
import Conversation from "../model/Conversation.js";


export const newMessage = async (request, response) => {

    try{
        const newMessage = new  message(request.body);
        await newMessage.save();
        await Conversation.findByIdAndUpdate(request.body.conversationId, {message: request.body.text})

        return response.status(200).json("Message has been sent Successfully!")
    }catch(error){
        return response.status(500).json(error.message);
    }

}

export const getMessages = async (request,response)=>{
    
    // let conversation = await Conversation.findOne({$or:[{"user1":request.userId,"user2":request.params.id}, {"user1":request
    // let conversation;
    try{
        const messages =  await message.find({conversationId : request.params.id})
        return response.status(200).json(messages);
    //    conversation=await Conversation  .findOne({$or:[{"participants":request.user._id}, {"messages.author" : request.user._id}]
    //     conversation=await Conversation.findOne({$or:[{"participants.userId1":request.user._id,"participants.userId2":request.params.
    //     conversation=await Conversation.findOne({$or:[{"participants":request.user._id}, {"messages.author
    } catch(error){
        return response.status(500).json(error.message)
    }
}