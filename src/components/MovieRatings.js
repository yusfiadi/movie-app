import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const MovieRatings = () => {
  const classes = useStyles()

  return (
    <div style={{ marginBottom: 45 }}>
      <div className={classes.root} style={{ height: 100, width: '92%', backgroundColor: '#F6F6F6', borderBottomLeftRadius: 60, borderTopLeftRadius: 60, right: 0, marginLeft: 'auto', marginTop: -50, boxShadow: '0px 50px 282px #9E9E9E', overflowX: 'hidden' }}>
        <Grid container spacing={1} style={{ paddingLeft: 20, paddingTop: 13, }} justify="center" >
          <Grid item xs>
            <StarIcon style={{ color: '#FCC419' }} />
            <br />
            <span>8.2</span><span style={{ fontSize: 12 }}>/10</span> <br />
            <span style={{ opacity: 0.4, fontSize: 12 }}>150,212</span>
          </Grid>
          <Grid item xs>
            <StarBorderIcon /> <br />
            <span>Rate This</span>
          </Grid>
          <Grid item xs>
            <Box display="flex" justifyContent='center'>
              <div style={{ backgroundColor: '#51CF66', width: 28, height: 24, marginBottom: 4,}}>
                <p style={{ color: 'white', margin: 0, }}>86</p>
              </div>
            </Box>

            <span>Metascore</span> <br />
            <span style={{ opacity: 0.4, fontSize: 12 }}>62 critic reviews</span>
          </Grid>
        </Grid>
      </div>
    </div >
  )
}

export default MovieRatings