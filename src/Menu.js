import { NavLink } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">
                        Projects
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/about" activeClassName="active">
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
