import React from "react"

const NytResults = (props) => {
    return (
        <div>
            {props.results.map(results => {
                return(
                    <div key={results._id}>
                        <h3>{result.headline.main}</h3>
                        {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : ''}
                        <p>
                            {result.snippet}
                            <br />
                            {result.keywords.length > 0 ? ' Ketwords: ' : ''}
                        </p>
                        <ul>

                        </ul>
                        <a href={result.web_url}><button>Read It</button></a>
                        </div>
                )
            })}
            <div>
                <button onClick={(e) => props.changePage(e, 'down')}>Previous 10</button>
                <button onClick={(e) => props.changePage(e, 'up')}>Next 10</button>
            </div>
        </div>
    )
}

export default NytResults

