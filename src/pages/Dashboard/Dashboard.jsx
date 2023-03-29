import { UserBlock } from "../../sections/UserBlock/UserBlock";
import "./Dashboard.scss";

export const Dashboard = () => {
  return (
    <div className="dashboardBlock">
      <h1 className="dashboardBlock__title">Hello Evano 👋🏼,</h1>
      <div className="dashboardBlock__userBlock">
        <UserBlock />
      </div>
    </div>
  );
};
