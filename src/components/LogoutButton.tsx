import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from 'style'

const LoginButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  const handleLogout = () => {
      logout();
  }
  return <Button onClick={handleLogout}>Logout</Button>
}

export default LoginButton
