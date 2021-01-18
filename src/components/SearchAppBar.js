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
  appBar: {
    backgroundColor: 'transparent', 
    boxShadow: 'none'
  },
  iconMenu: {
    width: 24
  },
  search: {
    marginLeft: 'auto', 
    padding: 0
  }
}))

export default function SearchAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            aria-label='open drawer'
          >
            <img src={menu} alt='Menu Icon' className={classes.iconMenu} />
          </IconButton>

          <IconButton aria-label="search" color="default" className={classes.search}>
            <img src={search} alt='Search Icon' className={classes.iconMenu} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
