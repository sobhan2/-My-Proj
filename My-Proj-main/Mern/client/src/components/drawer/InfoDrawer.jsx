import { useContext } from "react";

import { AccountContext } from "../../context/AccountProvider";  
import { Drawer , Box, Typography, styled} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

// Components
import Profile from "./Profile";

const drawerStyle = {
    left: 20,
    top: 17,
    height: '95%',
    width: '30%',
    boxShadow: 'none'
}

const Component = styled(Box)`
    background: #e1e1e1;
    height: 85%;
`

const Header = styled(Box)`
    background: #343434;
    color: #fff;
    height: 145px;
    display: flex;
    & > svg, & > p {
        margin-top: auto;
        padding: 15px;
        font-weight: 600;
    }
`
const Image = styled('img')({
    height: '30%',
    width: '30%',
    borderRadius: '50%',
    
    marginTop: '20px',
    marginRight:  '30%',
    marginLeft: '30%'
})


const InfoDrawer = ({open, setOpen}) => { //{ open: true, setOpen: function(), ......100 } = props
    
    const handleClose = () => {
        setOpen(false);
    }
    
    const { account } = useContext(AccountContext);


    return (
        <Drawer
        
        open={open}
        onClose={handleClose}
        PaperProps={{"sx":drawerStyle}}
        style={{zIndex: 1500 }}
      >
        <Header>
            <ArrowBack onClick={() => setOpen(false)} />
            <Typography>Profile</Typography>
        </Header>
        <Component>
            <Box>
                
            <Image src={account.picture} alt="dp"   />
            <span style={{ marginTop: '40px', marginRight:  '40%', marginLeft: '35%'}}>{account.name}</span>
            </Box>
            <Profile />
        </Component>
      </Drawer>
    )
}

export  default InfoDrawer;