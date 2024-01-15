import ButtonLogout from "../ButtonLogout";


const Header = () => {

    return (
        <header>
            <div style={headerStyles}>
                <div style={logoStyles}>
                    <img width='120px' src='/dragon-logo.png' />
                    <h2 style={{ margin: 0 }}>Welcome to Dragon Land</h2>
                </div>
                <ButtonLogout />
            </div>
        </header>

    )
}

export default Header

const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '2rem'
}

const logoStyles = {
    display: 'flex',
    alignItems: 'center'
}
