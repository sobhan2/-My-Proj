

import { Box , InputBase , styled} from "@mui/material";

import { EmojiEmotionsOutlined , AttachFile, Mic} from "@mui/icons-material";



const Container = styled(Box)`
    height: 60px;
    background: #ededed;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 15px
    & > * {
        margin: 8px;
        color: #919191;
    }
    
`
const Search = styled(Box)`
    background-color: white ;
    border-radius: 20px;
    width : calc(100% - 100px);
`

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    height: 20px;
    padding-left: 25px;
    font-size: 14px;
`

const ClipIcon = styled(AttachFile)`
    transform: rotate(40deg)
`

const Footer = ({sendText, setValue, value}) => {
    
    const onFileChange = (e) => {
        console.log(e);
    }


    return(
        <Container >
            
            <EmojiEmotionsOutlined/>
            <label htmlFor="fileInput">
            <ClipIcon />
            </label>
            <input 
                type="file" 
                id="fileInput"
                style={{display:"none"}}
                onChange={(e) => onFileChange(e)}  
            />
                <Search>
                    <InputField 
                    placeholder="Type a message" 
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e) => sendText(e)}
                    value={value}
                    />
                </Search>
             <Mic />
        </Container>
    )
}

export default  Footer;