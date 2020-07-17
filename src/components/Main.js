import React, { Component } from 'react';

import britta from '../images/britta.png';
import PixelateGroup from './PixelateGroup';

class Main extends Component {

    palette = [
        [140,143,174],
        [88,69,99],
        [62,33,55],
        [154,99,72],
        [215,155,125],
        [245,237,186],
        [192,199,65],
        [100,125,52],
        [228,148,58],
        [157,48,59],
        [210,100,113],
        [112,55,127],
        [126,196,193],
        [52,133,157],
        [23,67,75],
        [31,14,28],
        [0,0,0],
        [255,255,255]
      ]

    state = {
        withPalette: true,
        square: false,
        distance: 1,
        pixelsToConvert: 20,
        paletteSelected: this.palette,
        file: britta
    }

    handleInputChange = (event) => {
        const target = event.target;

        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.type === 'file' ? URL.createObjectURL(target.files[0]) : target.name;

        this.setState({
            [name]: value    
        });

    }

    handleInputChangeFile = (event) => {
        const target = event.target;

        const value = URL.createObjectURL(target.files[0])
        const name =  target.name;

        this.setState({
            [name]: value    
        });

    }

    handleInputChangePalette = (event) => {

        const target = event.target;

        const value = target.checked;

        const name = target.name;

        if (value) {

            const palette = this.state.paletteSelected;
            palette.push(name);

            this.setState({ paletteSelected: palette})
        } else {
            this.setState({ paletteSelected: this.state.paletteSelected.find(color => color !== name).map(color => [color])})
        }

    }

    render() {

        const { withPalette, square, distance, pixelsToConvert, file } = this.state;

        console.log("file", file);
        
        return (
            <div>
                <div className="main">
                    <div className="App-img">
                        <img src={file} className="img" />
                    </div>
                    <div className="parameters">
                        <div>
                            Load image <br />
                            <input
                                name="file" type="file"
                                checked={file}
                                onChange={this.handleInputChangeFile} />
                        </div>
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
                        <div>
                            Pixels throughout: 
                            <input
                                name="pixelsToConvert" type="number"
                                defaultValue={this.state.pixelsToConvert}
                                checked={pixelsToConvert}
                                onChange={this.handleInputChange} />
                        </div>
                    </div>
                    <div className="parameters">
                        <div>
                            Select palette colors (Does not work for now)
                            {
                                this.palette.map((color, index) => {
                                    return <div key={color}><input 
                                        name={color}
                                        type="checkbox"
                                        checked={this.state.paletteSelected.find(found => found === color)}
                                        onChange={this.handleInputChangePalette} />
                                            <label>{color[0] + " " + color[1] + " " + color[2]}</label>
                                        </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <PixelateGroup 
                    src={file}
                    withPalette={withPalette}
                    type={square ? 'square' : 'circle'}
                    distance={distance}
                    paletteSelected={this.state.paletteSelected}
                    pixelsToConvert={Number(pixelsToConvert)}
                />
            </div>
        );
        
    }
}

export default Main;