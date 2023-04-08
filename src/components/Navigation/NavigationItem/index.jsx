import React, {useContext} from "react";
import "./NavigationItem.scss"
import { NavLink } from "react-router-dom";
import Error from "../../Error";
import { AuthContext } from "../../../context/auth-context";

const navigationItem = props => {
    // const authContext = useContext(AuthContext);
    const { error, link } = props;
    return (
        <li className="NavigationItem">
            {
                props.link ? 
                    <NavLink to={link} end>{ props.children }</NavLink>
                    :
                    <span onClick={props.click}>{ props.children}</span>
            }
        </li>
    )
}

export default navigationItem;