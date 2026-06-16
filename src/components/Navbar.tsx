import {useState} from "react";

const navbarTabs = ["Main view", "In progress", "Postponed", "Completed", "Abandoned", "Impossible"];


function Navbar() {

    let [itemIndex, setItemIndex] = useState(-1);

    let createTabs = (names: String[]) => {
        return names.map((item, index: number) => (
            <li className="nav-item">
                <a className={(itemIndex === index ? "acitve " : "") + "nav-link "}
                   onClick={() => setItemIndex(index)}
                   aria-current="page"
                   href="#">{item}
                </a>
            </li>));
    }
    return <>
        <nav className="navbar bg-body-tertiary">
            <ul className="nav nav-tabs">

                {createTabs(navbarTabs)}

            </ul>
            <div className="container" id="navbar-icon">
                <a className="navbar-brand" href="#">
                    <img src="./../../public/favicon.svg" alt="Bootstrap" width="30" height="24"/>
                </a>
            </div>
        </nav>
    </>
}

export default Navbar