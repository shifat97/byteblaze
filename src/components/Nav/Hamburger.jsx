import {useState} from "react";
import NavLinks from "./NavLinks";
import {HiMiniBars3BottomRight} from "react-icons/hi2";
import {RxCross2} from "react-icons/rx";
import {NavLink} from "react-router-dom";

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex items-center justify-between relative p-4 z-50">
            <div>
                <NavLink to="/">
                    <h1 className="text-2xl text-pink-500 font-semibold">
                        Byte<span className="text-purple-800">Blaze</span>
                    </h1>
                </NavLink>
            </div>
            <div>
                <div
                    onClick={handleIsOpen}
                    className="text-2xl cursor-pointer p-1 bg-gray-100 hover:bg-gray-300 rounded-md"
                >
                    {isOpen ? <RxCross2/> : <HiMiniBars3BottomRight/>}
                </div>
                {isOpen ? (
                    <div className="bg-gray-100 p-4 rounded-md absolute top-4 right-14">
                        <NavLinks/>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}
