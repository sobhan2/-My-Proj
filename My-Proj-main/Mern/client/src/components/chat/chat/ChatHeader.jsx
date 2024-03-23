
import { Box , Typography,  styled } from "@mui/material";
import { Search, MoreVert }  from '@mui/icons-material';



const Header = styled(Box)`
    height: 44px;
    background: #6d6d6d;
    padding: 8px 16px;
    display: flex;
    align-items: center;
`
const Image = styled("img")({
    height:  32,
    borderRadius: 50,
    objectFit: 'cover',
    paddingLeft: 10,
})

const Name = styled(Typography)`
    margin-left: 12px !important;
    justify-content: left;
    color: rgb(255,255,255)
`
const Status = styled(Typography)`
    margin-left: 12px !important;
    justify-content: left;
    font-size: 12px;
    color: rgb(255,255,255,0.6)
`
const RightContainer = styled(Box)`
   margin-left:  auto;
`

const ChatHeader = () => {
    return (
        <Header>
            <Image src={'data:image/png;base64,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'} alt="dp" />
            <Box>
                <Name>Name</Name>
                <Status>Online Status</Status>
            </Box>
            <RightContainer>
                <Search style={{color: "#fff"}}/>
                <MoreVert style={{color: "#fff"}} />
            </RightContainer>
        </Header>
    )
}

export default ChatHeader;