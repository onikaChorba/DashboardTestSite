import userIcon from "@/assets/img/user.png";
import "./UserShotInfo.scss";
export const UserShotInfo = () => {
  return (
    <div className="userShortInfo">
      <img src={userIcon} alt="user1" className="userShortInfo__icon" />
      <div className="userShortInfo__info info">
        <p className="info__name">Evano</p>
        <p className="info__prof">Project Manager</p>
      </div>
    </div>
  );
};
