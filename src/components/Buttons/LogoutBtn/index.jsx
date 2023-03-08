import React, {useContext} from "react";
import "./LogoutBtn.scss";
import { AuthContext } from "../../../context/auth-context";
const LogoutBtn = props => {
    const authContext = useContext(AuthContext);
    const disconnect = () => {
        authContext.disconnect();
    }
    return (
        <button class="logout-btn hidden" onClick={disconnect} >logout</button>
    )
}

export default LogoutBtn;