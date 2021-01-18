import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar';
import JamesMangold from '../assets/images/james-mangold.png'
import MattDamon from '../assets/images/matt-damon.png'
import ChristianBale from '../assets/images/christian-bale.png'
import CaitrionaBalfe from '../assets/images/caitriona-balfe.png'


const CastAndCrew = () => {
  return (
    <div>
      <Typography variant="h5" align='left' gutterBottom style={{ marginBottom: 15 }}>
        Cast & Crew
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Box display="flex" justifyContent='center'>
            <Avatar alt="James Mangold" src={JamesMangold} style={{ height: 70, width: 70, marginBottom: 10 }} />
          </Box>
          <Typography variant="body2" align='center' gutterBottom style={{ marginBottom: 3 }}>
            James Mangold
          </Typography>
          <Typography variant="body2" align='center' gutterBottom style={{ opacity: 0.5 }}>
            Director
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Box display="flex" justifyContent='center'>
            <Avatar alt="Matt Damon" src={MattDamon} style={{ height: 70, width: 70, marginBottom: 10 }} />
          </Box>
          <Typography variant="body2" align='center' gutterBottom style={{ marginBottom: 3 }}>
            Matt Damon
          </Typography>
          <Typography variant="body2" align='center' gutterBottom style={{ opacity: 0.5 }}>
            Caroll
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Box display="flex" justifyContent='center'>
            <Avatar alt="Christian Bale" src={ChristianBale} style={{ height: 70, width: 70, marginBottom: 10 }} />
          </Box>
          <Typography variant="body2" align='center' gutterBottom style={{ marginBottom: 3 }}>
            Christian Bale
          </Typography>
          <Typography variant="body2" align='center' gutterBottom style={{ opacity: 0.5 }}>
            Ken Miles
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Box display="flex" justifyContent='center'>
            <Avatar alt="Caitriona Balfe" src={CaitrionaBalfe} style={{ height: 70, width: 70, marginBottom: 10 }} />
          </Box>
          <Typography variant="body2" align='center' gutterBottom style={{ marginBottom: 3 }}>
            Caitriona Balfe
          </Typography>
          <Typography variant="body2" align='center' gutterBottom style={{ opacity: 0.5 }}>
            Mollie
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default CastAndCrew