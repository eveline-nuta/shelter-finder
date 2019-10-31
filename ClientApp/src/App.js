import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { ShelterFinder } from './components/ShelterFinder';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './custom.css'

export class App extends Component {
    static displayName = App.name; 

    render() {
   
        return (
            <Layout>
                <Route path='/shelter-finder' component={ShelterFinder} />
                <Route path='/fetch-data' component={FetchData} />
            </Layout>

        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBWTxyFJgAjONaHNx3i5s2sOjNcvcd9W8Q'
})(ShelterFinder);