import React, { Component } from "react";
import Table from "./Table";

class App extends Component {
  state = {
    employees: [
      { id: 1, name: "Stina", role: "Systemtekniker" },
      { id: 2, name: "Nisse", role: "Programmerare" },
    ],
    columns: ["Name", "Role"],
    maxId: 2,
  };

  addEmployee = (e) => {
    const newMaxId = this.state.maxId + 1;
    let newPersonal = { id: newMaxId, name: "firstname", role: "jobtitle" };
    console.log("addRow", this.state);
    this.setState((state) => ({
      employees: [newPersonal, ...state.employees],
      maxId: newMaxId,
    }));
  };

  deleteEmployee = (id) => {
    console.log("id i deleteEmployee", id);
    this.setState({
      employees: [
        ...this.state.employees.filter((employee) => employee.id !== id),
      ],
    });
    //maxId uppdateras inte eftersom det är en sekventiell räknare
  };

  render() {
    return (
      <div>
        <div className="App">
          <Table
            title="Employees"
            columns={this.state.columns}
            data={this.state.employees}
            addRow={this.addEmployee}
            deleteRow={this.deleteEmployee}
          />
        </div>
      </div>
    );
  }
}

export default App;
