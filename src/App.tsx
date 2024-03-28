import "./App.css";
import data from "./data/income_data_2023_24.json";
import BandDropdown from "./components/BandDropdown.tsx";
import RenderArea from "./components/RenderArea.tsx";
import Band from "./interfaces/Band.ts";
import { useState } from "react";
import { get_band_by_name, get_band_income } from "./utils/BandUtils.ts";

function App() {
  const [selectedBandName, setSelectedBandName] = useState("");
  let selectedBand = get_band_by_name(selectedBandName)
  const receiveSelection = (selection: string) => {
    setSelectedBandName(selection);
  };

  let get_band_names = data.bands.map((band: Band) => band.band_name);
  let total_income = data.bands.reduce(
    (accumulator, band) => accumulator + get_band_income(band),
    0
  );

  return (
    <div className="app">
      <div className="total-income">
        Total Income for 2023-2024: <span>${total_income}</span>
      </div>
      <BandDropdown band_names={get_band_names} onSelect={receiveSelection} />
      <RenderArea band={selectedBand} />
    </div>
  );
}

export default App;
