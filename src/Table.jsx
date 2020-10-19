import React from "react";
import TableRow from "./TableRow";

const Table = (props) => {
  return (
    <React.Fragment>
      <table border="1">
        <caption>
          {props.title == null ? "My fancy table" : props.title}
        </caption>
        <thead>
          <tr>
            {props.columns.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {props.data.map((row) => {
            return (
              <TableRow
                name={row.name}
                role={row.role}
                id={row.id}
                key={row.id}
                deleteRow={props.deleteRow}
              />
            );
          })}
        </tbody>
      </table>
      <button onClick={props.addRow}>Lägg till rad</button> <br></br>
    </React.Fragment>
  );
};

export default Table;
