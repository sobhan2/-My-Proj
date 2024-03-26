import { useContext, useEffect , useState} from "react"
import {Box} from "@mui/material"
import { AccountContext } from "../../../context/AccountProvider"
import { getConversation } from "../../../service/api"


//  Components
import ChatHeader from "./ChatHeader"
import Messeges from "./Messeges"

const ChatBox =() => {
    const {person, account} = useContext(AccountContext);
    const  [conversation, setConversation] = useState({});

    useEffect(() => {
        const getConversationDetails = async () => {
           let data = await getConversation({senderId: account.sub , receiverId: person.sub,})
           setConversation(data);
        // console.log(data);
    
        }
        getConversationDetails()
    },[person.sub]);

    return(
        <Box style={{background:"#f2f4f5", height: "82vh"}}>
            <ChatHeader person={person}/>
            <Messeges person= {person} conversation={conversation}/>
        </Box>
    )
}
export default ChatBox