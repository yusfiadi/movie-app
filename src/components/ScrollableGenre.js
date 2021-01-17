import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginBottom: 40
  },
  chip: {
    textTransform: 'none',
    marginRight: 20,
    fontSize: 16,
    paddingRight: 7,
    paddingLeft: 7
  }
}));

export default function ScrollableGenre() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" style={{ backgroundColor: '#ffffff', boxShadow: 'none' }}>
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Chip label="Action" variant="outlined"  className={classes.chip} />
          <Chip label="Crime" variant="outlined"  className={classes.chip} />
          <Chip label="Comedy" variant="outlined" className={classes.chip} />
          <Chip label="Drama" variant="outlined"  className={classes.chip} />
          <Chip label="Horror" variant="outlined"  className={classes.chip} />
          <Chip label="Romance" variant="outlined"  className={classes.chip} />
          <Chip label="Thriller" variant="outlined"  className={classes.chip} />
          <Chip label="Adventure" variant="outlined"  className={classes.chip} />
        </Tabs>
      </AppBar>
    </div>
  );
}
