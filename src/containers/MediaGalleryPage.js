import React, { Component } from 'react';
import { FlickrImages, ShutterStockVideos } from '../api/Api';

class MediaGalleryPage extends Component {

    componentDidMount() {
        FlickrImages('rain').then(images => console.log(images, 'Images'));
        ShutterStockVideos('rain').then(videos => console.log(videos, 'Videos'));
    }

    render() {
        return (<div></div>);
    }

}

export default MediaGalleryPage;