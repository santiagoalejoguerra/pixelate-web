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
            palette: props.paletteSelected
        };

    }

    createImage(src) {

        //this.image.src = src;

        this.image = src;

    }

    render() {

        this.createImage(this.props.image);

        const { withPalette, type, distance, pixelsToConvert, paletteSelected } = this.props;


        const height = [...Array(Math.floor((this.image.height * pixelsToConvert) / this.image.width) + 1).keys()];

        const width = [...Array(pixelsToConvert).keys()];

        this.arrayColors = [];

        this.arrayColors = paintPixels(this.image, pixelsToConvert, paletteSelected, withPalette);

        this.counts = {};

        let dictionary = {};

        this.arrayColors.forEach((color, index) => {
            this.counts[color] = (this.counts[color] + 1) || 1;

             dictionary[index] = 
                 [[Math.floor(index / pixelsToConvert), index % pixelsToConvert],
                 [color[0], color[1], color[2]]]
            
        });

        const pixelsConverted = convertPixels(height, width, type, distance, this.arrayColors);

        const counts = this.counts;

        return <div className="pixeled">
            <div style={{backgroundColor: 'gray'}}>
                { pixelsConverted }
            </div>
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

    var color;

    return height.map(n => {
        return <div width="100%" key={n} style={{ margin: distance - 8, display: "block ruby" }}>
            {

                color = arrayColors && arrayColors[count] ?

                    width.map(nm => {

                        color = arrayColors && arrayColors[count] ? arrayColors[count++] : colorDefault;
    
                        return <PixelateItem key={n + '' + nm} 
                            type={type} 
                            distance={distance} 
                            color={`rgba(${color[0]},${color[1]},${color[2]},${(255)})`} />
                    })

                    :

                    <div></div>

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

    const pixelSize = (width / (pixelsToConvert - 1)) + 0.0000000001;

    context.drawImage(img, 0, 0, width, height);

    if (!isNaN(pixelSize) && pixelSize > 0) {

        const heightWitPixelSize = height + pixelSize;

        const widthWithPixelSize = width + pixelSize;

        for (let y = 0; y < heightWitPixelSize; y += pixelSize) {
            for (let x = 0; x < widthWithPixelSize; x += pixelSize) {
                xColorPick = x;
                yColorPick = y;

                if (x >= img.width) {
                    xColorPick = x - (pixelSize - (width % pixelSize) / 2) + 1;
                }
                if (y >= img.height) {
                    yColorPick = y - (pixelSize - (height % pixelSize) / 2) + 1;
                }

                let rgba = context.getImageData(xColorPick, yColorPick, 1, 1).data;

                if (withPalette && palette.length > 0) {

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