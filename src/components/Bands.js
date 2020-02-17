import React, { Component } from 'react'
import Band from './Band'


class Bands extends Component {
    render() {
        let arrayOfComponents=this.props.bands.map(bandObj=><Band key={bandObj.id} deleteBand={this.props.deleteBand} band={bandObj}/>)
        // console.log(this.props.bands) 
        return (
        <div>
            {arrayOfComponents}
        </div>  );
    }
}
 
export default Bands;