import { useContext, useState } from "react";

import { AccountContext } from "../../../context/AccountProvider";
import { Box, styled } from "@mui/material";

import { Chat as MessageIcon } from '@mui/icons-material'


// components
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Component = styled(Box)`
height: 50px;
padding: 16px 16px;
background: pink;
margin: 0 0 0 10px;
border-radius: 5px 5px 0 0;
display: flex;
align-items: center;
    
`
const Wrapper = styled(Box)`
    margin-left: auto;
    display: flex;
    align-items: center;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    }

    & :first-child {
        font-size: 22px;
        margin-right: 8px;
    }
`

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%',
    marginLeft: "16px",

})

const Header = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const { account } = useContext(AccountContext);

    const toggleDrawer = () => {
        setOpenDrawer(true);
    };

    return (
        <>
            <Component sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <span>{account.name}</span>

                <Wrapper>
                    <MessageIcon />
                    <HeaderMenu />

                </Wrapper>
                <Image src={account.picture} alt="dp"  onClick={() => toggleDrawer()} />
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer}/>
        </>
    )
}

export default Header;