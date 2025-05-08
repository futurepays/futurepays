import React, { useState } from "react";
import "./dashboard.css";
import UserProfile from "../../assets/user-profile.png";
import DropDown from "../../assets/action-dropdown.svg";
import Options from "../../assets/action-options.svg";
import Prev from "../../assets/page-prev.svg";
import Next from "../../assets/page-next.svg";

const USERS_PER_PAGE = 10;

const dummyUsers = Array.from({ length: 400 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@mail.com`,
  rank: `#${index + 1}`,
  tier: "Achiever",
  amount: (Math.random() * 5000).toFixed(0),
}));

const DashUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dummyUsers.length / USERS_PER_PAGE);

  const currentUsers = dummyUsers.slice(
    (currentPage - 1) * USERS_PER_PAGE,
    currentPage * USERS_PER_PAGE
  );

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

//   const itemsPerPage = 10;
// const totalPages = Math.ceil(data.length / itemsPerPage);

// Update paginated data for 10 rows per page
// const paginatedData = data.slice(
//   (currentPage - 1) * itemsPerPage,
//   currentPage * itemsPerPage
// );

// Update Prev and Next disabling based on page count
const isPrevDisabled = currentPage === 1 || totalPages === 1;
const isNextDisabled = currentPage === totalPages || totalPages === 1;

const renderPageNumbers = () => {
    const pages = [];
  
    if (totalPages === 1) {
      return (
        <div className="page-block active-page">
          <p>1</p>
        </div>
      );
    }
  
    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (currentPage <= 4) {
      pages.push(1, 2, 3, 4);
      pages.push("...");
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(1);
      pages.push("...");
      for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(currentPage - 2);
      pages.push(currentPage - 1);
      pages.push(currentPage);
      pages.push(currentPage + 1);
      pages.push("...");
      pages.push(totalPages);
    }
  
    return pages.map((page, index) =>
      page === "..." ? (
        <div key={index} className="page-block"><p>...</p></div>
      ) : (
        <div
          key={index}
          className={`page-block ${currentPage === page ? "active-page" : ""}`}
          onClick={() => handlePageClick(page)}
        >
          <p>{page}</p>
        </div>
      )
    );
  };
  
  return (
    <>
      <div className="dash-user-head">
        <div className="dash-search-bar">
          <p>Search by user name</p>
        </div>
        <div className="dash-user-filter">
          <p className="user-filter-type">Rank</p>
        </div>
      </div>

      <div className="dash-lead-container">
        <div className="dash-lead-table-head">
          <div className="dash-lead-head-item"><p>Profile</p></div>
          <div className="dash-lead-head-item"><p>Rank</p></div>
          <div className="dash-lead-head-item"><p>Name</p></div>
          <div className="dash-lead-head-item"><p>Mail id</p></div>
          <div className="dash-lead-head-item"><p>Tier</p></div>
          <div className="dash-lead-head-item"><p>Amount</p></div>
          <div className="dash-lead-head-item"><p>Action</p></div>
        </div>

        {currentUsers.map((user) => (
          <div key={user.id} className="dash-lead-table-data">
            <div className="dash-lead-data-item">
              <img className="dash-user-img" src={UserProfile} alt="User" />
            </div>
            <div className="dash-lead-data-item"><p>{user.rank}</p></div>
            <div className="dash-lead-data-item"><p>{user.name}</p></div>
            <div className="dash-lead-data-item"><p>{user.email}</p></div>
            <div className="dash-lead-data-item"><p>{user.tier}</p></div>
            <div className="dash-lead-data-item"><p>{user.amount}</p></div>
            <div className="dash-lead-data-item">
              <div className="dash-user-action">
                <img src={DropDown} className="action-drop" alt="Dropdown" />
                <img src={Options} className="action-opt" alt="Opt" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="table-pagination">
        <div className="page-block" onClick={() => handlePageClick(currentPage - 1)} disabled={isPrevDisabled}>
          <img src={Prev} alt="Previous" />
        </div>
        {renderPageNumbers()}
        <div className="page-block" onClick={() => handlePageClick(currentPage + 1)} disabled={isNextDisabled}>
          <img src={Next} alt="Next" />
        </div>
      </div>
    </>
  );
};

export default DashUsers;
