import "./nav.scss";
import DateTime from "./DateTime";

const Nav = () => {
  return (
    <nav className="menubar">
      <div className="left">
        <div className="logo">
          <img src="/nav-icons/myos.svg" alt="MYOS" />
        </div>

        <span className="nav-item">Chetan M</span>
        <span className="nav-item">File</span>
        <span className="nav-item">Window</span>
        <span className="nav-item">Terminal</span>
      </div>

      <div className="right">
        <div className="nav-icon">
          <img src="/nav-icons/wifi.svg" alt="wifi" />
        </div>

        <div className="datetime">
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
