import { createControlComponent } from "@react-leaflet/core";
import L, { Control, ControlOptions } from "leaflet";
import "leaflet-routing-machine";

type RoutingMachineProps = ControlOptions & {
  onWaypointsChange: (waypoints: L.LatLng[]) => void;
};

const createRoutineMachineLayer = (props: RoutingMachineProps) => {
  const instance = L.Routing.control({
    waypoints: [L.latLng(51.505, -0.09), L.latLng(51.515, -0.09)],
    alternativeClassName: "hidden",
  });

  instance.on("routesfound", (e) => {
    const waypoints = e.routes[0].waypoints;
    props.onWaypointsChange(waypoints.map((wp: any) => wp.latLng));
  });

  return instance;
};

const RoutingMachine = createControlComponent<Control, RoutingMachineProps>(
  createRoutineMachineLayer
);

export default RoutingMachine;
