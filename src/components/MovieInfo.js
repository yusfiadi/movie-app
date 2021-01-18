import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Chip from '@material-ui/core/Chip'
import {makeStyles} from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  chipStyle: {
    textTransform: 'none',
    marginRight: 10,
    fontSize: 14,
    marginBottom: 10
  },
  titleStyle: {
    marginBottom: 5
  },
  boxInfoStyle: {
    textAlign: 'left', 
    opacity: 0.4, 
    marginBottom: 20
  },
  boxAddStyle: {
    width: 64, 
    height: 64, 
    backgroundColor: '#FE6D8E', 
    borderRadius: 20
  },
  addStyle: {
    color: 'white', 
    paddingTop: 14
  },
  spanStyle: {
    marginRight: 28
  }
}));

const MovieInfo = () => {
  const classes = useStyles()

  const dummyData = {
    title: 'Ford v Ferrari',
    releaseYear: '2019',
    rating: 'PG-13',
    duration: '2h 32min'
  }

  const dummyChips= [
    'Action',
    'Thriller',
    'Drama'
  ]

  const renderChips = dummyChips.map((chip) => (
    <Chip label={chip} variant="outlined" className={classes.chipStyle} />
  ))

  return (
    <div style={{ marginBottom: 30 }}>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Typography variant="h4" align='left' className={classes.titleStyle}>
            {dummyData.title}
          </Typography>
          <Box className={classes.boxInfoStyle}>
            <span className={classes.spanStyle}>{dummyData.releaseYear}</span>
            <span className={classes.spanStyle}>{dummyData.rating}</span>
            <span>{dummyData.duration}</span>
          </Box>
          <Box align='left'>
            {renderChips}
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box className={classes.boxAddStyle}>
            <AddIcon className={classes.addStyle} fontSize='large' />
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default MovieInfo