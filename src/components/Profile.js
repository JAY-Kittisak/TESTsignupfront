import React from 'react';
import axios from 'axios';

export default class Profile extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get('http://localhost:4700/app/mytables').then(res => {
      console.log(res);
      this.setState({ persons: res.data });
    });
  }

  render() {
    return (
    
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
          <ul>
        {this.state.persons.map(person => (<li key={person.id}>{person.fullName},{person.username},{person.email},{person.password}</li>))}
      </ul>
        </div>
      </div>
      
      
    )
  }
}

// import React, { Component } from "react";

// class Profile extends Component {
//   constructor() {
//     super();
//     this.state = {
//       first_name: "",
//       last_name: "",
//       email: "",
//       errors: {},
//     };
//   }

//   render() {
//     return (
      // <div className="container">
      //   <div className="jumbotron mt-5">
      //     <div className="col-sm-8 mx-auto">
      //       <h1 className="text-center">PROFILE</h1>
      //     </div>
      //     <table className="table col-md-6 mx-auto">
      //       <tbody>
      //         <tr>
      //           <td>Fist Name</td>
      //           <td>{this.state.first_name}</td>
      //         </tr>
      //         <tr>
      //           <td>Last Name</td>
      //           <td>{this.state.last_name}</td>
      //         </tr>
      //         <tr>
      //           <td>Email</td>
      //           <td>{this.state.email}</td>
      //         </tr>
      //       </tbody>
      //     </table>
      //   </div>
      // </div>
//     );
//   }
// }

// export default Profile;
