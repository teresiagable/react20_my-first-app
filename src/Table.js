import React, { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  constructor() {
    super();

    this.state = [
      { name: "Stina", role: "Systemtekniker" },
      { name: "Nisse", role: "Programmerare" },
    ];
  }

  render() {
    return (
      <React.Fragment>
        <table border="1">
          <thead>
            <tr>
              <th>Namn</th>
              <th>Jobb</th>
            </tr>
          </thead>
          <tbody>
            {this.state.map(
                (row) => {return <TableRow name={row.name} role={row.role} />;   }
                )}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
export default Table;
