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

        <main>
            <Outlet />
        </main>

        <footer className="footer">
            © {new Date().getFullYear()} My App • All rights reserved, just kidding
        </footer>
    </div>
);

export default Layout;
