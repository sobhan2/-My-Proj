import {Box} from "@mui/material"

//  Components
import ChatHeader from "./ChatHeader"
import Messeges from "./Messeges"

const ChatBox =() => {
    return(
        <Box style={{background:"#f2f4f5", height: "82vh"}}>
            <ChatHeader />
            <Messeges/>
        </Box>
    )
}
export default ChatBox