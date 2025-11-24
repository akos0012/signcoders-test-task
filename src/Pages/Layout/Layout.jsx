import { Outlet, Link } from "react-router-dom";
import DarkModeToggle from "../../Components/DarkModeToggle";

import "./Layout.css";

const Layout = () => (
    <div className="Layout">
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <div className="nav-toggle">
                <DarkModeToggle />
            </div>
        </nav>
        <Outlet />
    </div>
);

export default Layout;
