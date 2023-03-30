import { UserBlock } from "../../sections/UserBlock/UserBlock";
import "./Customers.scss";

export const Customers = () => {
  return (
    <div className="customersBlock">
      <h1 className="customersBlock__title">Hello Evano 👋🏼,</h1>
      <div className="customersBlock__userBlock">
        <UserBlock />
      </div>
    </div>
  );
};
