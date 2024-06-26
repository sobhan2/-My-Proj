import { useContext } from "react";
import { Box, Typography, styled } from "@mui/material";
import { formatDate } from "../../../utils/common-utils";
import { AccountContext } from "../../../context/AccountProvider";

const Own = styled(Box)`
    background: #d4ddf6;
    max-width: 60%;
    margin-left: auto;
    width: fit-content;
    padding: 5px;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
    
    
`
const Wrapper = styled(Box)`
    background: #ffffff;
    max-width: 60%;
    
    width: fit-content;
    padding: 5px;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
    
    
`
const Text = styled(Typography)`
    font-size: 14px;
    padding: 0 25px 0 5px;
`
const Time = styled(Typography)`
    font-size: 10px;
    color: #919191;
    // padding: 0 25px 0 5px;
    margin-top: auto;
    word-break: keep-all;
`


export const Message = ({message}) => {
    const {account} = useContext(AccountContext);

    return(
        <>
            {
                account.sub === message.senderId?
                    <Own>
                        <Text>{message.text}</Text>
                        <Time>{formatDate(message.createdAt)}</Time>
        
                    </Own>
                : 
                    <Wrapper>
                    <Text>{message.text}</Text>
                    <Time>{formatDate(message.createdAt)}</Time>
            
                    </Wrapper>   
            }
        </>
        
    )
}

export default  Message;