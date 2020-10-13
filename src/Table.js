import React, { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  constructor() {
    super();

    this.state = {
      personal: [
        { name: "Stina", role: "Systemtekniker" },
        { name: "Nisse", role: "Programmerare" },
      ],
      usernamn:""
    };
    this.addRow = this.addRow.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  addRow(e) {
    let newPersonal = this.state.personal;

    newPersonal.push({ name: ".", role: "." });

    this.setState({ personal: newPersonal });

  }

  handleChange(e){
    let thename = e.target.value;

    console.log("newusernamn", this.state.usernamn)
    this.setState({ usernamn:thename})


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
            {this.state.personal.map((row, index) => {
              return (
                <TableRow
                  name={row.name}
                  role={row.role}
                  key={row.name + index}
                />
              );
            })}
          </tbody>
        </table>
        <button onClick={this.addRow}>Lägg till rad</button> <br></br>
        <input type="text" id="usernamn" name="usernamn" onChange={this.handleChange} ></input>

          <h1>{this.state.usernamn}</h1>
      </React.Fragment>
    );
  }
}
export default Table;
