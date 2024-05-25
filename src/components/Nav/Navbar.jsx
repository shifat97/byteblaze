import NavLinks from "./NavLinks";
import {NavLink} from "react-router-dom";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between shadow-xl p-4">
            <div>
                <NavLink to="/">
                    <h1 className="text-2xl text-pink-500 font-semibold">
                        Byte<span className="text-purple-800">Blaze</span>
                    </h1>
                </NavLink>
            </div>
            <div>
                <NavLinks/>
            </div>
        </div>
    );
}
