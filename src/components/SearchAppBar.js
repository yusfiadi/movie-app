import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
}))

export default function SearchAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static' style={{ backgroundColor: '#ffffff', boxShadow: 'none'}}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='default'
            aria-label='open drawer'
          >
            <MenuIcon />
          </IconButton>

          <IconButton aria-label="search" color="default" style={{ marginLeft: 'auto', padding: 0}}>
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
