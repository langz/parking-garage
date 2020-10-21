import React from "react";
import { Icon, Heading } from "dnb-ui-lib/components";

const SummaryCard = (props) => {
  const { header, value, icon } = props;
  return (
    <div className="box">
      <div className="left-half">
        <p>{header}</p>
        <Heading>{value}</Heading>
      </div>
      <div className="right-half">
        <h1 className="dnb-h--xx-large">
          <Icon icon={icon} size="auto" aria-hidden />
        </h1>
      </div>
    </div>
  );
};

export default SummaryCard;
