import React, { useContext } from 'react';
import { Dialog, Box, Typography, styled } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { AccountContext } from '../../context/AccountProvider';

const dialogStyle = {
  height: '95%',
  width: '80%',
  marginTop: '12%',
  textAlign: 'center',
  maxHeight: '100%',
  maxWidth: '100%',
  boxShadow: 'none',
  overflow: 'hidden',
};

const SBox = styled(Box)`
  margin-right:60%;
  justify-content: center;
  align-items: center;
  padding-left: 300px;
`;

const LeftBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: auto;
  margin-right: auto ;
`;

const Component = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Title = styled(Typography)`
  font-size: 26px;
  color: #646464;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;

const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = (res) => {
    const decoded = jwtDecode(res.credential);
    setAccount(decoded);
  };

  const onLoginError = (res) => {
    console.log('Login Failed', res);
  };

  const googleLoginTheme = {
    backgroundColor: 'black',
    color: 'white',
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true} >
     <Box style={{height: "100%", width: "100%", backgroundColor: "#565656"}}>
      <Title style={{color:"white"}}>Welcome to FireDWeller</Title>
      <Component>
        <LeftBox>
          <SBox>
            <GoogleLogin
              onSuccess={onLoginSuccess}
              onError={onLoginError}
              theme={googleLoginTheme}
            />
          </SBox>
        </LeftBox>
      </Component>
      </Box>
    </Dialog>
  );
};

export default LoginDialog;