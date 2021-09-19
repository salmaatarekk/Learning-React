
import React, { Component } from "react";

class HTTP_APP extends React.Component {
  render() {
    return (
        <React.Fragment>
        <button className = "btn btn-primary" >ADD</button>
     
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      </React.Fragment>
    );
  }
}

export default HTTP_APP;
