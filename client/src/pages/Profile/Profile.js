import React from 'react'
import BuildProfile from '../../components/BuildProfile'


const Profile = () => {

  const [profile, setProfile] = React.useState({
    username: '',
    bio: '',
    competitive: false,
    systems: [],
    games: [],
    genres: [],
    profiles: []
  });

  return (
    <>
      <h1>Profile</h1>

      <BuildProfile />
    </>
  )
}

export default Profile
