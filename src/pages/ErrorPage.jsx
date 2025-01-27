import { NavLink } from "react-router-dom";
export default function ErrorPage () {
    return (
        <div className="error-page">
            <h2>Opps! Seems you got Lost</h2>
            <p>Wanna go back?</p>
            <NavLink className="go-back-home">Home</NavLink>
        </div>
    )
}