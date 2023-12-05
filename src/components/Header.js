const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAc70_AzAXbIhHi7mrGc05u_rkNP3jiCsjQ&usqp=CAU" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;