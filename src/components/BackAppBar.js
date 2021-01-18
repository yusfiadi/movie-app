import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 40,
    position: 'absolute',
    top: 0
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  backAppBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  arrowBack: {
    color: 'black'
  }
}))

export default function BackAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='relative' className={classes.backAppBar}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='default'
            aria-label='open drawer'
          >
            <ArrowBackIosIcon className={classes.arrowBack} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
