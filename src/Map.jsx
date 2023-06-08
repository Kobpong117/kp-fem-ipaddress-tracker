import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { useMap } from 'react-leaflet/hooks'
import { Icon } from 'leaflet';
import marker from '../public/images/Map-Pointer.svg'

const Map = ({coordinates}) => {

    const position = [coordinates[0], coordinates[1]]
    const MapComponent = () => {
        const map = useMap()
        map.panTo(new L.LatLng(coordinates[0], coordinates[1]))
        return null
    }

    const myIcon = new Icon({
        iconUrl: marker,
        iconSize: [50,50]
    })
       

  return (
        
        <MapContainer center={position} zoom={15} scrollWheelZoom={true} zoomControl={false}>
            <MapComponent />
            <TileLayer 
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={myIcon}>
                <Popup>I'm here 😀</Popup>
            </Marker>
        </MapContainer>
   
  )
}
export default Map