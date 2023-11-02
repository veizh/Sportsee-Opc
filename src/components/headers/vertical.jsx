import { Velo,Meditation,Nage,Altere } from "../../icon/icons"
import { Icon } from "../navIcon/icon"

export function NavVertical(props){

    return(
        <div className="nav-vertical">
            <Icon route="meditation" svg={<Meditation />} /> 
            <Icon route="nage" svg={<Nage />} /> 
            <Icon route="velo" svg={<Velo />} /> 
            <Icon route="altere" svg={<Altere />} /> 
            <div className="copyright">Copyright, SportSee 2020</div>
        </div>
    )
}