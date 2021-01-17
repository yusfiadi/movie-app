import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginBottom: 40
  },
  tab: {
    textTransform: 'none',
    marginRight: 20,
    fontSize: 28
  }
}));

export default function ScrollableMenu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" style={{ backgroundColor: '#ffffff', boxShadow: 'none' }}>
        <Tabs
          TabIndicatorProps={{
            style: {
              height: 6,
              width: 40,
              marginLeft: 10,
              borderRadius: 100,
              backgroundColor: '#FE6D8E'
            }
          }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="In Theater" className={classes.tab} />
          <Tab label="Box Office" className={classes.tab} />
          <Tab label="Coming Soon" className={classes.tab} />
        </Tabs>
      </AppBar>
    </div>
  );
}
