import logoIcon from "../../assets/img/logoIcon.png";
import "./Logo.scss";
export const Logo = () => {
  return (
    <div className="logo">
      <img className="logo__icon" src={logoIcon} alt="logoIcon"></img>
      <p className="logo__text">Dashboard</p>
      <p className="logo__version">v.01</p>
    </div>
  );
};
