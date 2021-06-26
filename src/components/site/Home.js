import {Link} from 'react-router-dom'

const Home = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <h1>Welcome to React Fundamentals at Eleven Fifty</h1>
                <p>
                    This app is intended to be a starter/tutorial app for your upcoming project and a learning sandbox for you in months and years to come should you continue to develop software with React. In this application, we will work through some of the basic React concepts, build out some small applications, and then unleash you to build your own applications.
                </p>
                <hr />
                <h1>Important Notes</h1>
                <ul>
                    <li>Being component based, you can move on to the next modules</li>
                    <li>The styling is intentionally left bland in some spots Just use a sandbox.</li>
                    <li>At this point, the site is not yet responsive.</li>
                    <li>Refactor the text on this page and make this your own project</li>
                    <li>The setup for this app might be the most confusing part. Hang in there!</li>
                    <li>
                        <Link to='/resources'>React Resources</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home
