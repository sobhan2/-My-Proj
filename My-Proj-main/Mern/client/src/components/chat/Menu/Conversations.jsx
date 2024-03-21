
import { useEffect , useState, useContext} from "react";

import { getUsers } from "../../../service/api";
import { Box , styled, Divider} from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";

import Conversation from "./Conversation";

const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
`

const Conversations = () => {

    const  [users, setUsers] = useState([]);

    const { account } = useContext(AccountContext) ;

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            setUsers(response)
        }
        fetchData();
    }, []);

    const styledDivider = styled(Divider)`
        margin: 0 0 0 70px;
        background: #343434;
    `
    

    return (
       <Component>
        {
            users.map(user => (
                user.sub !== account.sub &&
                <>
                <Conversation  user={user} />
                <styledDivider />
                </>
            ))
        }
       </Component>
    )
}

export default Conversations;