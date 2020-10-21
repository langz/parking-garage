import React from "react";
import { information, pay_from } from "dnb-ui-lib/icons";
import { formatNOK } from "./formatNOK";
import SummaryCard from "./SummaryCard";

const SummaryCards = (props) => {
  const { totalAmountData, totalsForParkingGarageData } = props;
  const { totalAvailable, totalCapacity } = totalsForParkingGarageData;
  return (
    <div className="section box-wrapper">
      <SummaryCard
        header={"Total parking space availability"}
        value={`${totalAvailable} / ${totalCapacity}`}
        icon={information}
      />
      <SummaryCard
        header={"Today's earnings"}
        value={formatNOK(totalAmountData)}
        icon={pay_from}
      />
    </div>
  );
};

export default SummaryCards;
