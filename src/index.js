import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import './index.css';
import App from './containers/App';
import HomePage from './components/HomePage'
import MediaGalleryPage from './containers/MediaGalleryPage'

ReactDOM.render(
    <Router>
        <div>
            <App />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/library" component={MediaGalleryPage} />
        </div>
    </Router>
    ,
    document.getElementById('root'));
registerServiceWorker();
