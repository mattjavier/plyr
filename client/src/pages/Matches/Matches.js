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

  // matchesState.handleMatch = event => {
  //   event.preventDefault()
  //   const userArr = matchesState.userProfile.games.concat(matchesState.userProfile.systems).concat(matchesState.userProfile.genres)

  //   matchesState.matches.map(player => {
  //     console.log(player)
  //     const matchArr = player.games.concat(player.systems).concat(player.genres)
  //     const finalarray = []
  //     userArr.forEach((i) => matchArr.forEach((j) => {
  //       {
  //         if (i === j) {
  //           finalarray.push(i)
  //         }

  //       }

  //     }))
  //     console.log(finalarray)
  //     let points = Math.round((finalarray.length / userArr.length) * 100)
  //     console.log(points)
  //   })
  // }


  // matchesState.handlePlayers = event => {
  //   event.preventDefault()
  //   console.log('Finding Players')
  //   axios.get('/api/players')
  //     .then(({ data }) => {
  //       let player_profile = matchesState.userProfile._id
  //       let filteredResults = data.filter(res => res._id !== player_profile)
  //       setMatchesState({ ...matchesState, matches: filteredResults })
  //     })
  //     .catch(err => console.log(err))
  // }

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
                  setMatchesState({ ...matchesState, finalMatches: {
                    username: player.user.username,
                    matches: finalarray,
                    points: points
                  } })
                })

              })
              .catch(err => console.log(err))
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))


    // Second Part
    // console.log('Finding Players')
    // axios.get('/api/players')
    //   .then(({ data }) => {
    //     let player_profileId = matchesState.userProfile._id
    //     let filteredResults = data.filter(res => res._id !== player_profileId)
    //     setMatchesState({ ...matchesState, matches: filteredResults })
    //   })
    //   .catch(err => console.log(err))

    // Third Part
    // const userArr = matchesState.userProfile.games.concat(matchesState.userProfile.systems).concat(matchesState.userProfile.genres)

    // matchesState.matches.map(player => {
    //   console.log(player)
    //   const matchArr = player.games.concat(player.systems).concat(player.genres)
    //   const finalarray = []
    //   userArr.forEach((i) => matchArr.forEach((j) => {
    //     {
    //       if (i === j) {
    //         finalarray.push(i)
    //       }

    //     }

    //   }))
    //   console.log(finalarray)
    //   let points = Math.round((finalarray.length / userArr.length) * 100)
    //   console.log(points)
    // })

  }, [])

  return (
    <>
      <div className={classes.root}>
        <h1>Matches</h1>
        <button onClick={matchesState.handleCheckResults}>Check filtered results</button>

        <Grid container spacing={3}>
          <Match />
        </Grid>
      </div >
    </>
  )
}

export default Matches
