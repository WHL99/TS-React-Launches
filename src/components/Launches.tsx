import launchesData from "./../space-launches.json";
import { Lau } from "../interfaces";
import { useState } from "react";
import LaunchCard from "./LaunchCard";

function Launches() {
  const [launches, setLaunches] = useState<Lau[]>(launchesData);
  const handleRemove = (
    event: React.MouseEvent<HTMLButtonElement>,
    missionName: string
  ): void => {
    const launchesFiltered = launches.filter((launch) => {
      return launch.mission_name !== missionName;
    });
    setLaunches(launchesFiltered);
    console.log(event, missionName);
  };
  return (
    <div>
      <h1>Past Launches</h1>
      <p>
        {launches.map((launch) => {
          return <LaunchCard launch={launch} handleRemove={handleRemove} />;
        })}
      </p>
    </div>
  );
}

export default Launches;
