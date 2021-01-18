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
  },
  appBar: {
    backgroundColor: 'transparent', 
    boxShadow: 'none'
  }
}));

export default function ScrollableGenre() {
  const classes = useStyles();

  const dummyChips= [
    'Action',
    'Thriller',
    'Drama',
    'Crime',
    'Comedy',
    'Horror',
    'Adventure'
  ]

  const renderChips = dummyChips.map((chip) => (
    <Chip label={chip} variant="outlined"  className={classes.chip} />
  ))

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {renderChips}
        </Tabs>
      </AppBar>
    </div>
  );
}
