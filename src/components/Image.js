import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

class Image extends PureComponent {

    constructor(props) {

        super(props);

        //this.callbackImgCropped = props.callbackImgProps;

        console.log("Paso el constructor");

    }

    state = {
        crop: {
          aspect: 1/1,
          unit: '%',
          width: 75,
          height: 75
        },
      };

      onCropChange = (crop, percentCrop) => {
        this.setState({ crop });
      };

    onCropComplete = crop => {
        this.makeClientCrop(crop);
      };

    onImageLoaded = image => {
        this.imageRef = image;
      };

    async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
          this.props.callbackImgCropped({ image: this.imageRef, crop: crop});
        }
      }
    
    getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
    
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height
        );
    
         return new Promise((resolve, reject) => {

          canvas.toBlob(blob => {
            if (!blob) {
              console.error('Canvas is empty');
              return;
            }
            blob.name = fileName;
            window.URL.revokeObjectURL(this.fileUrl);
            this.fileUrl = window.URL.createObjectURL(blob);
            resolve(this.fileUrl);
          }, 'image/jpeg');
        })
      }
        
    render() {

        const { src } = this.props;

        const { crop, croppedImageUrl } = this.state;

        return (
            <div className="App">
                <ReactCrop 
                    src={src} 
                    ruleOfThirds
                    keepSelection
                    onComplete={this.onCropComplete}
                    onImageLoaded={this.onImageLoaded}
                    crop={crop} 
                    onChange={this.onCropChange} />
                {/* {croppedImageUrl && (
                <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
                )} */}
            </div>
        )

    }

}

export default Image