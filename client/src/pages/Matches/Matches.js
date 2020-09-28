import axios from 'axios'
import React, {useState, useEffect}  from 'react'


const Matches = () => {

  const [matchesState, setMatchesState] = useState({
    player: '',
    matches: []
  })

  useEffect(() => {
     axios.get('/api/users/myself', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`
      }})
      .then(({data}) => {
          console.log(data)
          setMatchesState({ ...matchesState, player: data._id})
      })
      .catch(err => console.log(err))
  })


  return (
    <>
      <h1>Hi</h1>
    </>
  )
}

export default Matches







