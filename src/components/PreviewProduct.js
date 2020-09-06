import React, { Component, Fragment } from 'react';


class PreviewProduct extends Component {

    render() {

        const { product, images, currentImage } = this.props;

        return (
            <Fragment>
                <img src={images[currentImage]} width="100%" className="preview"/>
            </Fragment>
        );
    }
}

export default PreviewProduct;