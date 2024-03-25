export default function Header() {
    return (
        <header className="app-header">
            <div className="app-header__logo">Chat App</div>
            <nav className="app-header__nav-container">
                <ul className="app-header__nav-links clean-list">
                    <li>Home</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}