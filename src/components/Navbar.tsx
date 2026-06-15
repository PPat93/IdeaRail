function Navbar() {
    return <>
        <nav className="navbar bg-body-tertiary">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Items</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
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