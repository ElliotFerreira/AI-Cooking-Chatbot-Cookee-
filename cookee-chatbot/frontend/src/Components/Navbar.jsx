import './Navbar.css'

function Navbar() {


    return (
        <>
            <nav className="navbar">

                <h1>Cookee</h1>
                <ul className='nav-right-elements'>
                    <li><a href='/'>Login</a></li>
                </ul>
            </nav>
        </>
    );

}

export default Navbar;