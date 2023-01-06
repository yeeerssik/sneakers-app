function Header(props) {
    console.log(props);
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="headerLeft d-flex align-center">
                <img width={40} height={40} src="/img/logo.png" alt="Logotype" />
                <div className="headerInfo">
                    <h3 className="text-uppercase">React sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="headerRight d-flex">
                <li onClick={ props.onClickCart } className="mr-30 cu-p">
                    <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
                    <span>36 990 тг.</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.svg" alt="User" />
                </li>
            </ul>
        </header>
    );
}

export default Header;