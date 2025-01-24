import { Link } from 'react-router-dom'

export default function ErrorPage () {
    return (
        <div className='error-page'>
            <h2>Oops! Seems you're lost</h2>
            <Link to="/" className='go-back-home'>
                Back to Home
            </Link>
        </div>
    )
}