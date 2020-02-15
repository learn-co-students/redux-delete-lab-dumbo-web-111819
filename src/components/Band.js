import React, { Component } from 'react';

class Band extends Component {

  deleteBand = () => {
    this.props.deleteBand(this.props.band.id)
  }
  render() {
    // console.log(this.props.band);
    
    return(
      <li>
        {this.props.band.bandName}
        <button onClick={this.deleteBand}>delete</button>
      </li>
    );
  }
};

export default Band;
