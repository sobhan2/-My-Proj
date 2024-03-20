import {Box, styled, Typography, Divider } from '@mui/material'
import {emptyChatImage} from '../../../constants/data'


const Component = styled(Box)`
    background: #fff;
    padding: 30px 0;
    text-align: center;
    height: 100%;
`
const Container = styled(Box)`
    padding: 0 200px;
`
const Image = styled('img')({
    width: '400px',
    marginTop: "100px",
})

const EmptyChat = () => {
    return (
        <Component>    
            <Container >
                <Image src={emptyChatImage} alt="No chats"/>
                <Typography style={{fontSize: "26px", color:"#888888", height: "100vh"}}>Welcome to FireDWeller</Typography>
                <Divider />
                
            </Container>
        </Component>
    )
}

export default EmptyChat;