import search from "@/assets/img/search.png";
import data from "../../data.js";
import left from "@/assets/img/<.png";
import right from "@/assets/img/>.png";
import { useState } from "react";

import "./UserBlock.scss";
export const UserBlock = () => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [searchField, setSearchField] = useState("");
  const [itemsPerPage] = useState(8);
  const totalPages = Math.ceil(data.users.length / itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = data.users.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  return (
    <section className="userBlock">
      <div className="userBlock__header userBlockHeader">
        <div className="userBlockHeader">
          <p className="userBlockHeader__allUser">All Customers </p>
          <p className="userBlockHeader__active">Active Members </p>
        </div>
        <div className="userBlock__search input">
          <img src={search} alt="Search" className="input__icon" />
          <input
            type="text"
            placeholder="Search"
            className="input__field "
            onChange={handleChange}
          />
        </div>
      </div>
      <table className="userBlock__table">
        <tbody>
          <tr>
            <th className="userBlock__nav">Customer Name</th>
            <th className="userBlock__nav">Company</th>
            <th className="userBlock__nav"> Phone Number</th>
            <th className="userBlock__nav"> Email</th>
            <th className="userBlock__nav"> Country</th>
            <th className="userBlock__nav"> Status</th>
          </tr>
          {currentUsers
            .filter((user) => {
              return user.name
                .toLowerCase()
                .includes(searchField.toLowerCase());
            })
            .map((user, index) => (
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
                    <p className="button__text"> {user.status}</p>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="userBlock__footer userFooter">
        <p className="userFooter__text">Showing data 1 to 8 of 256K entries</p>
        <div>
          <div>
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <img src={left} alt="arrow" />
            </button>
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => handlePageChange(number)}
                className={currentPage === number ? "active" : ""}
              >
                {number}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <img src={right} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
