import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 40,
    // zIndex: 10,
    position: 'absolute',
    top: 0
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
}))

export default function BackAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static' style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='default'
            aria-label='open drawer'
          >
            <ArrowBackIosIcon style={{ color: 'black' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
