import { Dialog, Box, styled } from "@mui/material";
//Components
import Menu from "./Menu/Menu";
import EmptyChat from "./chat/EmptyChat";



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
            <p>Jai shree Radhe</p>

            <Components>
                <LeftComponent>
                    <Menu />
                </LeftComponent>
                <RightComponent>
                    <EmptyChat />
                </RightComponent>
            </Components>

        </Dialog>
    );
}

export default ChatDialog;