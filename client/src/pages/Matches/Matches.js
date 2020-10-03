import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Match from '../../components/Match'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  frame: {
    backgroundColor: '#4f5b62',
    borderRadius: 5,
    margin: 'auto',
    padding: theme.spacing(1),
    width: '100%',
    height: '100%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  head: {
    letterSpacing: 2,
    fontSize: '30px',
    textTransform: 'capitalize'
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
  }

  useEffect(() => {
    // Part 1
    axios.get('/api/users/myself', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`
      }
    })
      .then(({ data }) => {

        let player_profile = data.player_profile
        setMatchesState({ ...matchesState, userPlayer: data })
        axios.get(`/api/players/${player_profile}`)
          .then(({ data }) => {

            let userProfileData = data
            setMatchesState({ ...matchesState, userProfile: data })

            // Part 2
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

                // Part 3
                let userArr = userProfileData.games.map(game => game.toLowerCase().trim())
                userArr = userArr.concat(userProfileData.genres)

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
                  if (player.friendsList.some(friends => friends.playerId === player_profile)) {
                    friendStatus = 'friends'
                  } else if (player.pendingRequest.some(friends => friends.playerId === player_profile)) {
                    friendStatus = 'pending'
                  } else {
                    friendStatus = 'not friends'
                  }


                  const finalarray = []
                  userArr.forEach((i) => matchArr.forEach((j) => {
                    {
                      if (i === j) {
                        finalarray.push(i)
                      }
                    }
                  }))

                  let points = Math.round((finalarray.length / userArr.length) * 100)

                  let newArray = matchesState.finalMatches
                  newArray.push({
                    playerInfo: { ...player, friendStatus: friendStatus },
                    username: player.user.username,
                    matches: finalarray,
                    points: points,
                    friendStatus: friendStatus
                  })
                  newArray.sort((a, b) => (a.points < b.points) ? 1 : -1)

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
            <Typography
              variant="overline"
              className={classes.head}
            >
              Matches
            </Typography>

            <Grid className={classes.frame} container spacing={3}>

              {
                matchesState.finalMatches.length > 0 ? (
                  matchesState.finalMatches.map(match => (
                    // console.log(match)
                    <Match
                      match={match}
                      key={match.username}
                    />
                  ))
                ) : null
              }
            </Grid>
          </div >
        ) : window.location = '/'
      }
    </>
  )
}

export default Matches