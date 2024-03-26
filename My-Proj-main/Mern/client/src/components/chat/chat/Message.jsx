
import { Box, Typography, styled } from "@mui/material";

const Own = styled(Box)`
    background: #dcf897;
    max-width: 60%;
    margin-left: auto;
    width: fit-content;
    padding: 5px;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
    
    
`


export const Message = ({message}) => {

    return(
        <Own>
            <Typography>{message.text}</Typography>
            <Typography>{message.createdAt}</Typography>
        
        </Own>
    )
}

export default  Message;