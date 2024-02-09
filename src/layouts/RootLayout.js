import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <div>
            <header>
                <nav>
                    <h1>React Router</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about" >About</NavLink>
                    <NavLink to="help">Help</NavLink>

                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
}

export default RootLayout;
