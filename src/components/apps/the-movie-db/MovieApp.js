import React, {useState} from "react";

const MovieApp = () => {
    const [result, setResult] = useState()
    const [query, setQuery] = useState('')
    
    const fetcher = () => {
        fetch(`https://api.themoviedb.org/3/movie/550?api_key=804b5c2bb1575ae5dac4b35332b1d4a2&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(res => {
            if (res.status !== 200) {
                throw new Error('fetch error')
            } else return res.json()
            })
            .then(json => {
                if (json.results.length === 0){
                    throw new Error('no results')
                } else {
                    const movieNum = Math.floor(Math.random()*json.results.length)
                    setResult(json.result[movieNum])
                    console.log(json.result[movieNum])
                }
            })
        .catch(err => console.log(err))
    }

    return(
        <div className='main'>
            <div className='mainDiv'>
                <input value={query} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={fetcher}>Click for Movie Pic</button>
            </div>
        </div>
    )
}



export default MovieApp

