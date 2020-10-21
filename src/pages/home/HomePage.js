import React from "react";
import AvailableParkingSpacesTable from "./components/AvailableParkingSpacesTable";
import SummaryCards from "./components/SummaryCards";
import TodaysEarningsTable from "./components/TodaysEarningsTable";

import floor_data from "./../../data/floor-data.json";
import transactions_data from "./../../data/transactions_today_data.json";
import { generateTotalsForFloor } from "./components/generateTotalsForFloor";

const HomePage = () => {
  const totalAmount = transactions_data.reduce(
    (sum, { amount }) => sum + amount,
    0
  );
  const totalsForParkingGarage = floor_data.reduce(function (a, b) {
    const totalsForFloorA = generateTotalsForFloor(a);
    const totalsForFloorB = generateTotalsForFloor(b);
    return {
      totalAvailable:
        totalsForFloorA.totalAvailable + totalsForFloorB.totalAvailable,
      totalCapacity:
        totalsForFloorA.totalCapacity + totalsForFloorB.totalCapacity,
    };
  });
  return (
    <>
      <div className="wrapper">
        <SummaryCards
          totalAmountData={totalAmount}
          totalsForParkingGarageData={totalsForParkingGarage}
        />
        <AvailableParkingSpacesTable floorData={floor_data} />
        <TodaysEarningsTable earningData={transactions_data} />
      </div>
    </>
  );
};

export default HomePage;
