import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
    lat: 12.9689082,
    lng: 79.1411827
  };
  
  const SimpleSparkleLocation = {
    lat: 12.9689082,
    lng: 79.1411827
  };
  
  const googleMapsApiKey =import.meta.env.REACT_APP_GOOGLE_API_KEY;
  const MapPointer = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey
  });

  if (!isLoaded) return <div>Loading...</div>;

  const handleMarkerClick = () => {
    // Open Google Maps in a new tab focused on this location
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${SimpleSparkleLocation.lat},${SimpleSparkleLocation.lng}`, '_blank');
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
    >
      <Marker
        position={SimpleSparkleLocation}
        onClick={handleMarkerClick}
        icon={{
          url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // Red marker icon
          scaledSize: new window.google.maps.Size(40, 40) // Adjusts the icon size
        }}
      />
    </GoogleMap>
  );
};

export default MapPointer;
