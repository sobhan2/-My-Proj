import { Box , styled} from "@mui/material";
import Footer from "./Footer";

const Wrapper = styled(Box)`
    background-image: url(${'https://plus.unsplash.com/premium_photo-1674729243673-0b5e871a8a24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYXQlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww'});
    
`
const Component = styled(Box)`
    height: 82vh;
    overflow-y: scroll;
`


const Messeges = () => {

    return (
        <Wrapper>
            <Component>

            </Component>
            <Footer />
        </Wrapper>

    )
}

export  default Messeges;