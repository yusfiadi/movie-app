import React from 'react'
import Container from '@material-ui/core/Container';

import SearchAppBar from '../components/SearchAppBar'
import ScrollableMenu from '../components/ScrollableMenu'
import ScrollableGenre from '../components/ScrollableGenre'

const Home = () => {
  return (
    <Container>
      <SearchAppBar />
      <ScrollableMenu />
      <ScrollableGenre />
    </Container>
  )
}

export default Home