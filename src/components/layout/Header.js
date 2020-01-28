import React from "react";
// pizza icon from Font Awesome
import {FaPizzaSlice, FaPlus} from "react-icons/fa";


export const Header = () => {
    return <header className="header" data-testid="header">
        <nav>
            <div className="logo">
                <img src="/public/images/logo.png" alt="Todoist"/>
            </div>
            <div className="settings">
                <ul>
                    <li>
                        {/*Plus icon*/}
                        <FaPlus/>
                    </li>
                    <li>
                        {/*Pizza icon*/}
                        <FaPizzaSlice/>
                    </li>
                </ul>
            </div>
        </nav>
    </header>;
};