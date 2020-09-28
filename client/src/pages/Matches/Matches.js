import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Match from '../../components/Match'
import Grid from '@material-ui/core/Grid';
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
                setMatchesState({ ...matchesState, matches: filteredResults })
                console.log(filteredResults)

                // Part 3
                const userArr = userProfileData.games.concat(userProfileData.systems).concat(userProfileData.genres)

                filteredResults.map(player => {
                  console.log(player)
                  const matchArr = player.games.concat(player.systems).concat(player.genres)
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
                  let obj = {
                    playerInfo: player,
                    username: player.user.username,
                    matchingArray: finalarray,
                    points: points
                  }
                  let newArray = []
                  newArray = matchesState.finalMatches
                  newArray.push(obj)
                  console.log(newArray)
                  setMatchesState({ ...matchesState, finalMatches: newArray })
                  console.log(matchesState.finalMatches)
                  // End of useEffect

                })

              })
              .catch(err => console.log(err))
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))

  }, [])

  return (
    <>
      <div className={classes.root}>
        <h1>Matches</h1>
        <button onClick={matchesState.handleCheckResults}>Check filtered results</button>

        <Grid container spacing={3}>
          {/* <Match /> */}
        </Grid>
        { matchesState.finalMatches.length > 0 ? (
          matchesState.finalMatches.map(match => (
            console.log(match)
            // <Match
            //   match={match}
            //   key={match.username}
            //   />
          ))
        ): console.log('nothing in finalmatches') }
      </div >
    </>
  )
}

export default Matches
