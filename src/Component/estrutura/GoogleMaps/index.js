import React from "react";
import {GoogleApiWrapper} from 'google-maps-react';

// ...

export class MapContainer extends React.Component {}

export default GoogleApiWrapper({
    apiKey: ('teak-instrument-263918')
})(MapContainer)