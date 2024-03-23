import { Dialog, Box, styled } from "@mui/material";
//Components
import Menu from "./Menu/Menu";
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";


const dialogStyle = {
    height: '95%',
    width: '100%',
    margin: '20px',
    textAlign: 'center',
    maxHeight: '100%',
    maxWidth: '100%',
    boxShadow: 'none',
    overflow: 'hidden'
}

const Components = styled(Box)`
    display: flex;
`
const LeftComponent = styled(Box)`
    min-width: 450px ;
`
const RightComponent = styled(Box)`
    width: 73% ;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.5)
`
const ChatDialog = () => {

    return (
        <Dialog
            open={true} PaperProps={{sx: dialogStyle}} hideBackdrop={true} maxWidth={'md'}
        >
            <Box style={{background:"#888888"}}>
            <p style={{color:"#f2f5f6", fontSize:"36px", fontWeight:"800"}}>FireDWeller</p>

            <Components>
                <LeftComponent>
                    <Menu />
                </LeftComponent>
                <RightComponent>
                    {/* {<EmptyChat />} */}
                    <ChatBox />
                </RightComponent>
            </Components>
            </Box>
        </Dialog>
    );
}

export default ChatDialog;