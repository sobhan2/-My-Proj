import { useContext } from "react";
import {Box, Typography, styled} from  "@mui/material";

import { AccountContext } from "../../../context/AccountProvider";
import { setConversation } from "../../../service/api";

const Component = styled(Box)`
    display: flex;
    justify-content: left;
    margin-left: 10px;
    padding-left: 10px;
    padding-right: 20px;
    padding-top: 5px;
    color: #f2f3f5;
    border:  solid 1px #c0c0c0;
    padding-bottom: 5px;
    height: 45px;
    background:  #545454;
    cursor: pointer;
`
const Image = styled("img")({
    width: 40,
    height: 40,
    borderRadius: 100,
    paddingLeft: 10, 
    
})

const Conversation = ({ user }) => {

    const { setPerson , account } = useContext(AccountContext);

    const getUser = async () => {
        setPerson(user);
        await setConversation({senderId: account.sub, recieverId: user.sub})
    }

    return(

       <Component onClick={() => getUser()}>
        <Box>
            <Image src={user.picture} alt="dp"  />
        </Box>
        <Box>
            <Typography>{user.name}</Typography>
        </Box>
       </Component>
    )
}

export  default Conversation;