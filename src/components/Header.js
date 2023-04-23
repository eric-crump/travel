import {useState, useEffect} from "react";
import "./css/Header.css";
import HeaderRegion from "./HeaderRegion";

function Header() {
    const [region, setRegion] = useState(<HeaderRegion region="North America" />);

    function regionHover(e){
        setRegion(<HeaderRegion region={e.target.innerText} />)
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid ">
                <a className="navbar-brand ms-5 d-flex align-items-center end-width">
                    <img className="me-2 rounded-2" src="https://cabinetm-beta.s3.amazonaws.com/00000163-51db-5cf5-2090-5c4936ef029e.jpg" width="32" height="32" />
                    <p className="mb-0">CS Travel</p>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto text-center">
                        <li className="nav-item dropdown has-megamenu">
                            <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                                DESTINATIONS
                            </a>
                            <div className="dropdown-menu megamenu rounded-0 bg-dark text-light" role="menu">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-4 border-end d-flex justify-content-end">
                                            <div className="me-5 region-list">
                                                <p onMouseEnter={(e) => regionHover(e)}>North America</p>
                                                <p onMouseEnter={(e) => regionHover(e)}>Europe</p>
                                                <p onMouseEnter={(e) => regionHover(e)}>Africa and Middle East</p>
                                                <p onMouseEnter={(e) => regionHover(e)}>Asia</p>
                                                <p onMouseEnter={(e) => regionHover(e)}>Australia</p>
                                                <p className="mb-0" onMouseEnter={(e) => regionHover(e)}>South America</p>
                                            </div>
                                            
                                        </div>
                                        <div className="col-8">
                                            {region}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                FOOD & DRINK
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                TRANSPORTATION
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                ON A BUDGET
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                NEW TRAVELERS
                            </a>
                        </li>
                    </ul>
                    <div className="hstack d-flex align-items-center ms-auto end-width">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle text-muted" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                        <p className="mb-0 ms-2 me-5 text-muted">Login</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;