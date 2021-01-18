import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 40
  },
  plotSummary: {
    opacity: 0.5
  }
}));

const PlotSummary = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h5" align='left' gutterBottom>
        Plot Summary
      </Typography>
      <Typography variant="body1" gutterBottom align='left' className={classes.plotSummary}>
        American car designer Carroll Shelby and driver Kn Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order.
      </Typography>
    </div>
  )
}

export default PlotSummary