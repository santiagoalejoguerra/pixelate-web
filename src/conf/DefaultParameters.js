import imageUtils from '../utils/ImageUtils';

import britta from '../images/britta.png';

const palette = [
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

const crop = { aspect: 16 / 9 };

export default {
    withPalette: true,
    square: false,
    distance: 1,
    pixelsToConvert: 60,
    paletteSelected: palette,
    image: imageUtils.createImage(britta),
    crop: crop
}