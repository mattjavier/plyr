import React, { useContext } from 'react'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Typography from '@material-ui/core/Typography'
import ProfileContext from '../../utils/ProfileContext'

// avatars
import americanfootball001 from '../../assets/userIcons/png/001-american-football.png'
import casino002 from '../../assets/userIcons/png/002-casino.png'
import axe003 from '../../assets/userIcons/png/003-axe.png'
import glove004 from '../../assets/userIcons/png/004-glove.png'
import arcade005 from '../../assets/userIcons/png/005-arcade.png'
import tetris006 from '../../assets/userIcons/png/006-tetris.png'
import soldier007 from '../../assets/userIcons/png/007-soldier.png'
import level008 from '../../assets/userIcons/png/008-level.png'
import duck009 from '../../assets/userIcons/png/009-duck.png'
import supermario010 from '../../assets/userIcons/png/010-super-mario.png'
import mushroom011 from '../../assets/userIcons/png/011-mushroom.png'
import bomb012 from '../../assets/userIcons/png/012-bomb.png'
import ghost013 from '../../assets/userIcons/png/013-ghost.png'
import angrybirds014 from '../../assets/userIcons/png/014-angry-birds.png'
import pokeball015 from '../../assets/userIcons/png/015-pokeball.png'
import pikachu016 from '../../assets/userIcons/png/016-pikachu.png'
import minecraft017 from '../../assets/userIcons/png/017-minecraft.png'
import worldofwarcraft018 from '../../assets/userIcons/png/018-world-of-warcraft.png'
import helmet019 from '../../assets/userIcons/png/019-helmet.png'
import hammer020 from '../../assets/userIcons/png/020-hammer.png'
import captainamerica021 from '../../assets/userIcons/png/021-captain-america.png'
import spiderman022 from '../../assets/userIcons/png/022-spiderman.png'
import superman023 from '../../assets/userIcons/png/023-superman.png'
import batman024 from '../../assets/userIcons/png/024-batman.png'
import superhero025 from '../../assets/userIcons/png/025-superhero.png'
import superhero1026 from '../../assets/userIcons/png/026-superhero-1.png'
import superhero2027 from '../../assets/userIcons/png/027-superhero-2.png'
import superhero3028 from '../../assets/userIcons/png/028-superhero-3.png'
import superhero4029 from '../../assets/userIcons/png/029-superhero-4.png'
import reaper030 from '../../assets/userIcons/png/030-reaper.png'
import wizard031 from '../../assets/userIcons/png/031-wizard.png'
import monster032 from '../../assets/userIcons/png/032-monster.png'
import viking033 from '../../assets/userIcons/png/033-viking.png'
import pirate034 from '../../assets/userIcons/png/034-pirate.png'
import mermaid035 from '../../assets/userIcons/png/035-mermaid.png'
import kraken036 from '../../assets/userIcons/png/036-kraken.png'
import man7037 from '../../assets/userIcons/png/037-man-7.png'
import hipster038 from '../../assets/userIcons/png/038-hipster.png'
import man1039 from '../../assets/userIcons/png/039-man-1.png'
import man040 from '../../assets/userIcons/png/040-man.png'
import man4041 from '../../assets/userIcons/png/041-man-4.png'
import scientist042 from '../../assets/userIcons/png/042-scientist.png'
import man6043 from '../../assets/userIcons/png/043-man-6.png'
import man10044 from '../../assets/userIcons/png/044-man-10.png'
import boy1045 from '../../assets/userIcons/png/045-boy-1.png'
import boy046 from '../../assets/userIcons/png/046-boy.png'
import punk047 from '../../assets/userIcons/png/047-punk.png'
import woman7048 from '../../assets/userIcons/png/048-woman-7.png'
import hawaiian049 from '../../assets/userIcons/png/049-hawaiian.png'
import woman5050 from '../../assets/userIcons/png/050-woman-5.png'
import woman9051 from '../../assets/userIcons/png/051-woman-9.png'
import girl052 from '../../assets/userIcons/png/052-girl.png'
import woman053 from '../../assets/userIcons/png/053-woman.png'
import woman4054 from '../../assets/userIcons/png/054-woman-4.png'
import woman6055 from '../../assets/userIcons/png/055-woman-6.png'
import woman8056 from '../../assets/userIcons/png/056-woman-8.png'
import girl1057 from '../../assets/userIcons/png/057-girl-1.png'
import woman3058 from '../../assets/userIcons/png/058-woman-3.png'
import woman1059 from '../../assets/userIcons/png/059-woman-1.png'
import man3060 from '../../assets/userIcons/png/060-man-3.png'
import person061 from '../../assets/userIcons/png/061-person.png'
import woman2062 from '../../assets/userIcons/png/062-woman-2.png'
import man8063 from '../../assets/userIcons/png/063-man-8.png'
import man9064 from '../../assets/userIcons/png/064-man-9.png'
import man2065 from '../../assets/userIcons/png/065-man-2.png'
import player066 from '../../assets/userIcons/png/066-player.png'
import man5067 from '../../assets/userIcons/png/067-man-5.png'
import player1068 from '../../assets/userIcons/png/068-player-1.png'
import mobilegame069 from '../../assets/userIcons/png/069-mobile-game.png'
import gameboy070 from '../../assets/userIcons/png/070-gameboy.png'
import xbox071 from '../../assets/userIcons/png/071-xbox.png'
import controller072 from '../../assets/userIcons/png/072-controller.png'
import nintendoswitch073 from '../../assets/userIcons/png/073-nintendo-switch.png'
import mouse074 from '../../assets/userIcons/png/074-mouse.png'
import supernintendo075 from '../../assets/userIcons/png/075-super-nintendo.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(2),
    overflow: 'hidden',
    backgroundColor: theme.palette.background,
  },
  gridList: {
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '6px',
    },
    [theme.breakpoints.up('md')]: {
      width: '75%',
      padding: '8px',
    },
    height: 350,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: '#161d22',
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    backgroundColor: '#263238',
  },
}))

let avatars = [
  {
    img: americanfootball001,
    name: 'americanfootball001',
  },
  {
    img: casino002,
    name: 'casino002',
  },
  {
    img: axe003,
    name: 'axe003',
  },
  {
    img: glove004,
    name: 'glove004',
  },
  {
    img: arcade005,
    name: 'arcade005',
  },
  {
    img: tetris006,
    name: 'tetris006',
  },
  {
    img: soldier007,
    name: 'soldier007',
  },
  {
    img: level008,
    name: 'level008',
  },
  {
    img: duck009,
    name: 'duck009',
  },
  {
    img: supermario010,
    name: 'supermario010',
  },
  {
    img: mushroom011,
    name: 'mushroom011',
  },
  {
    img: bomb012,
    name: 'bomb012',
  },
  {
    img: ghost013,
    name: 'ghost013',
  },
  {
    img: angrybirds014,
    name: 'angrybirds014',
  },
  {
    img: pokeball015,
    name: 'pokeball015',
  },
  {
    img: pikachu016,
    name: 'pikachu016',
  },
  {
    img: minecraft017,
    name: 'minecraft017',
  },
  {
    img: worldofwarcraft018,
    name: 'worldofwarcraft018',
  },
  {
    img: helmet019,
    name: 'helmet019',
  },
  {
    img: hammer020,
    name: 'hammer020',
  },
  {
    img: captainamerica021,
    name: 'captainamerica021',
  },
  {
    img: spiderman022,
    name: 'spiderman022',
  },
  {
    img: superman023,
    name: 'superman023',
  },
  {
    img: batman024,
    name: 'batman024',
  },
  {
    img: superhero025,
    name: 'superhero025',
  },
  {
    img: superhero1026,
    name: 'superhero1026',
  },
  {
    img: superhero2027,
    name: 'superhero2027',
  },
  {
    img: superhero3028,
    name: 'superhero3028',
  },
  {
    img: superhero4029,
    name: 'superhero4029',
  },
  {
    img: reaper030,
    name: 'reaper030',
  },
  {
    img: wizard031,
    name: 'wizard031',
  },
  {
    img: monster032,
    name: 'monster032',
  },
  {
    img: viking033,
    name: 'viking033',
  },
  {
    img: pirate034,
    name: 'pirate034',
  },
  {
    img: mermaid035,
    name: 'mermaid035',
  },
  {
    img: kraken036,
    name: 'kraken036',
  },
  {
    img: man7037,
    name: 'man7037',
  },
  {
    img: hipster038,
    name: 'hipster038',
  },
  {
    img: man1039,
    name: 'man1039',
  },
  {
    img: man040,
    name: 'man040',
  },
  {
    img: man4041,
    name: 'man4041',
  },
  {
    img: scientist042,
    name: 'scientist042',
  },
  {
    img: man6043,
    name: 'man6043',
  },
  {
    img: man10044,
    name: 'man10044',
  },
  {
    img: boy1045,
    name: 'boy1045',
  },
  {
    img: boy046,
    name: 'boy046',
  },
  {
    img: punk047,
    name: 'punk047',
  },
  {
    img: woman7048,
    name: 'woman7048',
  },
  {
    img: hawaiian049,
    name: 'hawaiian049',
  },
  {
    img: woman5050,
    name: 'woman5050',
  },
  {
    img: woman9051,
    name: 'woman9051',
  },
  {
    img: girl052,
    name: 'girl052',
  },
  {
    img: woman053,
    name: 'woman053',
  },
  {
    img: woman4054,
    name: 'woman4054',
  },
  {
    img: woman6055,
    name: 'woman6055',
  },
  {
    img: woman8056,
    name: 'woman8056',
  },
  {
    img: girl1057,
    name: 'girl1057',
  },
  {
    img: woman3058,
    name: 'woman3058',
  },
  {
    img: woman1059,
    name: 'woman1059',
  },
  {
    img: man3060,
    name: 'man3060',
  },
  {
    img: person061,
    name: 'person061',
  },
  {
    img: woman2062,
    name: 'woman2062',
  },
  {
    img: man8063,
    name: 'man8063',
  },
  {
    img: man9064,
    name: 'man9064',
  },
  {
    img: man2065,
    name: 'man2065',
  },
  {
    img: player066,
    name: 'player066',
  },
  {
    img: man5067,
    name: 'man5067',
  },
  {
    img: player1068,
    name: 'player1068',
  },
  {
    img: gameboy070,
    name: 'gameboy070',
  },
  {
    img: mobilegame069,
    name: 'mobilegame069',
  },
  {
    img: xbox071,
    name: 'xbox071',
  },
  {
    img: controller072,
    name: 'controller072',
  },
  {
    img: nintendoswitch073,
    name: 'nintendoswitch073',
  },
  {
    img: mouse074,
    name: 'mouse074',
  },
  {
    img: supernintendo075,
    name: 'supernintendo075',
  },
]

let columns

if (window.innerWidth >= 610) {
  columns = 5
} else if (window.innerWidth >= 500) {
  columns = 4
} else {
  columns = 3
}

const AvatarArray = () => {
  const classes = useStyles()

  // const [value, setValue] = React.useState()
  const [value] = React.useState()

  const {
    handleAvatar
  } = useContext(ProfileContext)

  return (
    <>
      <div className={classes.root}>
        <FormControl component="fieldset">
          <FormLabel className={classes.formLabel} component="legend">
            <Typography
              variant="overline"
            >
              Select an avatar:
            </Typography>
          </FormLabel>
          <RadioGroup aria-label="User Avatar" name="userAvatar" value={value} onChange={handleAvatar}>
            <GridList cellHeight={110} className={classes.gridList} cols={columns}>
              {avatars.map((avatar) => (
                <GridListTile key={avatar.img} cols={1}>

                  <FormControlLabel value={avatar.img} name="avatar" control={<Radio value={avatar.img} name="avatar" />} label={<Avatar src={avatar.img} alt={avatar.img} className={classes.large} name="avatar" value={avatar.img} display=" inline" />} labelPlacement="top" />
                </GridListTile>
              ))}
            </GridList>
          </RadioGroup>
        </FormControl>
      </div>

    </>
  )
}

export default AvatarArray

