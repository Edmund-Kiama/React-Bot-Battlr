import { NavLink } from "react-router-dom"
export default function NavBar () {
    return (
        <nav>
            <NavLink 
                to="/" 
                className={({isActive}) => 
                    isActive ? "is-active-nav-for-bot-collection" : "nav-for-bot-collection"}    
            >
                Bot Collection
            </NavLink>
            <NavLink 
                to="/your-army" 
                className={({isActive}) => 
                    isActive ? "is-active-nav-for-my-army" : "nav-for-my-army"}    
            >
                My Army
            </NavLink>
        </nav>
    )
}