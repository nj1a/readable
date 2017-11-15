import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Categories from './Categories';
// import Category from './Category';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Route exact path='/' component={Categories} />
                {/* <Route path='/:category/posts' render={() => (
                    <Category />
                )} /> */}
            </div>
        );
    }
}

export default App;
