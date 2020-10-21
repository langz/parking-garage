import React from "react";
import { formatNOK } from "./formatNOK";

const TodaysEarningsTable = (props) => {
  const { earningData } = props;

  const formatDate = (input) => {
    // moment would have been better, and easier
    const d = new Date(input);
    const date = d.toISOString().split("T")[0];
    const time = d.toTimeString().split(" ")[0];
    return `${date} ${time}`;
  };

  const transactions = earningData.map(function (earning) {
    const { id, collected, payed, amount } = earning;

    return (
      <tr className="dnb-table__tr dnb-table__tr--even" key={id}>
        <td className="dnb-table__td">{id}</td>
        <td className="dnb-table__td">{formatDate(collected)}</td>
        <td className="dnb-table__td">{formatDate(payed)}</td>
        <td className="dnb-table__td">{formatNOK(amount)}</td>
      </tr>
    );
  });

  return (
    <div className="section">
      <h3>Today's Earnings - Parking Tickets</h3>
      <table className="dnb-table">
        <thead>
          <tr className="dnb-table__tr">
            <th className="dnb-table__th">Transaction#</th>
            <th className="dnb-table__th">Collected</th>
            <th className="dnb-table__th">Payed</th>
            <th className="dnb-table__th">Amount</th>
          </tr>
        </thead>
        <tbody>{transactions}</tbody>
      </table>
    </div>
  );
};

export default TodaysEarningsTable;
