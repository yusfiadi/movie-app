import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Chip from '@material-ui/core/Chip'
import {makeStyles} from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  chip: {
    textTransform: 'none',
    marginRight: 10,
    fontSize: 14,
    marginBottom: 10
  }
}));

const MovieInfo = () => {
  const classes = useStyles()

  return (
    <div style={{ marginBottom: 30 }}>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Typography variant="h4" align='left' style={{ marginBottom: 5}}>
            Ford v Ferrari
          </Typography>
          <Box style={{ textAlign: 'left', opacity: 0.4, marginBottom: 20 }}>
            <span style={{ marginRight: 28 }}>2019</span>
            <span style={{ marginRight: 28 }}>PG-13</span>
            <span>2h 32min</span>
          </Box>
          <Box style={{ textAlign: 'left' }}>
            <Chip label="Action" variant="outlined" className={classes.chip} />
            <Chip label="Thriller" variant="outlined" className={classes.chip} />
            <Chip label="Drama" variant="outlined" className={classes.chip} />
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box style={{ width: 64, height: 64, backgroundColor: '#FE6D8E', borderRadius: 20 }}>
            <AddIcon style={{ color: 'white', paddingTop: 14 }} fontSize='large' />
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default MovieInfo