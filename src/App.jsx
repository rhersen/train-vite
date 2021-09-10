import React, { useState } from "react";
import "./App.css";
import locations from "./location.js";

function App() {
  const [announcements, setAnnouncements] = useState([]);

  return (
    <div className="App">
      <button
        type="button"
        onClick={() =>
          fetch(
            "/.netlify/functions/node-fetch?trainId=438&since=2021-09-09T23:59:59&until=2021-09-10T23:59:59"
          )
            .then((response) => response.json())
            .then((response) => {
              setAnnouncements(response.TrainAnnouncement);
            })
        }
      >
        fetch
      </button>
      <table>
        <tbody>
          {announcements.map((announcement) => (
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

function trim(time) {
  if (time) return time.toString().substring(11, 19);
  return "...";
}

export default App;
