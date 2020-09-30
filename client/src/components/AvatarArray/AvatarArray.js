import React, { useContext } from 'react'
import Avatar from '@material-ui/core/Avatar'
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
// import tetris031 from '../../assets/userIcons/png/031-tetris.png'
// import brickwall032 from '../../assets/userIcons/png/032-brickwall.png'
// import pick033 from '../../assets/userIcons/png/033-pick.png'
// import diamond034 from '../../assets/userIcons/png/034-diamond.png'
// import worms035 from '../../assets/userIcons/png/035-worms.png'
// import gun036 from '../../assets/userIcons/png/036-gun.png'
// import computergame037 from '../../assets/userIcons/png/037-computer-game.png'
// import hearts038 from '../../assets/userIcons/png/038-hearts.png'
// import dice039 from '../../assets/userIcons/png/039-dice.png'
// import virtualreality040 from '../../assets/userIcons/png/040-virtual-reality.png'
// import gaming041 from '../../assets/userIcons/png/041-gaming.png'
// import arcade042 from '../../assets/userIcons/png/042-arcade.png'
// import sword043 from '../../assets/userIcons/png/043-sword.png'
// import tictactoe044 from '../../assets/userIcons/png/044-tic-tac-toe.png'
// import mobilegame045 from '../../assets/userIcons/png/045-mobile-game.png'
// import gameboy1046 from '../../assets/userIcons/png/046-gameboy-1.png'
// import mobilegame1047 from '../../assets/userIcons/png/047-mobile-game-1.png'
// import cards048 from '../../assets/userIcons/png/048-cards.png'
// import gamecontroller049 from '../../assets/userIcons/png/049-game-controller.png'
// import slotmachine050 from '../../assets/userIcons/png/050-slot-machine.png'
// import billiard051 from '../../assets/userIcons/png/051-billiard.png'
// import gamecontroller1052 from '../../assets/userIcons/png/052-game-controller-1.png'
// import chips053 from '../../assets/userIcons/png/053-chips.png'
// import gamecontroller2054 from '../../assets/userIcons/png/054-game-controller-2.png'
// import bomb055 from '../../assets/userIcons/png/055-bomb.png'
// import tetris1056 from '../../assets/userIcons/png/056-tetris-1.png'
// import puzzle057 from '../../assets/userIcons/png/057-puzzle.png'
// import crown058 from '../../assets/userIcons/png/058-crown.png'
// import ghost059 from '../../assets/userIcons/png/059-ghost.png'
// import tetris2060 from '../../assets/userIcons/png/060-tetris-2.png'
// import chess061 from '../../assets/userIcons/png/061-chess.png'
// import shield062 from '../../assets/userIcons/png/062-shield.png'
// import winner063 from '../../assets/userIcons/png/063-winner.png'
// import gamecontroller3064 from '../../assets/userIcons/png/064-game-controller-3.png'
// import cards1065 from '../../assets/userIcons/png/065-cards-1.png'
// import mouse066 from '../../assets/userIcons/png/066-mouse.png'
// import glove067 from '../../assets/userIcons/png/067-glove.png'
// import console068 from '../../assets/userIcons/png/068-console.png'
// import darts069 from '../../assets/userIcons/png/069-darts.png'
// import bowling070 from '../../assets/userIcons/png/070-bowling.png'
// import gamecontroller4071 from '../../assets/userIcons/png/071-game-controller-4.png'
// import gamecontroller5072 from '../../assets/userIcons/png/072-game-controller-5.png'
// import swords073 from '../../assets/userIcons/png/073-swords.png'
// import diamond1074 from '../../assets/userIcons/png/074-diamond-1.png'
// import gun1075 from '../../assets/userIcons/png/075-gun-1.png'
// import arrows076 from '../../assets/userIcons/png/076-arrows.png'
// import hammer077 from '../../assets/userIcons/png/077-hammer.png'
// import level078 from '../../assets/userIcons/png/078-level.png'
// import axe079 from '../../assets/userIcons/png/079-axe.png'
// import treasure080 from '../../assets/userIcons/png/080-treasure.png'
// import potion081 from '../../assets/userIcons/png/081-potion.png'
// import gem082 from '../../assets/userIcons/png/082-gem.png'
// import bomb1083 from '../../assets/userIcons/png/083-bomb-1.png'
// import poison084 from '../../assets/userIcons/png/084-poison.png'
// import helmet085 from '../../assets/userIcons/png/085-helmet.png'
// import potion1086 from '../../assets/userIcons/png/086-potion-1.png'
// import monster2087 from '../../assets/userIcons/png/087-monster-2.png'
// import game088 from '../../assets/userIcons/png/088-game.png'
// import ufo089 from '../../assets/userIcons/png/089-ufo.png'
// import trophy090 from '../../assets/userIcons/png/090-trophy.png'
// import spaceship091 from '../../assets/userIcons/png/091-spaceship.png'
// import casino092 from '../../assets/userIcons/png/092-casino.png'
// import manekineko093 from '../../assets/userIcons/png/093-maneki-neko.png'
// import helmet1094 from '../../assets/userIcons/png/094-helmet-1.png'
// import devil095 from '../../assets/userIcons/png/095-devil.png'
// import pinball096 from '../../assets/userIcons/png/096-pinball.png'
// import duck097 from '../../assets/userIcons/png/097-duck.png'
// import explosion098 from '../../assets/userIcons/png/098-explosion.png'
// import batman099 from '../../assets/userIcons/png/099-batman.png'
// import crown1100 from '../../assets/userIcons/png/100-crown-1.png'
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
    width: '75%',
    height: 350,
    padding: '8px',
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
    img: ball001,
    name: 'ball001',
  },
  {
    img: controller002,
    name: 'controller002',
  },
  {
    img: xbox003,
    name: 'xbox003',
  },
  {
    img: nintendoswitch004,
    name: 'nintendoswitch004',
  },
  {
    img: supernintendo005,
    name: 'supernintendo005',
  },
  {
    img: gameboy006,
    name: 'gameboy006',
  },
  {
    img: pokemongo007,
    name: 'pokemongo007',
  },
  {
    img: wizard008,
    name: 'wizard008',
  },
  {
    img: dwarf009,
    name: 'dwarf009',
  },
  {
    img: wolf010,
    name: 'wolf010',
  },
  {
    img: littleredridinghood011,
    name: 'littleredridinghood011',
  },
  {
    img: gnome012,
    name: 'gnome012',
  },
  {
    img: reaper013,
    name: 'reaper013',
  },
  {
    img: kraken014,
    name: 'kraken014',
  },
  {
    img: weapons015,
    name: 'weapons015',
  },
  {
    img: mermaid016,
    name: 'mermaid016',
  },
  {
    img: superhero017,
    name: 'superhero017',
  },
  {
    img: superhero1018,
    name: 'superhero1018',
  },
  {
    img: monster019,
    name: 'monster019',
  },
  {
    img: monster1020,
    name: 'monster1020',
  },
  {
    img: mushroom021,
    name: 'mushroom021',
  },
  {
    img: minecraft022,
    name: 'minecraft022',
  },
  {
    img: pikachu023,
    name: 'pikachu023',
  },
  {
    img: supermario024,
    name: 'supermario024',
  },
  {
    img: angrybirds025,
    name: 'angrybirds025',
  },
  {
    img: pokeball026,
    name: 'pokeball026',
  },
  {
    img: box027,
    name: 'box027',
  },
  {
    img: worldofwarcraft028,
    name: 'worldofwarcraft028',
  },
  {
    img: carnivorousplant029,
    name: 'carnivorousplant029',
  },
  {
    img: bomberman030,
    name: 'bomberman030',
  },
  // {
  //   img: tetris031,
  //   name: 'tetris031',
  // },
  // {
  //   img: brickwall032,
  //   name: 'brickwall032',
  // },
  // {
  //   img: pick033,
  //   name: 'pick033',
  // },
  // {
  //   img: diamond034,
  //   name: 'diamond034',
  // },
  // {
  //   img: worms035,
  //   name: 'worms035',
  // },
  // {
  //   img: gun036,
  //   name: 'gun036',
  // },
  // {
  //   img: computergame037,
  //   name: 'computergame037',
  // },
  // {
  //   img: hearts038,
  //   name: 'hearts038',
  // },
  // {
  //   img: dice039,
  //   name: 'dice039',
  // },
  // {
  //   img: virtualreality040,
  //   name: 'virtualreality040',
  // },
  // {
  //   img: gaming041,
  //   name: 'gaming041',
  // },
  // {
  //   img: arcade042,
  //   name: 'arcade042',
  // },
  // {
  //   img: sword043,
  //   name: 'sword043',
  // },
  // {
  //   img: tictactoe044,
  //   name: 'tictactoe044',
  // },
  // {
  //   img: mobilegame045,
  //   name: 'mobilegame045',
  // },
  // {
  //   img: gameboy1046,
  //   name: 'gameboy1046',
  // },
  // {
  //   img: mobilegame1047,
  //   name: 'mobilegame1047',
  // },
  // {
  //   img: cards048,
  //   name: 'cards048',
  // },
  // {
  //   img: gamecontroller049,
  //   name: 'gamecontroller049',
  // },
  // {
  //   img: slotmachine050,
  //   name: 'slotmachine050',
  // },
  // {
  //   img: billiard051,
  //   name: 'billiard051',
  // },
  // {
  //   img: gamecontroller1052,
  //   name: 'gamecontroller1052',
  // },
  // {
  //   img: chips053,
  //   name: 'chips053',
  // },
  // {
  //   img: gamecontroller2054,
  //   name: 'gamecontroller2054',
  // },
  // {
  //   img: bomb055,
  //   name: 'bomb055',
  // },
  // {
  //   img: tetris1056,
  //   name: 'tetris1056',
  // },
  // {
  //   img: puzzle057,
  //   name: 'puzzle057',
  // },
  // {
  //   img: crown058,
  //   name: 'crown058',
  // },
  // {
  //   img: ghost059,
  //   name: 'ghost059',
  // },
  // {
  //   img: tetris2060,
  //   name: 'tetris2060',
  // },
  // {
  //   img: chess061,
  //   name: 'chess061',
  // },
  // {
  //   img: shield062,
  //   name: 'shield062',
  // },
  // {
  //   img: winner063,
  //   name: 'winner063',
  // },
  // {
  //   img: gamecontroller3064,
  //   name: 'gamecontroller3064',
  // },
  // {
  //   img: cards1065,
  //   name: 'cards1065',
  // },
  // {
  //   img: mouse066,
  //   name: 'mouse066',
  // },
  // {
  //   img: glove067,
  //   name: 'glove067',
  // },
  // {
  //   img: console068,
  //   name: 'console068',
  // },
  // {
  //   img: darts069,
  //   name: 'darts069',
  // },
  // {
  //   img: bowling070,
  //   name: 'bowling070',
  // },
  // {
  //   img: gamecontroller4071,
  //   name: 'gamecontroller4071',
  // },
  // {
  //   img: gamecontroller5072,
  //   name: 'gamecontroller5072',
  // },
  // {
  //   img: swords073,
  //   name: 'swords073',
  // },
  // {
  //   img: diamond1074,
  //   name: 'diamond1074',
  // },
  // {
  //   img: gun1075,
  //   name: 'gun1075',
  // },
  // {
  //   img: arrows076,
  //   name: 'arrows076',
  // },
  // {
  //   img: hammer077,
  //   name: 'hammer077',
  // },
  // {
  //   img: level078,
  //   name: 'level078',
  // },
  // {
  //   img: axe079,
  //   name: 'axe079',
  // },
  // {
  //   img: treasure080,
  //   name: 'treasure080',
  // },
  // {
  //   img: potion081,
  //   name: 'potion081',
  // },
  // {
  //   img: gem082,
  //   name: 'gem082',
  // },
  // {
  //   img: bomb1083,
  //   name: 'bomb1083',
  // },
  // {
  //   img: poison084,
  //   name: 'poison084',
  // },
  // {
  //   img: helmet085,
  //   name: 'helmet085',
  // },
  // {
  //   img: potion1086,
  //   name: 'potion1086',
  // },
  // {
  //   img: monster2087,
  //   name: 'monster2087',
  // },
  // {
  //   img: game088,
  //   name: 'game088',
  // },
  // {
  //   img: ufo089,
  //   name: 'ufo089',
  // },
  // {
  //   img: trophy090,
  //   name: 'trophy090',
  // },
  // {
  //   img: spaceship091,
  //   name: 'spaceship091',
  // },
  // {
  //   img: casino092,
  //   name: 'casino092',
  // },
  // {
  //   img: manekineko093,
  //   name: 'manekineko093',
  // },
  // {
  //   img: helmet1094,
  //   name: 'helmet1094',
  // },
  // {
  //   img: devil095,
  //   name: 'devil095',
  // },
  // {
  //   img: pinball096,
  //   name: 'pinball096',
  // },
  // {
  //   img: duck097,
  //   name: 'duck097',
  // },
  // {
  //   img: explosion098,
  //   name: 'explosion098',
  // },
  // {
  //   img: batman099,
  //   name: 'batman099',
  // },
  // {
  //   img: crown1100,
  //   name: 'crown1100',
  // },
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

  const [value, setValue] = React.useState()

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

