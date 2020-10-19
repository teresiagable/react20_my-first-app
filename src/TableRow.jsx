import React from "react";

function TableRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.role}</td>
      <td>{props.id}</td>
      <td><button onClick= {()=>props.deleteRow(props.id)}>Delete</button></td>

    </tr>
  );
}
export default TableRow;
