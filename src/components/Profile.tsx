import React from 'react'
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react'
import { ImageProfile, Text } from 'style';
import { Wrapper } from 'style/Grid';
import LoginButton from 'components/LoginButton';
import LogoutButton from 'components/LogoutButton';

const Profile = () => {
    const { isAuthenticated, user } = useAuth0();
  return (
    <Wrapper>
        { !isAuthenticated ? <LoginButton /> 
        : (
            <>
                <Text bold={true}>Logged in</Text>
                <ImageProfile src={user?.picture} alt={user?.name}/>
                <Text>{user?.name} - {user?.email}</Text>
                <LogoutButton />
            </>
        )}
    </Wrapper>
  )
}

export default Profile
