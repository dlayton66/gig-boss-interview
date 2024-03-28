import "../components/RenderArea.css"
import Band from "../interfaces/Band";
import { get_band_income } from "../utils/BandUtils";

interface Props {
  band: Band | undefined;
}

function RenderArea({band}: Props) {
  if (band)
    console.log(band.members);
  return (
    <div className="render-area">
      {band && (
        <>
          <div className="band-name">{band.band_name}</div>
          <div>
            Total Band Income: ${get_band_income(band)}
          </div>
          <div className="divider"></div>
          {band.members.map((member) => (
            <div>{member.name === 'You' ? 'My Income' : member.name}: ${member.income}</div>
          ))}
        </>
      )}
    </div>
  )
}

export default RenderArea;