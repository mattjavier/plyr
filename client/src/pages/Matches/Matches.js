import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Match from '../../components/Match'
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import { Redirect } from 'react-router';

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
}));

const Matches = () => {
  const classes = useStyles();

  const [matchesState, setMatchesState] = useState({
    userPlayer: '',
    finalMatches: []
  })

  matchesState.handleCheckResults = event => {
    event.preventDefault()
    console.log(matchesState.finalMatches)
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
                    playerInfo: player,
                    username: player.user.username,
                    matches: finalarray,
                    points: points
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
            <h1>Matches</h1>
            {/* <button onClick={matchesState.handleCheckResults}>Check filtered results</button> */}

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
            ) : console.log('nothing in finalmatches')}
          </div >
        ) : window.location = '/'
      }
    </>
  )
}

export default Matches
