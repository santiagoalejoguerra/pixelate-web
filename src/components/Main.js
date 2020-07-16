import React, { Component } from 'react';

import britta from '../images/britta.png';
import PixelateGroup from './PixelateGroup';

class Main extends Component {

    state = {
        withPalette: true,
        square: false,
        distance: 1,
        pixelsToConvert: 40
    }

    handleInputChange = (event) => {
        const target = event.target;

        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value    
        });

    }

    render() {

        const { withPalette, square, distance, pixelsToConvert } = this.state;
        
        return (
            <div>
                <div>
                    <img src={britta} className="App-logo" alt="logo" />
                    <div>
                        <div>
                            With limited palette?
                            <input
                                name="withPalette" type="checkbox"
                                checked={withPalette}
                                onChange={this.handleInputChange} />
                        </div>
                        <div>
                            Square?
                            <input
                                name="square" type="checkbox"
                                checked={square}
                                onChange={this.handleInputChange} />
                        </div>
                        {/* <div>
                            Distance between bottons
                            <input
                                name="distance" type="number"
                                checked={distance}
                                onChange={this.handleInputChange} />
                        </div> */}
                        <div>
                            Pixels throughout
                            <input
                                name="pixelsToConvert" type="number"
                                defaultValue="40"
                                checked={pixelsToConvert}
                                onChange={this.handleInputChange} />
                        </div>
                    </div>
                </div>
                <PixelateGroup 
                    src={britta}
                    withPalette={withPalette}
                    type={square ? 'square' : 'circle'}
                    distance={distance}
                    pixelsToConvert={Number(pixelsToConvert)}
                />
            </div>
        );
        
    }
}

export default Main;