import { Lau } from "../interfaces";

interface Props {
  launch: Lau;
  handleRemove(
    event: React.MouseEvent<HTMLButtonElement>,
    missionName: string
  ): void;
}

function LaunchCard({ launch, handleRemove }: Props) {
  return (
    <div className="launch-card">
      <h1>{launch.mission_name}</h1>
      <img src={launch.links.mission_patch_small} alt="mission-img" />
      {launch.launch_success ? (
        <p> Successful!</p>
      ) : (
        <p>
          Launch Failed: <br />
          {launch.launch_failure_details.reason}
        </p>
      )}
      <button onClick={(event) => handleRemove(event, launch.mission_name)}>
        Remove
      </button>
    </div>
  );
}

export default LaunchCard;

// "launch_success": false,
//     "launch_failure_details": {
//       "time": 33,
//       "altitude": null,
//       "reason": "merlin engine failure"
//     },
