import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 100, 
    width: '92%', 
    backgroundColor: '#F6F6F6', 
    borderBottomLeftRadius: 60, 
    borderTopLeftRadius: 60, 
    right: 0, 
    marginLeft: 'auto', 
    marginTop: -50, 
    boxShadow: '0px 50px 282px #9E9E9E', 
    overflowX: 'hidden', 
    marginBottom: 45
  },
  totalRatings: {
    opacity: 0.4,
    fontSize: 12
  },
  maxRating: {
    fontSize: 12
  },
  starIcon: {
    color: '#FCC419'
  },
  gridContainer: {
    paddingLeft: 20, 
    paddingTop: 13
  },
  boxMetascore: {
    backgroundColor: '#51CF66', 
    width: 28, 
    height: 24, 
    marginBottom: 4
  },
  textMetaScore: {
    color: 'white', 
    margin: 0, 
  }
}));

const MovieRatings = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.gridContainer} justify="center" >
        <Grid item xs>
          <StarIcon className={classes.starIcon} />
          <br />
          <span>8.2</span><span className={classes.maxRating}>/10</span> <br />
          <span className={classes.totalRatings}>150,212</span>
        </Grid>
        <Grid item xs>
          <StarBorderIcon /> <br />
          <span>Rate This</span>
        </Grid>
        <Grid item xs>
          <Box display="flex" justifyContent='center'>
            <Box className={classes.boxMetascore}>
              <p className={classes.textMetaScore}>86</p>
            </Box>
          </Box>

          <span>Metascore</span> <br />
          <span className={classes.totalRatings}>62 critic reviews</span>
        </Grid>
      </Grid>
    </div>
  )
}

export default MovieRatings