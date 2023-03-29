import search from "@/assets/img/search.png";
import data from "../../data";
import left from "@/assets/img/<.png";
import right from "@/assets/img/>.png";
import "./UserBlock.scss";
export const UserBlock = () => {
  return (
    <section className="userBlock">
      <div className="userBlock__header userBlockHeader">
        <div className="userBlockHeader">
          <p className="userBlockHeader__allUser">All Customers </p>
          <p className="userBlockHeader__active">Active Members </p>
        </div>
        <div className="userBlock__search input">
          <img src={search} alt="Search" className="input__icon" />
          <input type="text" value="Search" className="input__field " />
        </div>
      </div>
      <table className="userBlock__table">
        <tr>
          <th className="userBlock__nav">Customer Name</th>
          <th className="userBlock__nav">Company</th>
          <th className="userBlock__nav"> Phone Number</th>
          <th className="userBlock__nav"> Email</th>
          <th className="userBlock__nav"> Country</th>
          <th className="userBlock__nav"> Status</th>
        </tr>
        {data.users.map((user, index) => (
          <tr key={index}>
            <td className="userBlock__user">{user.name}</td>
            <td className="userBlock__user">{user.company}</td>
            <td className="userBlock__user"> {user.number}</td>
            <td className="userBlock__user"> {user.email}</td>
            <td className="userBlock__user"> {user.country}</td>
            <td className="userBlock__user">
              <button
                className={
                  user.status === "Active"
                    ? "button__active"
                    : "button__inActive"
                }
              >
                {user.status}
              </button>
            </td>
          </tr>
        ))}
      </table>
      <div className="userBlock__footer">
        <p>Showing data 1 to 8 of 256K entries</p>
        <div>
          <button>
            <img src={left} alt="arrow"></img>
          </button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>
            <img src={right} alt="arrow"></img>
          </button>
        </div>
      </div>
    </section>
  );
};
