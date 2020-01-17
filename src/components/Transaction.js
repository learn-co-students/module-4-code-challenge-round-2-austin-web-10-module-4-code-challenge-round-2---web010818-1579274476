import React from "react";

const Transaction = props => {
  return (
    <tr>
      <td>{props.data.posted_at}</td>
      <td>{props.data.description}</td>
      <td>{props.data.category}</td>
      <td>{props.data.amount}</td>
    </tr>
  );
};

export default Transaction;
