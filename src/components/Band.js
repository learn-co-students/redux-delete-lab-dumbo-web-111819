import React, { Component } from 'react';
// import {connect} from 'react-redux'
class Band extends Component {
  
  handleDelete=(e) => {
    console.log(this.props.band.id)
    // console.log(this.props.band.name)
    this.props.deleteBand(this.props.band.id)
  }

  render() {
    return(
      <li>
        <span>{this.props.band.name}</span><button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
};
// const mapDispatchToProps=(dispatch) => {
//   return{
//     deleteBand:(band) => {
//       dispatch({type:'DELETE_BAND',band})
//     }
//   }
// }

export default Band;
