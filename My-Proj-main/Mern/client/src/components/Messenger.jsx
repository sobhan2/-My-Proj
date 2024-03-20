import { useContext } from 'react';

import {AppBar, Toolbar, styled , Box} from '@mui/material';

import LoginDialog from "./account/LoginDialog";

import { AccountContext } from '../context/AccountProvider';

import ChatDialog from './chat/ChatDialog';

const Component = styled(Box)`
    height: 100vh;
    background: #DFDFDF;
`
const Header = styled(AppBar)`
    height: 125px;
    background-color: #343434;
`

const LoginHeader = styled(AppBar)`
    height: 20vh;
    background-color: #343434;
`

const Messenger = () => {

    const {account} = useContext(AccountContext)

    return(
        <Component>
            {  
                account ? 
                <>
                    <Header>
                        <Toolbar>

                        </Toolbar>
                    </Header>
                    <ChatDialog />
                </>
                :  <> 
                <LoginHeader>
                    <Toolbar>

                    </Toolbar>
                </LoginHeader>
                <LoginDialog />
                </>
            }
        </Component>
    )
}

export default Messenger;