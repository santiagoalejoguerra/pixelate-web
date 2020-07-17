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


    createImage = src => {

        const image = new Image();

        image.src = src;

        return image;

    }

    state = {
        withPalette: true,
        square: false,
        distance: 1,
        pixelsToConvert: 20,
        paletteSelected: this.palette,
        image: this.createImage(britta)
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

        const image = this.createImage(value);

        image.onload = () => {

            this.setState({
                [name]: value,
                image: image   
            });

        }

        

    }

    handleInputChangePalette = (event) => {

        const target = event.target;

        const value = target.checked;

        const name = target.name;

        const nameArray = name.split(",");

        const nameColor = [ Number(nameArray[0]), Number(nameArray[1]), Number(nameArray[2]) ];

        console.log(nameColor);

        if (value) {

            const palette = this.state.paletteSelected;

            palette.push(nameColor);

            this.setState({ paletteSelected: palette})
        } else {

            const palette = this.state.paletteSelected;

            this.setState({ paletteSelected: palette.filter(color => {

                console.log(color, nameColor, color.includes(nameColor), color.every(v => nameColor.includes(v)));
                
                return !color.every(v => nameColor.includes(v));
                
            })})
        }

        //console.log("PALETTE", this.state.paletteSelected);

    }

    render() {

        const { withPalette, square, distance, pixelsToConvert, file, image } = this.state;

       //console.log("file", file);
        
        return (
            <div>
                <div className="main">
                    <div className="App-img">
                        <img src={file} className="img" alt="img" />
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
                            Select palette colors
                            {
                                this.palette.map((color, index) => {
                                    return <div key={color} 
                                    style={{
                                        backgroundColor: `rgba(${color[0]},${color[1]},${color[2]},${(255)})`,
                                        color: `rgba(${255 - color[0]},${255 - color[1]},${255 - color[2]},${(255)})`}} ><input 
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
                    image={image}
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