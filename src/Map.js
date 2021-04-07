import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';


const token = 'YOUR TOKEN';
mapboxgl.accessToken = `${token}`;



// Sample data
const data = [
  {
    "location": "Colosseum",
    "city": "Rome",
    "state": "Italy",
    "coordinates": [12.4922,41.8902],
  },
  {
    "location": "Pisa Tower",
    "city": "Pisa",
    "state": "Italy",
    "coordinates": [ 10.4017,43.7228],
  },
  {
    "location": "Duomo",
    "city": "Milan",
    "state": "Italy",
    "coordinates": [ 9.1919,45.4641],
  },
  {
    "location": "Eiffel Tower",
    "city": "Paris",
    "state": "France",
    "coordinates": [2.2945,48.8584],
  }
]

class Mapp extends React.Component{

  // Set up states for updating map
  constructor(props){
    super(props);
    this.state = {
      lng: 12.4922,
      lat: 41.8902,
      zoom: 5
    }
  }

  // Create map and lay over markers
  componentDidMount(){
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/lambojack/ckn7oys1o0oth17pfehvpg8zx',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    })

    map.addControl(new mapboxgl.NavigationControl());

    data.forEach((location) => {
      console.log(location)
      var marker = new mapboxgl.Marker()
              .setLngLat(location.coordinates)
              .setPopup(new mapboxgl.Popup({ offset: 30 })
              .setHTML('<h4>' + location.city + '</h4>' + location.location))
              .addTo(map);

    })
  }



  render(){
    return(
      <div>
        <div ref={el => this.mapContainer = el} style={{width:'100%', height:'100vh'}}/>
      </div>
    )
  }
}

export default Mapp;
