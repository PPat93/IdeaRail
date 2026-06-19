import {useState} from "react";

interface NavbarProps {
    tabs: string[];
    onElementClick: (item: string) => void;
}


function NavTab(tabsArr: string[], onElementClick: { (item: string): void }) {
    let [itemIndex, setItemIndex] = useState(-1);

    let createTabs = (names: string[]) => {
        return names.map((item, index: number) => (
            <li className={(itemIndex === index ? "active" : "") + " nav-item"}
                key={index}
                onClick={() => onElementClick(item)}>
                <a className=" nav-link"
                   onClick={() => setItemIndex(index)}
                   aria-current="page"
                   href="#">{item}
                </a>
            </li>));
    }
    return createTabs(tabsArr);
}

function Navbar({tabs, onElementClick}: NavbarProps) {
    return <>
        <nav className="navbar bg-body-tertiary">
            <ul className="nav nav-tabs">

                {NavTab(tabs, onElementClick)}

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