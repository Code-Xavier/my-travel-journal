import logo from '../images/logo.svg';

function Navbar() {

    return (
        <nav>
        <div  className="navbar">
        <img className="nav-img" alt="logo" src={logo} />
        <h2>My Travel Journal.</h2>
        </div>
      </nav>
    )
}

export default Navbar;