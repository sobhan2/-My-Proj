import { useContext } from "react"
import {Box} from "@mui/material"
import { AccountContext } from "../../../context/AccountProvider"


//  Components
import ChatHeader from "./ChatHeader"
import Messeges from "./Messeges"

const ChatBox =() => {
    const {person} = useContext(AccountContext);

    return(
        <Box style={{background:"#f2f4f5", height: "82vh"}}>
            <ChatHeader person={person}/>
            <Messeges person= {person} />
        </Box>
    )
}
export default ChatBox