import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ lat, lng }) => (
  <LoadScript googleMapsApiKey="AIzaSyAFnaWen9hCjmtvRubuwA8hpC2JMZEOOuA">
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "300px" }}
      center={{ lat, lng }}
      zoom={14}>
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  </LoadScript>
);
export default Map;
