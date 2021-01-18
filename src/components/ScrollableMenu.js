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
    marginRight: 10,
    fontSize: 28
  },
  appBar: {
    backgroundColor: 'transparent', 
    boxShadow: 'none'
  },
}));

export default function ScrollableMenu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabsLabel = [
    'In Theater',
    'Box Office',
    'Coming Soon'
  ]

  const renderTabs = tabsLabel.map((label) => (
    <Tab label={label} className={classes.tab} />
  ))

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.appBar}>
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
          {renderTabs}
        </Tabs>
      </AppBar>
    </div>
  );
}
