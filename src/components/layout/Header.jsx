import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="section-navbar">
                <section className="top_txt">
                    <div className="head container">
                        <div className="head_txt">
                            <p>Get memberShip, 30-day free trial</p>
                        </div>
                        <div className="sing_in_up">
                            <NavLink to="# ">SIGN IN</NavLink>
                            <NavLink to="#  ">SIGN UP</NavLink>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="navbar-brand">
                        <NavLink to="index">
                            <p>Movies Store</p>
                        </NavLink>
                    </div>
                    <nav className="navbar">
                        <ul>
                            <li className="nav-item">
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/movies">Movies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

            </header>
        </>
    )
}
export default Header;