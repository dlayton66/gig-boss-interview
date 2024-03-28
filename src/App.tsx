import './App.css';
import data from './data/income_data_2023_24.json'
import BandDropdown from './components/BandDropdown.tsx'
import Band from './interfaces/Band.ts'
import { useState } from 'react';

function App() {
  const [selectedBand, setSelectedBand] = useState('');
  const receiveSelection = (selection: string) => {
    setSelectedBand(selection);
  }
  
  const get_band_income = (band: Band) => {
    return band.members.reduce((accumulator, member) => accumulator + member.income, 0);
  }
  let get_band_names = data.bands.map((band: Band) => band.band_name)
  let total_income = data.bands.reduce((accumulator, band) => accumulator + get_band_income(band), 0);

  console.log(selectedBand)
  return (
    <div className="app">
      <div className="total-income">
        Total Income for 2023-2024: <span>${total_income}</span>
      </div>
      <BandDropdown band_names={get_band_names} onSelect={receiveSelection}/>
    </div>
  )

}

export default App;