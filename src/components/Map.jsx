import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ lat, lng }) => (
  <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "300px" }}
      center={{ lat, lng }}
      zoom={14}>
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  </LoadScript>
);
export default Map;
