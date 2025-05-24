import logo from "../assets/funny.png"

function Header() {
    return (
        <header>
            <img src={logo} alt="logo-image" />
            <h2>Meme Generator</h2>
        </header>
    )
}

export default Header