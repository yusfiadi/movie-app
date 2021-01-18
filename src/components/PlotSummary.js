import React from 'react'
import Typography from '@material-ui/core/Typography';

const PlotSummary = () => {
  return (
    <div style={{ marginBottom: 40}}>
      <Typography variant="h5" align='left' gutterBottom>
        Plot Summary
      </Typography>
      <Typography variant="body1" gutterBottom align='left' style={{ opacity: 0.5 }}>
        American car designer Carroll Shelby and driver Kn Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order.
      </Typography>
    </div>
  )
}

export default PlotSummary