import {Box, Typography, styled} from  "@mui/material";

const Component = styled(Box)`
    display: flex;
    justify-content: left;
    padding-left: 10px;
`

const Conversation = ({ user }) => {

    return(

       <Component>
        <Box>
            <img src={user.picture} alt="dp"  />
        </Box>
        <Box>
            <Typography>{user.name}</Typography>
        </Box>
       </Component>
    )
}

export  default Conversation;