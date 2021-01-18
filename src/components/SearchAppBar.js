import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'

import menu from '../assets/icons/menu.png'
import search from '../assets/icons/search.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 20,
    paddingTop: 40
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
}))

export default function SearchAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static' style={{ backgroundColor: '#ffffff', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='default'
            aria-label='open drawer'
          >
            <img src={menu} alt='Menu Icon' style={{ width: 24 }} />
          </IconButton>

          <IconButton aria-label="search" color="default" style={{ marginLeft: 'auto', padding: 0 }}>
            <img src={search} alt='Search Icon' style={{ width: 24 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
