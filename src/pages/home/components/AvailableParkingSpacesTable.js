import React from "react";
import { generateTotalsForFloor } from "./generateTotalsForFloor";

const AvailableParkingSpacesTable = (props) => {
  const { floorData } = props;

  const floorItems = floorData.map(function (floor) {
    const {
      compactAvailable,
      largeAvailable,
      handicappedAvailable,
      motorcycleAvailable,
      compactCapacity,
      largeCapacity,
      handicappedCapacity,
      motorcycleCapacity,
      number,
    } = floor;

    const totalsForFloor = generateTotalsForFloor(floor);

    return (
      <tr className="dnb-table__tr dnb-table__tr--even" key={number}>
        <td className="dnb-table__td">{number}</td>
        <td className="dnb-table__td">
          {`${totalsForFloor.totalAvailable} / ${totalsForFloor.totalCapacity} `}
        </td>
        <td className="dnb-table__td">
          {`${compactAvailable} / ${compactCapacity} `}
        </td>
        <td className="dnb-table__td">
          {`${largeAvailable} / ${largeCapacity} `}
        </td>
        <td className="dnb-table__td">
          {`${handicappedAvailable} / ${handicappedCapacity} `}
        </td>
        <td className="dnb-table__td">
          {`${motorcycleAvailable} / ${motorcycleCapacity} `}
        </td>
      </tr>
    );
  });
  return (
    <div className="section">
      <h3>Parking space availability by floor</h3>
      <table className="dnb-table">
        <thead>
          <tr className="dnb-table__tr">
            <th className="dnb-table__th">Floor#</th>
            <th className="dnb-table__th">Total</th>
            <th className="dnb-table__th">Compact</th>
            <th className="dnb-table__th">Large</th>
            <th className="dnb-table__th">Handicapped</th>
            <th className="dnb-table__th">Motorcycle</th>
          </tr>
        </thead>
        <tbody>{floorItems}</tbody>
      </table>
    </div>
  );
};

export default AvailableParkingSpacesTable;
