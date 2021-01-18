import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles'

import JamesMangold from '../assets/images/james-mangold.png'
import MattDamon from '../assets/images/matt-damon.png'
import ChristianBale from '../assets/images/christian-bale.png'
import CaitrionaBalfe from '../assets/images/caitriona-balfe.png'

const crews = [
  {
    id: 1,
    name: 'James Mangold',
    photo: JamesMangold,
    role: 'Director'
  },
  {
    id: 2,
    name: 'Matt Damon',
    photo: MattDamon,
    role: 'Caroll'
  },
  {
    id: 3,
    name: 'Christian Bale',
    photo: ChristianBale,
    role: 'Ken Miles'
  },
  {
    id: 4,
    name: 'Caitriona Balfe',
    photo: CaitrionaBalfe,
    role: 'Mollie'
  }
]

const useStyles = makeStyles((theme) => ({
  titleStyle: {
    marginBottom: 15
  },
  avatarStyle: {
    height: 70,
    width: 70,
    marginBottom: 10
  },
  nameStyle: {
    marginBottom: 3
  },
  roleStyle: {
    opacity: 0.5
  }
}))

const CastAndCrew = () => {
  const classes = useStyles()

  const CrewLists = crews.map((crew) => (
    <Grid item xs={3} key={crew.id} >
      <Box display="flex" justifyContent='center'>
        <Avatar alt={crew.name} src={crew.photo} className={classes.avatarStyle} />
      </Box>
      <Typography variant="body2" align='center' gutterBottom className={classes.nameStyle}>
        {crew.name}
      </Typography>
      <Typography variant="body2" align='center' gutterBottom className={classes.roleStyle}>
        {crew.role}
      </Typography>
    </Grid >
  ))
  return (
    <div>
      <Typography variant="h5" align='left' gutterBottom className={classes.titleStyle}>
        Cast & Crew
      </Typography>
      <Grid container spacing={3}>
        {CrewLists}
      </Grid>
    </div>
  )
}

export default CastAndCrew