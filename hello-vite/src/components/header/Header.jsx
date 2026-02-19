// This is a simple React component that serves as the header of the application.
import headerLogo from "../../assets/tripleTenLogo.png";
import "./Header.css";
function Header() {
  return (
    <>
      <div className="header">
        <img src={headerLogo} alt="App logo" className="header__logo" />
        <h1 className="header__title">Hello Vite!</h1>
      </div>
    </>
  );
}
export default Header;
