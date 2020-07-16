import React from 'react';
import PixelateItem from './PixelateItem';

class PixelateGroup extends React.Component {

    image = new Image();

    arrayColors = [];

    counts = {};

    constructor(props) {

        super(props);

        this.createImage();

        this.state = {
            distance: 1,
            palette: [
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
        };

    }

    createImage() {

        const { withPalette, pixelsToConvert } = this.props;

        this.image.src = this.props.src;
        this.image.onload = () => {
             this.arrayColors = paintPixels(this.image, pixelsToConvert, this.state.palette, withPalette);
             this.arrayColors.forEach(color => {
                this.counts[color] = (this.counts[color] + 1) || 1;
            });
             this.forceUpdate();
        };

    }

    render() {

        const { withPalette, type, distance, pixelsToConvert } = this.props;

        const height = [...Array(pixelsToConvert).keys()];
        
        const width = [...Array(pixelsToConvert).keys()];

        this.arrayColors = [];

        this.arrayColors = paintPixels(this.image, pixelsToConvert, this.state.palette, withPalette);

        this.counts = {};

        let dictionary = new Object();

        this.arrayColors.forEach((color, index) => {
            this.counts[color] = (this.counts[color] + 1) || 1;

            //console.log(index, pixelsToConvert, index % pixelsToConvert, Math.floor(index / pixelsToConvert));

             dictionary[index] = 
                 [[Math.floor(index / pixelsToConvert), index % pixelsToConvert],
                 [color[0], color[1], color[2]]]
            
        });

        const pixelsConverted = convertPixels(height, width, type, distance, this.arrayColors);

        const counts = this.counts;

        return <div style={{backgroudColor: 'black'}}>
            { pixelsConverted }
            <h1>Quantity of different colors</h1> 
            <div>
                {
                    Object.keys(this.counts).map(function(key){
                        return <div key={key}> { key + ' - ' + counts[key] }</div>
                    })
                }
            </div>
            <h1>Dictionary</h1>
             <div>
                {
                    JSON.stringify(dictionary)
                }
            </div>
        </div>;
    }
}

export default PixelateGroup;

function convertPixels(height, width, type, distance, arrayColors) {

    var count = 0;

    const colorDefault = 'black';

    //

    var color;

    return height.map(n => {
        return <div key={n} style={{ margin: distance - 8 }}>
            {

                width.map(nm => {

                    color = arrayColors ? arrayColors[count++] : colorDefault;

                    return <PixelateItem key={n + '' + nm} 
                        type={type} 
                        distance={distance} 
                        color={`rgba(${color[0]},${color[1]},${color[2]},${(255)})`} />
                })
            }
        </div>;
    });
}

function paintPixels(img, pixelsToConvert, palette, withPalette) {

    const arrayColors = [];

    let xColorPick;
    let yColorPick;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    const width = img.width;
    const height = img.height;

    canvas.width = width;
    canvas.height = height;

    const pixelSize = (height / (pixelsToConvert - 1)) + 0.0000000001;

    context.drawImage(img, 0, 0, width, height);

    if (!isNaN(pixelSize) && pixelSize > 0) {

        for (let y = 0; y < img.height + pixelSize; y += pixelSize) {
            for (let x = 0; x < img.width + pixelSize; x += pixelSize) {
                xColorPick = x;
                yColorPick = y;

                if (x >= img.width) {
                    xColorPick = x - (pixelSize - (img.width % pixelSize) / 2) + 1;
                }
                if (y >= img.height) {
                    yColorPick = y - (pixelSize - (img.height % pixelSize) / 2) + 1;
                }

                let rgba = context.getImageData(xColorPick, yColorPick, 1, 1).data;

                if (withPalette) {

                    rgba = similarColor(rgba, palette);

                } 

                arrayColors.push(rgba);

            }
        }
      
    }

    return arrayColors;
}

function colorSim(rgbColor, compareColor) {
    let i;

    let d = 0;

    for (i = 0; i < 3; i++) {
        d += (rgbColor[i] - compareColor[i]) * (rgbColor[i] - compareColor[i]);
    }

    return Math.sqrt(d);
}

function similarColor(actualColor, palette) {

    let selectedColor = [];

    let currentSim = colorSim(actualColor, palette[0]);

    palette.forEach(color => {
        if (colorSim(actualColor, color) <= currentSim) {
            selectedColor = color;
            currentSim = colorSim(actualColor, color);
        }
    });

    return selectedColor;

}