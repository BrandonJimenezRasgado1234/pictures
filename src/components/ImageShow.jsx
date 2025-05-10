const ImageShow = ((image)) => {
    return{
<div>
<img src={image.uris.small} alt={image.alt_description} />
</div>
    }
}

export default ImageShow
