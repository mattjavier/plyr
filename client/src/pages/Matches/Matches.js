import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Match from '../../components/Match'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '8px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const Matches = () => {
  const classes = useStyles()

  const [matchesState, setMatchesState] = useState({
    finalMatches: []
  })

  matchesState.handleCheckResults = event => {
    event.preventDefault()
    console.log(matchesState.finalMatches)
    console.log(matchesState.userPlayer)
    // axios.get('/api/users/myself', {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem('user')}`
    //   }
    // })
    // .then(({data}) => {
    //   setMatchesState({ ...matchesState, userPlayer: data})
    // })
    // .catch(err => console.log(err))
  }

  useEffect(() => {
    // Part 1
    axios.get('/api/users/myself', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`
      }
    })
      .then(({ data }) => {
        console.log(data)
        let player_profile = data.player_profile
        setMatchesState({ ...matchesState, userPlayer: data })
        axios.get(`/api/players/${player_profile}`)
          .then(({ data }) => {
            console.log(data)
            let userProfileData = data
            setMatchesState({ ...matchesState, userProfile: data })

            // Part 2
            console.log('Finding Players')
            axios.get('/api/players')
              .then(({ data }) => {
                let filteredResults = data.filter(res => res._id !== player_profile)
                if (userProfileData.competetive) {
                  filteredResults = filteredResults.filter(res => {
                    return res.competetive === true
                  })
                } else {
                  filteredResults = filteredResults.filter(res => {
                    return res.competetive === false
                  })
                }
                setMatchesState({ ...matchesState, matches: filteredResults })
                console.log(filteredResults)

                // Part 3
                let userArr = userProfileData.games.concat(userProfileData.genres)

                if (userProfileData.xbox.length > 0) {
                  userArr = [...userArr, 'xbox']
                }

                if (userProfileData.playstation.length > 0) {
                  userArr = [...userArr, 'playstation']
                }

                if (userProfileData.nintendoSwitch.length > 0) {
                  userArr = [...userArr, 'nintendo switch']
                }

                if (userProfileData.pc.length > 0) {
                  userArr = [...userArr, 'pc']
                }

                filteredResults.map(player => {
                  console.log(player)
                  let matchArr = player.games.concat(player.genres)

                  if (player.xbox.length > 0) {
                    matchArr = [...matchArr, 'xbox']
                  }

                  if (player.playstation.length > 0) {
                    matchArr = [...matchArr, 'playstation']
                  }

                  if (player.nintendoSwitch.length > 0) {
                    matchArr = [...matchArr, 'nintendo switch']
                  }

                  if (player.pc.length > 0) {
                    matchArr = [...matchArr, 'pc']
                  }

                  let friendStatus
                  if (player.friendsList.some(friends => friends.playerId === player_profile )) {
                    friendStatus = 'friends'
                    console.log(friendStatus)
                  } else if (player.pendingRequest.some(friends => friends.playerId === player_profile )) {
                    friendStatus = 'pending'
                    console.log(friendStatus)
                  } else {
                    friendStatus = 'not friends'
                    console.log(friendStatus)
                  }


                  const finalarray = []
                  userArr.forEach((i) => matchArr.forEach((j) => {
                    {
                      if (i === j) {
                        finalarray.push(i)
                      }
                    }
                  }))
                  console.log(finalarray)
                  let points = Math.round((finalarray.length / userArr.length) * 100)
                  console.log(points)
                  let newArray = matchesState.finalMatches
                  newArray.push({
                    playerInfo: { ...player, friendStatus: friendStatus },
                    username: player.user.username,
                    matches: finalarray,
                    points: points,
                    friendStatus: friendStatus
                  })
                  newArray.sort((a, b) => (a.points < b.points) ? 1 : -1)
                  console.log(newArray)
                  setMatchesState({ ...matchesState, finalMatches: newArray })
                })

              })
              .catch(err => console.log(err))
          })
          .catch(err => console.log(err))
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
      {
        localStorage.getItem('user') ? (
          <div className={classes.root}>
            <h1>Matches</h1>

            <Grid container spacing={3}>

            </Grid>
            { matchesState.finalMatches.length > 0 ? (
              matchesState.finalMatches.map(match => (
                // console.log(match)
                <Match
                  match={match}
                  key={match.username}
                />
              ))
            ) : null }
          </div >
        ) : window.location = '/'
      }
    </>
  )
}

export default Matches