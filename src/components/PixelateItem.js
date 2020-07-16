import React, { Component } from 'react';

class PixelateItem extends Component {

    render() {

        const { type, distance, color } = this.props;

        return (
            <div className={'pixelateItem ' + type} style={{marginLeft: distance, backgroundColor: color}}>
                
            </div>
        );
    }
}

export default PixelateItem;