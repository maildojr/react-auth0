import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'style'

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  }
  return isAuthenticated ? null : (
      <Button onClick={handleLogin}>Login</Button>
  );
}

export default LoginButton
