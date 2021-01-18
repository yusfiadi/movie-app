import React from 'react'
import Container from '@material-ui/core/Container';
import BackAppBar from '../components/BackAppBar'
import MovieImage from '../components/MovieImage'
import MovieRatings from '../components/MovieRatings'
import MovieInfo from '../components/MovieInfo'
import PlotSummary from '../components/PlotSummary'
import CastAndCrew from '../components/CastAndCrew'

const MovieDetails = () => {
  return (
    <div style={{ marginBottom: 50}}>
      <MovieImage />
      <Container>
        <BackAppBar />
      </Container>
      <MovieRatings />
      <Container>
        <MovieInfo />
        <PlotSummary />
        <CastAndCrew />
      </Container>
    </div>
  )
}

export default MovieDetails