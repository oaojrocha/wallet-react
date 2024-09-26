import './Menu.scss';
import coinLogo from'/src/assets/coin.png';

function Menu() {
    return (
        <div class="menu">
            <img class="logo" src={coinLogo}/>
            <div class="menu-itens">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/transfer">Transfer</a>
            </div>
        </div>
    )
}

export default Menu