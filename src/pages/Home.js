import React from 'react'
import Container from '@material-ui/core/Container';

import SearchAppBar from '../components/SearchAppBar'
import ScrollableMenu from '../components/ScrollableMenu'
import ScrollableGenre from '../components/ScrollableGenre'
import ImageCarousel from '../components/ImageCarousel'

const Home = () => {
  return (
    <Container>
      <SearchAppBar />
      <ScrollableMenu />
      <ScrollableGenre />
      <ImageCarousel />
    </Container>
  )
}

export default Home