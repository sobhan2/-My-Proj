import { useContext , useState} from "react";
import {AccountContext} from "../../../context/AccountProvider";
import { Box , styled} from "@mui/material";
import Footer from "./Footer";
import { newMessage } from "../../../service/api";

const Wrapper = styled(Box)`
    background-image: url(${'https://plus.unsplash.com/premium_photo-1674729243673-0b5e871a8a24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww'});
    
`
const Component = styled(Box)`
    height: 82vh;
    overflow-y: scroll;
`


const Messeges = ({person, conversation}) => {
    
    const [value, setValue] = useState("")
    const {account} = useContext(AccountContext);
    

    const sendText = async (e) => {
        console.log(e);
        const code = e.keyCode || e.which;
        if (code === 13){
            let message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: 'text',
                text: value,
            }
            console.log(message);
            await newMessage(message)
            setValue("");
        }
    }


    return (
        <Wrapper>
            <Component>

            </Component>
            <Footer 
                sendText= {sendText}
                setValue= {setValue}
            />
        </Wrapper>

    )
}

export  default Messeges;