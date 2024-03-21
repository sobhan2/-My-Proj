import { Box , Typography} from "@mui/material";


const Conversation = ({user}) => {

    return(

        <Box>
            <Box>
                <img src={user.picture} alt="dp" />
            </Box>
            <Box>

            </Box>
        </Box>
    )
}

export  default Conversation;