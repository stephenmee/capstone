import logo from '../assets/Logo.png'

const Header = () => {
    return (
        <header className="fixed-header">
            <img className="header-logo" src={logo} alt="Logo" />
        </header>
    )
}

export default Header
