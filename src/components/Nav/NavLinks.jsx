import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

export default function NavLinks() {
    const [theme, setTheme] = useState("light");

    const themeController = (event) => {
        if (event.target.checked) {
            setTheme("synthwave");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        document.querySelector("html").setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-4 text-sm font-bold">
            <li>
                <NavLink
                    to="/"
                    className={({isActive}) => (isActive ? "text-purple-800" : "")}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="blogs"
                    className={({isActive}) => (isActive ? "text-purple-800" : "")}
                >
                    Blogs
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/bookmarks"
                    className={({isActive}) => (isActive ? "text-purple-800" : "")}
                >
                    Bookmarks
                </NavLink>
            </li>
            <li>
                <label className="cursor-pointer grid place-items-center">
                    <input
                        type="checkbox"
                        onChange={themeController}
                        className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
                    />
                    <svg
                        className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="5"/>
                        <path
                            d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
                    </svg>
                    <svg
                        className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
            </li>
        </ul>
    );
}
