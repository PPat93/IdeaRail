const navbarTabs = ["Main view", "In progress", "Postponed", "Completed", "Abandoned", "Impossible"]

function Navbar() {
    return <>
        <nav className="navbar bg-body-tertiary">
            <ul className="nav nav-tabs">

                {navbarTabs.map((item) => (<li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">{item}</a>
                </li>))}

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