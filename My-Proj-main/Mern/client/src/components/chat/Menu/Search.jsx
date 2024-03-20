import { Box } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { InputBase } from '@mui/material';
import styled from "@emotion/styled";

const Component = styled(Box)`
    background: #fff;
    height: 45px;
    border-bottom: 1px solid #2f2f2f;

`;

const Icon = styled(Box)`
    position: absolute;
    height: 100%;
    padding: 6px;
    color: #919191;
    left: 10px;
    margin-top: 5px;

`;

const Wrapper = styled(Box)`
    background-color: #f0f2f5;
    position: relative;
    margin: 0 10px;
    width: calc(100% - 30px - 65px);
    height: calc(100% - 16px);
    display: flex;
    align-items: center;
    padding-left: 50px;
    margin-top: 10px;
    margin-left: 30px;
    border-radius: 5px;
`;

const InputField = styled(InputBase)`
    margin-right: auto;
    margin-left: 20px;
    width: 100%;
    font-size: 16px;
    width: 73%;
    min-width: 300px;
   
    padding: 16px;
    height: 15px;

`;

const Search = () => {
    return (
        <Component>
            <Wrapper>
                <Icon>
                    <SearchIcon />
                </Icon>
                <InputField placeholder="Search or start a new chat" />
            </Wrapper>
        </Component>
    );
};

export default Search;