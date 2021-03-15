import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "./logo.svg";
import Menu from "./Menu";

export default function Header() {
    return (
        <header>
            <Link className="logo" to="/">
                <img className="" src={Logo} alt="logo" />
            </Link>

            <div className="menu-right">
                <Menu />
            </div>
        </header>
    );
}
