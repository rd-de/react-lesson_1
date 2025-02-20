import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Alexey Elovikoff</h1>
        <nav className="nav">
          <ul>
            <li><a href="#">На главную</a></li>
            <li><a href="#">Работы</a></li>
            <li><a href="#">Отзывы</a></li>
            <li><a href="#">Блог</a></li>
          </ul>
        </nav>
        <button className="contact-button">Контакты</button>
      </div>
    </header>
  );
}

export default Header;
