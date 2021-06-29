import { tSTypeQuery } from '@babel/types'
import { result } from 'lodash'
import React from 'react'
import { minVersion } from 'semver'
import styled from 'styled-components'

const MovieAppDisplay = ({movie}) => {
    return(
        <Movie>
            <Poster src={`http://image.tmdb.org/t/p/w500${movie.poster.path}`}/>
            <Title>{movie.original_title}</Title>
            <Description>{movie.overview}</Description>
        </Movie>
    )
}

return(
    <div className='main'>
        <div className='mainDiv'>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={fetcher}>Click for Movie Pic Search</button>
            {!result || !result.poster_path ? null : <MovieAppDisplay movie={result}/>}
        </div>
    </div>
)

const Movie = styled.div`
    margin: 5px
    width: 300px
    height: 500px
    border-radius: 5px
    text-align: center
    background: #48b1bf
    `;

const Poster = styled.img`
    width: calc(100% - 20px)
    height: calc(70% - 10px)
    margin: 10px 10px 0 10px
    border-radius: 5px
    `
    
const Title = styled.h5`
    margin: 5px 0 0 0
    color: white
    `

const Description = styled.p`
    height: 20%
    color: white
    overflow-wrap: break-word
    overflow: scroll
    `

export default MovieAppDisplay

