import { tSTypeQuery } from '@babel/types'
import { result } from 'lodash'
import React from 'react'
import { minVersion } from 'semver'

const MovieAppDisplay = ({movie}) => {
    return(
        <div>
            <img src={`http://image.tmdb.org/t/p/w500${movie.poster.path}`}/>
            <h5>{movie.original_title}</h5>
            <p>{movie.overview}</p>
        </div>
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

export default MovieAppDisplay

