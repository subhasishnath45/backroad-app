import React from 'react'

const ImageSliderSingle = ({id, image, caption}) => {
    return (
        <div>
            <figure>
                <figcaption>
                    <h2 className='carousel-caption'>{caption}</h2>
                </figcaption>
                <img key={id} src={image} />
            </figure>
        </div>
    )
}

export default ImageSliderSingle
