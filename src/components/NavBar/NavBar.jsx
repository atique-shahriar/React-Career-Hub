import { NavLink } from "react-router-dom";
import "./NavBar.css"
import Button from "../Button/Button";

const NavBar = () => {
    const links = <>
        <li><NavLink to="/" className="font-medium bg-none">Home</NavLink></li>
        <li><NavLink to="/statistics" className="font-medium">Statistics</NavLink></li>
        <li><NavLink to="/applied" className="font-medium">Applied Jobs</NavLink></li>
        <li><NavLink to="/blog" className="font-medium">Blog</NavLink></li>

    </>

    return (
        <div className="bg-gray-100">
            <div className="navbar  w-4/5 mx-auto py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="space-y-2 dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-lg w-32">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-6">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Button btnText="Star Applying"></Button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;