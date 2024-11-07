"use client";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, Marker, Popup, ZoomControl } from "react-leaflet";
import { MapLibreTileLayer } from "./MapLibreTileLayer";
import RoutingMachine from "./RoutingMachine";

type Props = {};

const RoadMap = () => {
  const [waypoints, setWaypoints] = useState<L.LatLng[]>();

  const handleWaypointsChange = (newWaypoints: L.LatLng[]) => {
    setWaypoints(newWaypoints);
  };

  console.log(waypoints);

  const mapStyles = [
    "https://tiles.stadiamaps.com/styles/alidade_smooth.json",
    "https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json",
    "https://tiles.openfreemap.org/styles/positron",
    "https://umap.openstreetmap.fr/en/map/untitled-map_1135617",
    "https://tiles.versatiles.org/assets/styles/colorful.json",
    "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
  ];

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      zoomControl={false}
      className={"w-screen h-[60vh] z-[1]"}
    >
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
      <MapLibreTileLayer
        attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
        url={mapStyles[0]}
      />
      <ZoomControl position={"topright"} />
      <RoutingMachine onWaypointsChange={handleWaypointsChange} />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default RoadMap;
