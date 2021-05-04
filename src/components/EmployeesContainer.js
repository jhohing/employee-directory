import React, { Component } from "react";
import EmployeeTable from "./EmployeeTable";
import API from "../utils/API";

class EmployeesContainer extends Component {
  state = {
    search: "",
    employees: [],
    sortDirections: this.initialSortDirections,
  };

  get initialSortDirections() {
    return {
      name: "",
      phone: "",
      email: "",
      dob: "",
    };
  }

  // When this component mounts, load random users as employees from https://randomuser.me/
  componentDidMount() {
    API.getEmployees()
      .then((res) =>
        this.setState({
          employees: res.data.results
        })
      )
      .catch((err) => console.log(err));
  }

  // Sort with the key of specified object.
  sortBy = (key, primary = 0, secondary = 0) => {
    let sortedEmployees = this.state.employees;
    if (this.state.sortDirections[key]) {
      this.setState({
        sortDirections: {
          ...this.initialSortDirections,
          [key]: this.state.sortDirections[key] === "asc" ? "desc" : "asc",
        },
      });
    } else {
      sortedEmployees = this.state.employees.sort((a, b) => {
        a = a[key];
        b = b[key];

        // If secondary comparison given and primary comparison is equal
        // Example: Sorting by last name, if last names are equal, then sort that instance by first name instead.
        if (primary) {
          if (secondary && a[primary] === b[primary]) {
            return a[secondary].localeCompare(b[secondary]);
          }
          return a[primary].localeCompare(b[primary]);
        } else {
          return a.localeCompare(b);
        }
      });

      this.setState({
        sortDirections: {
          ...this.initialSortDirections,
          [key]: "asc",
        },
      });
    }
  };

  formatDate = (date) => {
    date = new Date(date);
    let dob = [];
    dob.push(("0" + (date.getMonth() + 1)).slice(-2));
    dob.push(("0" + date.getDate()).slice(-2));
    dob.push(date.getFullYear());

    // Join formatted date
    return dob.join("-");
  };

  render() {
    return (
      <>
        <div className="container mt-4">
          <EmployeeTable
            state={this.state}
            sortBy={this.sortBy}
            employees={this.employees}
            formatDate={this.formatDate}
          />
        </div>
      </>
    );
  }
}

export default EmployeesContainer;