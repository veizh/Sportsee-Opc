import { NavLink } from "react-router-dom";



export function Icon(props){

    return(
        <NavLink to={props.route}  className="icon-container">
            {props.svg}
        </NavLink>
    )
}