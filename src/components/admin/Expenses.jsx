import React, { useState } from "react";
import "./expenses.css";
import Download from "../../assets/download.svg";
import Prev from "../../assets/page-prev.svg";
import Next from "../../assets/page-next.svg";

const USERS_PER_PAGE = 10;

const Expenses = () => {
  const [selectedTab, setSelectedTab] = useState("Add");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);


  const leaderData = [
    { sno: "1", expenseType: "Influencer", month: "May, 2025", amount: 3000, reason: "NA" },
    { sno: "2", expenseType: "Influencer", month: "May, 2025", amount: 3000, reason: "NA" },
    { sno: "3", expenseType: "Influencer", month: "May, 2025", amount: 3000, reason: "NA" },
    { sno: "4", expenseType: "Influencer", month: "May, 2025", amount: 3000, reason: "NA" },
    { sno: "5", expenseType: "Influencer", month: "May, 2025", amount: 3000, reason: "NA" },
    { sno: "6", expenseType: "Influencer", month: "May, 2025", amount: 3000, reason: "NA" },
    { sno: "7", expenseType: "Influencer", month: "May, 2025", amount: 3000, reason: "NA" },
    { sno: "8", expenseType: "Influencer", month: "May, 2025", amount: 3000, reason: "NA" },
    { sno: "9", expenseType: "Influencer", month: "May, 2025", amount: 3000, reason: "NA" },
    { sno: "10", expenseType: "Influencer", month: "May, 2025", amount: 3000, reason: "NA" },
    { sno: "11", expenseType: "Influencer", month: "May, 2025", amount: 3000, reason: "NA" },
    { sno: "12", expenseType: "Influencer", month: "May, 2025", amount: 3000, reason: "NA" },
    { sno: "13", expenseType: "Influencer", month: "May, 2025", amount: 3000, reason: "NA" },
    { sno: "14", expenseType: "Influencer", month: "May, 2025", amount: 3000, reason: "NA" },
    { sno: "15", expenseType: "Influencer", month: "May, 2025", amount: 3000, reason: "NA" },
  ];

  const totalPages = Math.ceil(leaderData.length / USERS_PER_PAGE);

  const currentData = leaderData.slice(
    (currentPage - 1) * USERS_PER_PAGE,
    currentPage * USERS_PER_PAGE
  );

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const isPrevDisabled = currentPage === 1 || totalPages === 1;
  const isNextDisabled = currentPage === totalPages || totalPages === 1;

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else if (currentPage <= 4) {
      pages.push(1, 2, 3, 4);
      pages.push("...");
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 3) {
      pages.push(1, "...");
      for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(currentPage - 2, currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
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

  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    if (newSelectAll) {
      setSelectedRows(leaderData.map((entry) => entry.sno));
    } else {
      setSelectedRows([]);
    }
  };
  
  const handleRowSelect = (sno) => {
    let updatedSelection;
    if (selectedRows.includes(sno)) {
      updatedSelection = selectedRows.filter((id) => id !== sno);
    } else {
      updatedSelection = [...selectedRows, sno];
    }
    setSelectedRows(updatedSelection);
    setSelectAll(updatedSelection.length === leaderData.length);
  };
  

  return (
    <div className="exp-container">
      <div className="exp-head-sec">
        <div className="exp-head">
          <div
            className={`exp-head-element ${selectedTab === "Add" ? "selected" : ""}`}
            onClick={() => setSelectedTab("Add")}
          >
            <p>Add Expense</p>
          </div>
          <div
            className={`exp-head-element ${selectedTab === "View" ? "selected" : ""}`}
            onClick={() => setSelectedTab("View")}
          >
            <p>View Expense</p>
          </div>
        </div>
        {selectedTab === "View" && (
          <div className="exp-down">
            <p>Download</p>
            <img src={Download} alt="Download" />
          </div>
        )}
      </div>

      <div className="exp-content">
        {selectedTab === "Add" ? (
          <div className="add-exp-container">
          <div className="add-exp-head">
            <p className="add-exp-title">Expenses</p>
          </div>
          <form>
            <div className="add-exp-form">
              <div className="add-exp-form-main">
                <div className="add-exp-item">
                  <label htmlFor="exp-type">Expense Type</label>
                  <input type="text" className="unstyled-inputs" name="exp-type" id="exp-type" />
                </div>
                <div className="add-exp-date">
                  <div className="add-exp-item">
                    <label htmlFor="exp-date">Select Month</label>
                    <select name="exp-month" id="exp-month" className="exp-select">
                      <option value="">Month</option>
                    </select>
                    <select name="exp-year" id="exp-year" className="exp-select">
                      <option value="">Year</option>
                    </select>
                  </div>
                </div>
                <div className="add-exp-item">
                  <label htmlFor="amount">Amount</label>
                  <input type="number" className="unstyled-inputs" name="amount" id="amount" />
                </div>
                <div className="add-exp-item reason">
                  <label htmlFor="reason">Reason</label>
                  <input type="text" className="unstyled-inputs" name="reason" id="reason" />
                </div>
              </div>
              <div className="add-exp-form-btns">
                <p className="add-exp-cancel-btn">Cancel</p>
                <p className="add-exp-save-btn">Save</p>
              </div>
            </div>
          </form>
        </div>
        ) : (
          <div>
              <div className="table-container">
                <div className="table-head">
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "8px"}}>
                        <input type="checkbox" checked={selectAll} onChange={handleSelectAll}/><label>All</label>
                    </div>
                    <p>S.No</p>
                    <p>Expense Type</p>
                    <p>Month</p>
                    <p>Amount</p>
                    <p>Reason</p>
                </div>
                {currentData.map((entry, idx) => (
                    <div className="table-data-sec">
                        <div className="table-data" key={idx}>
                            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <input type="checkbox" checked={selectedRows.includes(entry.sno)} onChange={() => handleRowSelect(entry.sno)} />
                            </div>
                            <p>{entry.sno}</p>
                            <p>{entry.expenseType}</p>
                            <p>{entry.month}</p>
                            <p>Rs {entry.amount}</p>
                            <p>{entry.reason}</p>
                        </div>
                    </div>
                ))}
              </div>
        <div className="table-pagination">
            <div className={`page-block ${isPrevDisabled ? "disabled" : ""}`} onClick={() => handlePageClick(currentPage - 1)}>
                <img src={Prev} alt="Previous" />
            </div>
            {renderPageNumbers()}
            <div className={`page-block ${isNextDisabled ? "disabled" : ""}`} onClick={() => handlePageClick(currentPage + 1)}>
                <img src={Next} alt="Next" />
            </div>
        </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Expenses;
