import React, { useState } from "react";
import "./App.css";
import locations from "./location";

export interface ToLocation {
  LocationName: string;
  Priority: number;
  Order: number;
}

export interface TrainAnnouncement {
  ActivityType: string;
  AdvertisedTimeAtLocation: Date;
  AdvertisedTrainIdent: string;
  LocationSignature: string;
  ToLocation: ToLocation[];
  TimeAtLocation?: Date;
  TimeAtLocationWithSeconds?: Date;
}

export interface INFO {
  SSEURL: string;
}

function App() {
  const [announcements, setAnnouncements] = useState<TrainAnnouncement[]>([]);

  return (
    <div className="App">
      <button
        type="button"
        onClick={() =>
          fetch(
            "/.netlify/functions/node-fetch?trainId=438&until=2021-09-10T23:59:59"
          )
            .then((response) => response.json())
            .then(
              (response: {
                TrainAnnouncement: TrainAnnouncement[];
                INFO: INFO;
              }) => {
                setAnnouncements(response.TrainAnnouncement);
              }
            )
        }
      >
        fetch
      </button>
      <table>
        <tbody>
          {announcements.map((announcement: TrainAnnouncement) => (
            <tr
              key={
                announcement.ActivityType +
                announcement.AdvertisedTimeAtLocation +
                announcement.TimeAtLocationWithSeconds
              }
            >
              <td>{announcement.ActivityType}</td>
              <td>{locations[announcement.LocationSignature]}</td>
              <td>{trim(announcement.AdvertisedTimeAtLocation)}</td>
              <td>{trim(announcement.TimeAtLocationWithSeconds)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function trim(time?: Date): string {
  if (time) return time.toString().substring(0, 19);
  return "...";
}

export default App;
