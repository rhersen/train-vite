import React, { useState } from "react";
import "./App.css";

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
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button
            type="button"
            onClick={() =>
              fetch(
                "/.netlify/functions/node-fetch?trainId=7228&until=2021-09-11T23:59:59"
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
            {announcements.map((announcement: TrainAnnouncement) => (
              <tr>
                <td>{announcement.ActivityType}</td>
                <td>{announcement.LocationSignature}</td>
                <td>{trim(announcement.AdvertisedTimeAtLocation)}</td>
                <td>{trim(announcement.TimeAtLocationWithSeconds)}</td>
              </tr>
            ))}
          </table>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

function trim(time?: Date): string {
  if (time) return time.toString().substring(8, 19);
  return "...";
}

export default App;
