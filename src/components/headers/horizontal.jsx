import '../../styles/headers/horizontal&vertical.css';
import { Link, NavLink } from "react-router-dom"
export function HorizontalHeader(){

    return(
        <header>
            <div className="logo-container"><img src="./logo.png" alt="logo sportsee" /></div>
            <NavLink to="/" >Accueil</NavLink>
            <NavLink to="/profil" >Profil</NavLink>
            <NavLink to="/settings" >Réglages</NavLink>
            <NavLink to="/communauté" >Communauté</NavLink>
        </header>
    )
}