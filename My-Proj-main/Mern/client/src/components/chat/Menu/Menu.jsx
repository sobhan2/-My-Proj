




//Components
import { Box } from "@mui/material";
import Header from "./Header";
import Search from "./Search";


const Menu = () => {

    return (
        <Box>
            <Header />
            <Search />
            <Box style={{backgroundColor: "#565656", height: "40px", marginTop: "15px", marginLeft:"10px", color: "#f2f5f5"}}>Aman </Box>
        </Box>
    )
}

export default Menu;