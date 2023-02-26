
// <my-header></my-header>  
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `        <header class="header">   <div class="header__body">
        <a href="index.html"><img class="header__body-logo" src="images/logo.png" alt="New Site"></a>
        <div class="header__body-text">Официальный дилер <br> Чери Максимум</div>
    </div>
    <nav class="header__menu">
        <ul class="header__menu-list">
            <li class="header__menu-item">
                <a href="tarde-in.html">Trade-in</a>
            </li>
            <li class="header__menu-item">
                <a href="credit.html">Кредит</a>
            </li>
            <li class="header__menu-item">
                <a href="auto-in.html">Авто в наличии</a>
            </li>
            <li class="header__menu-item">
                <a href="contacts.html">Контакты</a>
            </li>
        </ul>
    </nav>
    <div class="header__info">
        <a class="header__phone" href="tel: +7987654321">++7 (812) 605-97-71</a>
        <a class="header__email" href="#">Время работы: с 8:30 до 21:00</a>
        <a class="header__phone" href="#">ул. Руставели, 53, Санкт-Петербург</a>
    </div>  </header>`

  

        
    }
}
customElements.define('my-header', MyHeader) 