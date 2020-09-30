import React, { useState, useEffect } from 'react'
import { join } from 'path'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import YoutubeEmbedVideo from 'youtube-embed-video'
import ball001 from '../../assets/userIcons/png/001-ball.png'
import controller002 from '../../assets/userIcons/png/002-controller.png'
import xbox003 from '../../assets/userIcons/png/003-xbox.png'
import nintendoswitch004 from '../../assets/userIcons/png/004-nintendo-switch.png'
import supernintendo005 from '../../assets/userIcons/png/005-super-nintendo.png'
import gameboy006 from '../../assets/userIcons/png/006-gameboy.png'
import pokemongo007 from '../../assets/userIcons/png/007-pokemon-go.png'
import wizard008 from '../../assets/userIcons/png/008-wizard.png'
import dwarf009 from '../../assets/userIcons/png/009-dwarf.png'
import wolf010 from '../../assets/userIcons/png/010-wolf.png'
import littleredridinghood011 from '../../assets/userIcons/png/011-little-red-riding-hood.png'
import gnome012 from '../../assets/userIcons/png/012-gnome.png'
import reaper013 from '../../assets/userIcons/png/013-reaper.png'
import kraken014 from '../../assets/userIcons/png/014-kraken.png'
import weapons015 from '../../assets/userIcons/png/015-weapons.png'
import mermaid016 from '../../assets/userIcons/png/016-mermaid.png'
import superhero017 from '../../assets/userIcons/png/017-superhero.png'
import superhero1018 from '../../assets/userIcons/png/018-superhero-1.png'
import monster019 from '../../assets/userIcons/png/019-monster.png'
import monster1020 from '../../assets/userIcons/png/020-monster-1.png'
import mushroom021 from '../../assets/userIcons/png/021-mushroom.png'
import minecraft022 from '../../assets/userIcons/png/022-minecraft.png'
import pikachu023 from '../../assets/userIcons/png/023-pikachu.png'
import supermario024 from '../../assets/userIcons/png/024-super-mario.png'
import angrybirds025 from '../../assets/userIcons/png/025-angry-birds.png'
import pokeball026 from '../../assets/userIcons/png/026-pokeball.png'
import box027 from '../../assets/userIcons/png/027-box.png'
import worldofwarcraft028 from '../../assets/userIcons/png/028-world-of-warcraft.png'
import carnivorousplant029 from '../../assets/userIcons/png/029-carnivorous-plant.png'
import bomberman030 from '../../assets/userIcons/png/030-bomberman.png'
import tetris031 from '../../assets/userIcons/png/031-tetris.png'
import brickwall032 from '../../assets/userIcons/png/032-brickwall.png'
import pick033 from '../../assets/userIcons/png/033-pick.png'
import diamond034 from '../../assets/userIcons/png/034-diamond.png'
import worms035 from '../../assets/userIcons/png/035-worms.png'
import gun036 from '../../assets/userIcons/png/036-gun.png'
import computergame037 from '../../assets/userIcons/png/037-computer-game.png'
import hearts038 from '../../assets/userIcons/png/038-hearts.png'
import dice039 from '../../assets/userIcons/png/039-dice.png'
import virtualreality040 from '../../assets/userIcons/png/040-virtual-reality.png'
import gaming041 from '../../assets/userIcons/png/041-gaming.png'
import arcade042 from '../../assets/userIcons/png/042-arcade.png'
import sword043 from '../../assets/userIcons/png/043-sword.png'
import tictactoe044 from '../../assets/userIcons/png/044-tic-tac-toe.png'
import mobilegame045 from '../../assets/userIcons/png/045-mobile-game.png'
import gameboy1046 from '../../assets/userIcons/png/046-gameboy-1.png'
import mobilegame1047 from '../../assets/userIcons/png/047-mobile-game-1.png'
import cards048 from '../../assets/userIcons/png/048-cards.png'
import gamecontroller049 from '../../assets/userIcons/png/049-game-controller.png'
import slotmachine050 from '../../assets/userIcons/png/050-slot-machine.png'
import billiard051 from '../../assets/userIcons/png/051-billiard.png'
import gamecontroller1052 from '../../assets/userIcons/png/052-game-controller-1.png'
import chips053 from '../../assets/userIcons/png/053-chips.png'
import gamecontroller2054 from '../../assets/userIcons/png/054-game-controller-2.png'
import bomb055 from '../../assets/userIcons/png/055-bomb.png'
import tetris1056 from '../../assets/userIcons/png/056-tetris-1.png'
import puzzle057 from '../../assets/userIcons/png/057-puzzle.png'
import crown058 from '../../assets/userIcons/png/058-crown.png'
import ghost059 from '../../assets/userIcons/png/059-ghost.png'
import tetris2060 from '../../assets/userIcons/png/060-tetris-2.png'
import chess061 from '../../assets/userIcons/png/061-chess.png'
import shield062 from '../../assets/userIcons/png/062-shield.png'
import winner063 from '../../assets/userIcons/png/063-winner.png'
import gamecontroller3064 from '../../assets/userIcons/png/064-game-controller-3.png'
import cards1065 from '../../assets/userIcons/png/065-cards-1.png'
import mouse066 from '../../assets/userIcons/png/066-mouse.png'
import glove067 from '../../assets/userIcons/png/067-glove.png'
import console068 from '../../assets/userIcons/png/068-console.png'
import darts069 from '../../assets/userIcons/png/069-darts.png'
import bowling070 from '../../assets/userIcons/png/070-bowling.png'
import gamecontroller4071 from '../../assets/userIcons/png/071-game-controller-4.png'
import gamecontroller5072 from '../../assets/userIcons/png/072-game-controller-5.png'
import swords073 from '../../assets/userIcons/png/073-swords.png'
import diamond1074 from '../../assets/userIcons/png/074-diamond-1.png'
import gun1075 from '../../assets/userIcons/png/075-gun-1.png'
import arrows076 from '../../assets/userIcons/png/076-arrows.png'
import hammer077 from '../../assets/userIcons/png/077-hammer.png'
import level078 from '../../assets/userIcons/png/078-level.png'
import axe079 from '../../assets/userIcons/png/079-axe.png'
import treasure080 from '../../assets/userIcons/png/080-treasure.png'
import potion081 from '../../assets/userIcons/png/081-potion.png'
import gem082 from '../../assets/userIcons/png/082-gem.png'
import bomb1083 from '../../assets/userIcons/png/083-bomb-1.png'
import poison084 from '../../assets/userIcons/png/084-poison.png'
import helmet085 from '../../assets/userIcons/png/085-helmet.png'
import potion1086 from '../../assets/userIcons/png/086-potion-1.png'
import monster2087 from '../../assets/userIcons/png/087-monster-2.png'
import game088 from '../../assets/userIcons/png/088-game.png'
import ufo089 from '../../assets/userIcons/png/089-ufo.png'
import trophy090 from '../../assets/userIcons/png/090-trophy.png'
import spaceship091 from '../../assets/userIcons/png/091-spaceship.png'
import casino092 from '../../assets/userIcons/png/092-casino.png'
import manekineko093 from '../../assets/userIcons/png/093-maneki-neko.png'
import helmet1094 from '../../assets/userIcons/png/094-helmet-1.png'
import devil095 from '../../assets/userIcons/png/095-devil.png'
import pinball096 from '../../assets/userIcons/png/096-pinball.png'
import duck097 from '../../assets/userIcons/png/097-duck.png'
import explosion098 from '../../assets/userIcons/png/098-explosion.png'
import batman099 from '../../assets/userIcons/png/099-batman.png'
import crown1100 from '../../assets/userIcons/png/100-crown-1.png'


const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    margin: 'auto',
    borderRadius: 0,
    width: '90%',
    height: '100%'
  },
  top: {
    backgroundColor: '#845bb3',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 0,
    marginBottom: 20,
    paddingBottom: 10
  },
  content: {
    width: '95%',
    margin: 10,
    borderRadius: 0,
  },
  avatar: {
    width: 100,
    height: 100,
    fontSize: 50,
    margin: 20,
    boxShadow: theme.shadows[6],
  },
  discord: {
    color: '#ffffff',
    letterSpacing: 2
  },
  video: {
    width: '95%',
    borderRadius: 0,
    marginBottom: 10,
    boxShadow: theme.shadows[6],
  },
  text: {
    color: '#1a1a1a'
  },
}))

let avatarSrc

const Player = props => {
  const classes = useStyles()
  console.log(props.player)
  console.log(props.player.avatar.length)


  const avatarCode = avatar => {
    console.log(avatar)
    if (avatar.length === 1) {
      return (<Avatar>{avatar}</Avatar>)
    } else {
      return (<Avatar src={avatar} />)
    }
  }

  console.log(avatarSrc)

  let video = 'https://www.youtube.com/watch?v='
  let start = video.indexOf('=')

  return (
    <Grid>
      <Paper className={classes.paper} elevation={3}>
        <Paper className={classes.top}>
          {avatarCode(props.player.avatar)}
          <Typography
            className={classes.discord}
            variant="h6"
          >
            Discord: {props.player.discord}
          </Typography>
        </Paper>
        <Paper className={classes.content} elevation={5}>
          <Typography className={classes.text}>
            Player Bio: {props.player.bio}
          </Typography>
          {
            props.player.xbox.length > 0 ? (
              <Typography className={classes.text}>
                Xbox: {props.player.xbox}
              </Typography>
            ) : null
          }
          {
            props.player.playstation.length > 0 ? (
              <Typography className={classes.text}>
                PlayStation: {props.player.playstation}
              </Typography>
            ) : null
          }
          {
            props.player.nintendoSwitch.length > 0 ? (
              <Typography className={classes.text}>
                Nintendo Switch: {props.player.nintendoSwitch}
              </Typography>
            ) : null
          }
          {
            props.player.pc.length > 0 ? (
              <Typography className={classes.text}>
                PC: {props.player.pc}
              </Typography>
            ) : null
          }
          {
            props.player.genres.length > 0 ? (
              <Typography className={classes.text}>
                Genres: {props.player.genres.join(", ")}
              </Typography>
            ) : null
          }
          {
            props.player.games.length > 0 ? (
              <Typography className={classes.text}>
                Games: {props.player.games.join(", ")}
              </Typography>
            ) : null
          }
        </Paper>
        {
          props.player.highlight ? (
            <YoutubeEmbedVideo className={classes.video} videoId={props.player.highlight.slice(start + 1)} suggestions={false} />
          ) : null
        }
      </Paper>
    </Grid>
  )
}

export default Player